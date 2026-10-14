import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-white via-cyan-50/50 to-blue-50 pt-32"
    >
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
            Cuidado moderno para o seu sorriso
          </span>

          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
            Seu sorriso merece um cuidado
            <span className="text-cyan-600"> especial.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Tecnologia, profissionais especializados e atendimento humanizado
            para transformar sua experiência odontológica.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#agendamento"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-4 font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:-translate-y-1 hover:bg-cyan-700"
            >
              Agendar avaliação
              <ArrowRight size={18} />
            </a>

            <a
              href="#tratamentos"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-800 transition hover:border-cyan-300"
            >
              Conhecer tratamentos
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="text-cyan-600" size={18} />
              Atendimento humanizado
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 className="text-cyan-600" size={18} />
              Equipamentos modernos
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-cyan-200 to-blue-200 opacity-40 blur-2xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-white bg-white p-3 shadow-2xl">
            <img
              src="/src/assets/dentistamulher.png"
              alt="Dentista realizando atendimento"
              className="h-[520px] w-full rounded-[24px] object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-xl">
            <p className="text-3xl font-bold text-slate-900">+2.500</p>
            <p className="text-sm text-slate-500">
              Sorrisos transformados
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}