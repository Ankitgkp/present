# Contributing to Presenton

Welcome! 🚀  
Thanks for helping improve **Presenton — the open-source AI presentation generator.**

## Quick Links

- **GitHub:** https://github.com/presenton/presenton
- **Docs:** https://docs.presenton.ai
- **Website:** https://presenton.ai
- **Discord:** https://discord.gg/9ZsKKxudNE
- **X:** https://x.com/presentonai

---

# Current Contribution Scope

We accept pull requests across the cloud codebase, including:

- `servers/fastapi` (API/backend)
- `servers/nextjs` (web frontend)
- deployment and infrastructure files (Docker, CI, scripts, docs)

---

# How to Contribute

### Bugs
Open an issue and include:

- Steps to reproduce
- Expected vs actual behavior
- Logs or screenshots

### Features
Start a **GitHub Issue** or **Discussion** explaining:

- The problem
- Proposed solution

### Code Contributions

1. Fork the repository
2. Create a branch
3. Implement your changes
4. Open a Pull Request

Example branch names:

```

feature/add-template-support
fix/export-pptx-error
docs/update-readme

```

---

# Development Setup (Cloud)

### Prerequisites

- Node.js (LTS)
- npm
- Python 3.11+

# Setup Environment

From the project root:

```
cd servers/nextjs
npm ci
```

Then set up FastAPI dependencies:

```
cd ../fastapi
pip install -e .
```

---

# Run the Cloud App (Development)

Start FastAPI:

```
cd servers/fastapi
python server.py --port 8000 --reload true
```

In a second terminal, start Next.js:

```
cd servers/nextjs
npm run dev
```

---

# Build the Cloud App

To build the web frontend:

```
cd servers/nextjs
npm run build
```

---

# Before Opening a PR

Please ensure:

- Code runs locally on development as well as build environment both
- PRs are **small and focused**
- You explain **what and why**

For UI changes, include screenshots.

---

# AI-Assisted Contributions

PRs created with **AI tools (ChatGPT, Claude, Codex, etc.) are welcome.**

Please mention:

- that the PR is **AI-assisted**
- the level of testing performed
- confirmation that you reviewed the generated code

---

# Good First Issues

Look for issues labeled:

```

good first issue
help wanted

```

---

# Community

Questions or discussions:

💬 Discord  
https://discord.gg/9ZsKKxudNE

---

# Code of Conduct

Please follow our community guidelines:

```

CODE_OF_CONDUCT.md

```

---

Thanks for helping make **Presenton better for everyone.**
```
