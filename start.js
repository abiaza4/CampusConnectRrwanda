import { createServer, loadConfigFromFile, mergeConfig } from "vite";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function start() {
  const { config } = await loadConfigFromFile(
    { command: "serve", mode: "development" },
    path.resolve(__dirname, "vite.config.ts"),
    __dirname,
    undefined,
    undefined,
    "runner"
  );

  const server = await createServer(config);
  await server.listen();
  console.log(`Server running at http://localhost:${config.server.port || 3000}`);
}

start().catch(console.error);