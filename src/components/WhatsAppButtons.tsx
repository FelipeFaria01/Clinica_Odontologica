import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="#agendamento"
      aria-label="Solicitar atendimento"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl transition hover:scale-110 hover:bg-emerald-600"
    >
      <MessageCircle size={26} />
    </a>
  );
}