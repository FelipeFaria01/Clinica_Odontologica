import { Clock3, HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const benefits = [
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    text: "Cada paciente recebe atenção individualizada.",
  },
  {
    icon: Stethoscope,
    title: "Equipe especializada",
    text: "Profissionais preparados para diferentes necessidades.",
  },
  {
    icon: ShieldCheck,
    title: "Tecnologia moderna",
    text: "Equipamentos modernos para diagnósticos precisos.",
  },
  {
    icon: Clock3,
    title: "Agendamento facilitado",
    text: "Solicite seu atendimento diretamente pelo site.",
  },
];

export function Benefits() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Por que nos escolher?"
          title="Uma experiência odontológica diferente"
          description="Cuidado, tecnologia e conforto em cada etapa."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              <Icon className="text-cyan-400" size={30} />

              <h3 className="mt-5 text-lg font-bold">
                {title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}