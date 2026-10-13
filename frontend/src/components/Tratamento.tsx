import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { treatments } from "../data/tratamento";
import { SectionTitle } from "./SectionTitle";

export function Treatments() {
  return (
    <section
      id="tratamentos"
      className="bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl ">
        <SectionTitle
          eyebrow="Tratamentos"
          title="Cuidado completo para o seu sorriso"
          description="Tratamentos personalizados utilizando técnicas modernas e atendimento especializado."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;

            return (
              <motion.article
                key={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {treatment.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {treatment.description}
                </p>

                <button className="mt-6 flex items-center gap-2 font-semibold text-cyan-700">
                  Saiba mais
                  <ArrowUpRight size={17} />
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}