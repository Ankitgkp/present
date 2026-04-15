import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

function resolveExportPath(rawPath: string): string | null {
  const appDataDir = process.env.APP_DATA_DIRECTORY || "/app_data";
  const requested = decodeURIComponent(rawPath);

  const candidates = new Set<string>();
  candidates.add(requested);

  if (requested.startsWith("/app_data/")) {
    candidates.add(path.join(appDataDir, requested.slice("/app_data/".length)));
  }

  const allowedBases = [
    path.resolve(path.join(appDataDir, "exports")),
    path.resolve("/app_data/exports"),
    path.resolve(path.join(process.cwd(), "app_data", "exports")),
  ];

  for (const candidate of candidates) {
    try {
      const resolved = fs.realpathSync(path.resolve(candidate));
      const inAllowedBase = allowedBases.some((base) => {
        try {
          const resolvedBase = fs.realpathSync(base);
          return (
            resolved === resolvedBase || resolved.startsWith(resolvedBase + path.sep)
          );
        } catch {
          return false;
        }
      });

      if (inAllowedBase && fs.existsSync(resolved) && fs.statSync(resolved).isFile()) {
        return resolved;
      }
    } catch {
      // try next candidate
    }
  }

  return null;
}

function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".pdf") return "application/pdf";
  if (ext === ".pptx") {
    return "application/vnd.openxmlformats-officedocument.presentationml.presentation";
  }
  return "application/octet-stream";
}

export async function GET(req: NextRequest) {
  const rawPath = req.nextUrl.searchParams.get("path");
  if (!rawPath) {
    return NextResponse.json({ error: "Missing path parameter" }, { status: 400 });
  }

  const resolvedPath = resolveExportPath(rawPath);
  if (!resolvedPath) {
    return NextResponse.json(
      { error: "Export file not found or not allowed" },
      { status: 404 }
    );
  }

  const fileName = path.basename(resolvedPath);
  const fileBuffer = await fs.promises.readFile(resolvedPath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": getMimeType(resolvedPath),
      "Content-Disposition": `attachment; filename=\"${fileName}\"`,
      "Cache-Control": "no-store",
    },
  });
}
