# How to Download This Project

## Method 1: Copy files manually
1. Copy each file's content from Bolt
2. Create the same folder structure in VS Code
3. Paste the content into each file

## Method 2: Use Git (if available)
```bash
git init
git add .
git commit -m "Initial commit"
```

## Project Structure:
```
327-project/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── netlify.toml
├── README.md
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    └── vite-env.d.ts
```

## Key files to copy:
- `package.json` (dependencies)
- `src/App.tsx` (main React component)
- `src/index.css` (all styles)
- `src/main.tsx` (React entry point)
- `index.html` (HTML template)
- `netlify.toml` (deployment config)