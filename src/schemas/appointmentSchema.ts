import { z } from "zod";

export const appointmentSchema = z.object({
  nome: z
    .string()
    .min(3, "Informe seu nome.")
    .max(80, "Nome muito longo."),

  telefone: z
    .string()
    .min(10, "Informe um telefone válido.")
    .max(20),

  email: z
    .string()
    .email("Informe um e-mail válido.")
    .optional()
    .or(z.literal("")),

  tratamento: z
    .string()
    .min(1, "Selecione um tratamento."),

  periodo: z
    .string()
    .min(1, "Selecione um período."),

  mensagem: z
    .string()
    .max(500, "Mensagem muito longa.")
    .optional(),
});

export type AppointmentFormData =
  z.infer<typeof appointmentSchema>;