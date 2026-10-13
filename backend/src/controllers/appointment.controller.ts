import type {
  FastifyReply,
  FastifyRequest,
} from "fastify";

import {
  appointmentSchema,
} from "../schemas/appointment.schema.js";

import {
  createWhatsAppMessage,
} from "../utils/whatsappMessage.js";

import {
  createWhatsAppUrl,
} from "../services/whatsapp.service.js";

export async function createAppointment(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const result =
    appointmentSchema.safeParse(request.body);

  if (!result.success) {
    return reply.status(400).send({
      success: false,
      message:
        "Verifique os dados informados.",
    });
  }

  try {
    const message =
      createWhatsAppMessage(result.data);

    const whatsappUrl =
      createWhatsAppUrl(message);

    return reply.status(200).send({
      success: true,
      message:
        "Solicitação processada com sucesso.",
      whatsappUrl,
    });
  } catch {
    return reply.status(500).send({
      success: false,
      message:
        "Não foi possível processar sua solicitação.",
    });
  }
}