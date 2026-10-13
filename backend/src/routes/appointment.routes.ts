import type { FastifyInstance } from "fastify";

import {
  createAppointment,
} from "../controllers/appointment.controller.js";

export async function appointmentRoutes(
  app: FastifyInstance,
) {
  app.post(
    "/api/agendamentos",
    {
      config: {
        rateLimit: {
          max: 5,
          timeWindow: "1 minute",
        },
      },
    },
    createAppointment,
  );
}