import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { networkInterfaces } from "node:os";
const root = path.resolve("dist");
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};
http
  .createServer(async (req, res) => {
    try {
      const url = new URL(req.url, "http://localhost");
      const name = decodeURIComponent(url.pathname);
      const file = path.resolve(
        root,
        "." + (name === "/" ? "/index.html" : name),
      );
      if (!file.startsWith(root + path.sep)) {
        res.writeHead(403);
        return res.end();
      }
      const data = await readFile(file);
      res.writeHead(200, {
        "Content-Type": types[path.extname(file)] || "application/octet-stream",
        "Cache-Control": "no-cache",
      });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  })
  .listen(5173, process.env.HOST || "0.0.0.0", () => {
    console.log("Local: http://127.0.0.1:5173");
    for (const addresses of Object.values(networkInterfaces())) {
      for (const address of addresses || []) {
        if (
          address.family === "IPv4" &&
          !address.internal &&
          !address.address.startsWith("169.254.")
        )
          console.log(`Mobile (same Wi-Fi): http://${address.address}:5173`);
      }
    }
  });
