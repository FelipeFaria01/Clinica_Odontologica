import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

const questions = [
  {
    question: "É necessário agendar uma avaliação?",
    answer:
      "Sim. O agendamento permite organizar melhor os atendimentos e reduzir o tempo de espera.",
  },
  {
    question: "A clínica realiza clareamento dental?",
    answer:
      "Sim. Após uma avaliação, o profissional indicará o tratamento mais adequado para você.",
  },
  {
    question: "A clínica atende crianças?",
    answer:
      "Sim. Possuímos atendimento odontopediátrico especializado.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "As condições de pagamento podem ser consultadas diretamente com nossa equipe.",
  },
];

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="FAQ"
          title="Perguntas frequentes"
          description="Encontre respostas para algumas das principais dúvidas."
        />

        <div className="space-y-4">
          {questions.map((item, index) => {
            const opened = active === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  onClick={() => setActive(opened ? null : index)}
                  className="flex w-full items-center justify-between gap-6 p-6 text-left"
                >
                  <span className="font-semibold text-slate-900">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`shrink-0 transition ${
                      opened ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {opened && (
                  <div className="px-6 pb-6 leading-7 text-slate-600">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}