import "dotenv/config";

import { buildApp } from "./app.js";

const app = buildApp();

async function start() {
  try {
    await app.listen({
      port: Number(process.env.PORT) || 3000,
      host: "0.0.0.0",
    });

    console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
    
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

start();