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

// Ensure OpenNext expects pages-manifest.json under standalone output.
try {
  const standaloneServerDir = path.join(nextDir, "standalone", ".next", "server");
  const standalonePagesManifest = path.join(standaloneServerDir, "pages-manifest.json");
  const srcPagesManifest = path.join(serverDir, "pages-manifest.json");

  if (!fs.existsSync(standaloneServerDir)) {
    fs.mkdirSync(standaloneServerDir, { recursive: true });
  }

  if (!fs.existsSync(standalonePagesManifest)) {
    if (fs.existsSync(srcPagesManifest)) {
      fs.copyFileSync(srcPagesManifest, standalonePagesManifest);
      console.log("Patched standalone pages-manifest.json from .next/server");
    } else {
      fs.writeFileSync(standalonePagesManifest, "{}", "utf8");
      console.log("Created empty standalone pages-manifest.json");
    }
  }
} catch (e) {
  console.warn("Failed to patch standalone pages-manifest.json:", e?.message ?? e);
}