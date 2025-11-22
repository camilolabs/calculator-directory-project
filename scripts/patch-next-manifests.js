const fs = require("fs");
const path = require("path");

const root = process.cwd();
const nextDir = path.join(root, ".next");
const serverDir = path.join(nextDir, "server");
const src = path.join(serverDir, "routes-manifest.json");
const dest = path.join(nextDir, "routes-manifest.json");

if (fs.existsSync(src)) {
  if (!fs.existsSync(dest)) {
    fs.copyFileSync(src, dest);
    console.log("Patched routes-manifest.json");
  }
} else {
  console.log("No routes-manifest.json found under .next/server");
}