import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import rateLimit from "@fastify/rate-limit";

import {
  appointmentRoutes,
} from "./routes/appointment.routes.js";

export function buildApp() {
  const app = Fastify({
    logger: true,
    bodyLimit: 16 * 1024,
  });

  const frontendUrl = process.env.FRONTEND_URL;

  if (!frontendUrl) {
    throw new Error(
      "FRONTEND_URL não configurada no arquivo .env",
    );
  }

  app.register(helmet);

  app.register(cors, {
    origin: frontendUrl,
  });

  app.register(rateLimit, {
    global: false,
  });

  app.get("/health", async () => {
    return {
      status: "ok",
    };
  });

  app.register(appointmentRoutes);

  return app;
}