#!/usr/bin/env bash
set -euo pipefail

# Presenton local development runner (cloud-only)
# Starts:
# - FastAPI backend (127.0.0.1:8000)
# - Next.js frontend (127.0.0.1:3000)
# Optional:
# - MCP server (127.0.0.1:8001) with --with-mcp
#
# Usage:
#   ./dev.sh
#   ./dev.sh --setup
#   ./dev.sh --with-mcp
#   ./dev.sh --setup --with-mcp

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FASTAPI_DIR="$ROOT_DIR/servers/fastapi"
NEXTJS_DIR="$ROOT_DIR/servers/nextjs"

WITH_MCP="false"
DO_SETUP="false"

for arg in "$@"; do
  case "$arg" in
    --with-mcp) WITH_MCP="true" ;;
    --setup) DO_SETUP="true" ;;
    -h|--help)
      sed -n '1,30p' "$0"
      exit 0
      ;;
    *)
      echo "Unknown option: $arg"
      echo "Use --help for usage."
      exit 1
      ;;
  esac
done

export APP_DATA_DIRECTORY="${APP_DATA_DIRECTORY:-$ROOT_DIR/app_data}"
export TEMP_DIRECTORY="${TEMP_DIRECTORY:-/tmp/presenton}"
export USER_CONFIG_PATH="${USER_CONFIG_PATH:-$APP_DATA_DIRECTORY/userConfig.json}"
export DATABASE_URL="${DATABASE_URL:-sqlite+aiosqlite:///$APP_DATA_DIRECTORY/fastapi.db}"

mkdir -p "$APP_DATA_DIRECTORY" "$TEMP_DIRECTORY"

if ! command -v npm >/dev/null 2>&1; then
  echo "npm not found. Install Node.js + npm first."
  exit 1
fi

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 not found. Install Python 3.11 first."
  exit 1
fi

if command -v python3.11 >/dev/null 2>&1; then
  PYTHON_SETUP_CMD="python3.11"
else
  PYTHON_SETUP_CMD="python3"
fi

if ! "$PYTHON_SETUP_CMD" -c 'import sys; raise SystemExit(0 if (sys.version_info.major, sys.version_info.minor)==(3,11) else 1)' >/dev/null 2>&1; then
  echo "Python 3.11 is required. Found: $($PYTHON_SETUP_CMD -V 2>&1)"
  echo "Install Python 3.11 and ensure 'python3.11' is available in PATH."
  exit 1
fi

PYTHON_CMD="python3"
if [[ -x "$FASTAPI_DIR/.venv/bin/python" ]]; then
  PYTHON_CMD="$FASTAPI_DIR/.venv/bin/python"
fi

setup_backend() {
  local recreate_venv="false"

  if [[ -x "$FASTAPI_DIR/.venv/bin/python" ]]; then
    if ! "$FASTAPI_DIR/.venv/bin/python" -c 'import sys; raise SystemExit(0 if (sys.version_info.major, sys.version_info.minor)==(3,11) else 1)' >/dev/null 2>&1; then
      recreate_venv="true"
      echo "[setup] Existing backend virtualenv is not Python 3.11. Recreating..."
    fi
  fi

  if [[ ! -x "$FASTAPI_DIR/.venv/bin/python" || "$recreate_venv" == "true" ]]; then
    rm -rf "$FASTAPI_DIR/.venv"
    echo "[setup] Creating backend virtualenv..."
    "$PYTHON_SETUP_CMD" -m venv "$FASTAPI_DIR/.venv"
  fi

  echo "[setup] Installing backend dependencies..."
  "$FASTAPI_DIR/.venv/bin/python" -m pip install -U pip >/dev/null
  "$FASTAPI_DIR/.venv/bin/python" -m pip install -e "$FASTAPI_DIR"

  PYTHON_CMD="$FASTAPI_DIR/.venv/bin/python"
}

setup_frontend() {
  echo "[setup] Installing frontend dependencies..."
  (cd "$NEXTJS_DIR" && npm ci)
}

if [[ "$DO_SETUP" == "true" ]]; then
  setup_backend
  setup_frontend
fi

if [[ -x "$FASTAPI_DIR/.venv/bin/python" ]]; then
  PYTHON_CMD="$FASTAPI_DIR/.venv/bin/python"
  if ! "$PYTHON_CMD" -c 'import sys; raise SystemExit(0 if (sys.version_info.major, sys.version_info.minor)==(3,11) else 1)' >/dev/null 2>&1; then
    echo "Backend virtualenv uses incompatible Python: $($PYTHON_CMD -V 2>&1)"
    echo "Run './dev.sh --setup' to recreate it with Python 3.11."
    exit 1
  fi
fi

if [[ ! -f "$NEXTJS_DIR/package.json" ]]; then
  echo "Next.js package.json not found at $NEXTJS_DIR"
  exit 1
fi

if [[ ! -f "$FASTAPI_DIR/server.py" ]]; then
  echo "FastAPI server.py not found at $FASTAPI_DIR"
  exit 1
fi

echo "Starting Presenton local development"
echo "APP_DATA_DIRECTORY=$APP_DATA_DIRECTORY"
echo "TEMP_DIRECTORY=$TEMP_DIRECTORY"
echo "USER_CONFIG_PATH=$USER_CONFIG_PATH"
echo "DATABASE_URL=$DATABASE_URL"

echo "-> Starting FastAPI on http://127.0.0.1:8000"
(
  cd "$FASTAPI_DIR"
  exec "$PYTHON_CMD" server.py --port 8000 --reload true
) &
FASTAPI_PID=$!

MCP_PID=""
if [[ "$WITH_MCP" == "true" ]]; then
  echo "-> Starting MCP server on http://127.0.0.1:8001"
  (
    cd "$FASTAPI_DIR"
    exec "$PYTHON_CMD" mcp_server.py --port 8001
  ) &
  MCP_PID=$!
fi

echo "-> Starting Next.js on http://127.0.0.1:3000"
(
  cd "$NEXTJS_DIR"
  exec npm run dev
) &
NEXTJS_PID=$!

cleanup() {
  echo
  echo "Stopping services..."
  kill "$FASTAPI_PID" 2>/dev/null || true
  kill "$NEXTJS_PID" 2>/dev/null || true
  if [[ -n "$MCP_PID" ]]; then
    kill "$MCP_PID" 2>/dev/null || true
  fi
}

trap cleanup INT TERM EXIT

# Portable process supervision (works with macOS bash 3.2)
while true; do
  if ! kill -0 "$FASTAPI_PID" 2>/dev/null; then
    echo "FastAPI exited."
    break
  fi

  if ! kill -0 "$NEXTJS_PID" 2>/dev/null; then
    echo "Next.js exited."
    break
  fi

  if [[ -n "$MCP_PID" ]] && ! kill -0 "$MCP_PID" 2>/dev/null; then
    echo "MCP server exited."
    break
  fi

  sleep 1
done
