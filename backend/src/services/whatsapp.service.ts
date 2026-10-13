export function createWhatsAppUrl(
  message: string,
) {
  const number = process.env.WHATSAPP_NUMBER;

  if (!number) {
    throw new Error(
      "WHATSAPP_NUMBER não configurado",
    );
  }

  const encodedMessage =
    encodeURIComponent(message);

  return `https://wa.me/${number}?text=${encodedMessage}`;
}