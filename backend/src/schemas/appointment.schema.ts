import { z } from "zod";

export const appointmentSchema = z.object({
  nome: z.string().min(3).max(80),

  telefone: z.string().min(10).max(20),

  email: z
    .string()
    .email()
    .optional()
    .or(z.literal("")),

  tratamento: z.string().min(2).max(100),

  periodo: z.enum(["Manhã", "Tarde", "Noite"]),

  mensagem: z
    .string()
    .max(500)
    .optional(),
});

export type AppointmentData =
  z.infer<typeof appointmentSchema>;