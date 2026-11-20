import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

const rootDir = import.meta.dirname || '.';

export default defineConfig(() => {
  return {
    optimizeDeps: {
      noDiscovery: true,
      include: [],
      entries: [],
    },
    plugins: [
      {
        name: 'fast-monolithic-index-html',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = (req.url || '/').split('?')[0];
            if (url === '/' || url === '/index.html') {
              try {
                const htmlPath = path.resolve(rootDir, 'index.html');
                const stat = fs.statSync(htmlPath);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.setHeader('Content-Length', stat.size);
                res.setHeader('Cache-Control', 'no-cache');
                if (req.method === 'HEAD') {
                  res.end();
                  return;
                }
                fs.createReadStream(htmlPath).pipe(res);
                return;
              } catch (e) {
                next(e);
                return;
              }
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(rootDir, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    preview: {
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: true as const,
    },
  };
});

