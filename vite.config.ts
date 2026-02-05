import path from "path"
import fs from "fs"
import { defineConfig, Plugin } from "vite"
import react from "@vitejs/plugin-react"

// Plugin to serve static HTML files from public folder before SPA fallback
function serveStaticHtml(): Plugin {
  return {
    name: "serve-static-html",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || ""
        // Check for paths that should serve static HTML
        if (url.startsWith("/servicios") || url.startsWith("/blog")) {
          let filePath = path.join(__dirname, "public", url)
          // Handle directory requests (add index.html)
          if (filePath.endsWith("/")) {
            filePath += "index.html"
          } else if (!filePath.endsWith(".html") && fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
            filePath += "/index.html"
          }
          if (fs.existsSync(filePath) && filePath.endsWith(".html")) {
            res.setHeader("Content-Type", "text/html")
            res.end(fs.readFileSync(filePath, "utf-8"))
            return
          }
        }
        next()
      })
    },
  }
}

export default defineConfig({
  base: "/",
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  plugins: [serveStaticHtml(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
})
