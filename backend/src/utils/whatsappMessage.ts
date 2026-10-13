import type { AppointmentData } from "../schemas/appointment.schema.ts";

export function createWhatsAppMessage(
  data: AppointmentData,
) {
  return `
🦷 NOVA SOLICITAÇÃO DE ATENDIMENTO

👤 Paciente: ${data.nome}

📱 Telefone: ${data.telefone}

📧 E-mail: ${data.email || "Não informado"}

🦷 Tratamento:
${data.tratamento}

🕐 Período:
${data.periodo}

💬 Mensagem:
${data.mensagem || "Nenhuma mensagem adicional"}

Solicitação enviada pelo site da clínica.
  `.trim();
}