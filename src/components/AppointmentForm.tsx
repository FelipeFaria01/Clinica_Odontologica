import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { appointmentSchema } from "../schemas/appointmentSchema";
import type { AppointmentFormData } from "../schemas/appointmentSchema";

export function AppointmentForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  async function onSubmit(data: AppointmentFormData) {
    try {
      const response = await fetch(
        "http://localhost:3000/api/agendamentos",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error();
      }

      window.open(result.whatsappUrl, "_blank");

      reset();
    } catch {
      alert(
        "Não foi possível enviar sua solicitação.",
      );
    }
  }

  const inputStyle =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10";

  return (
    <section
      id="agendamento"
      className="bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[32px] bg-slate-950 lg:grid-cols-2">
        <div className="flex flex-col justify-center p-8 text-white md:p-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Agendamento
          </span>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Dê o primeiro passo para transformar seu sorriso.
          </h2>

          <p className="mt-6 max-w-lg leading-8 text-slate-400">
            Preencha seus dados e nossa equipe receberá sua
            solicitação diretamente pelo WhatsApp.
          </p>
        </div>

        <form
          id="contato"
          onSubmit={handleSubmit(onSubmit)}
          className="m-3 rounded-[26px] bg-white p-7 md:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Nome
              </label>

              <input
                {...register("nome")}
                placeholder="Seu nome"
                className={inputStyle}
              />

              {errors.nome && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.nome.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Telefone
              </label>

              <input
                {...register("telefone")}
                placeholder="(21) 99999-9999"
                className={inputStyle}
              />

              {errors.telefone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.telefone.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                E-mail
              </label>

              <input
                {...register("email")}
                type="email"
                placeholder="email@exemplo.com"
                className={inputStyle}
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Tratamento
              </label>

              <select
                {...register("tratamento")}
                className={inputStyle}
              >
                <option value="">Selecione</option>

                <option value="Clareamento Dental">
                  Clareamento Dental
                </option>

                <option value="Implante">
                  Implante
                </option>

                <option value="Ortodontia">
                  Ortodontia
                </option>

                <option value="Avaliação">
                  Avaliação
                </option>
              </select>

              {errors.tratamento && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.tratamento.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Período
              </label>

              <select
                {...register("periodo")}
                className={inputStyle}
              >
                <option value="">Selecione</option>

                <option value="Manhã">
                  Manhã
                </option>

                <option value="Tarde">
                  Tarde
                </option>

                <option value="Noite">
                  Noite
                </option>
              </select>

              {errors.periodo && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.periodo.message}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Mensagem
              </label>

              <textarea
                {...register("mensagem")}
                rows={4}
                placeholder="Conte brevemente como podemos ajudar..."
                className={`${inputStyle} resize-none`}
              />

              {errors.mensagem && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.mensagem.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded-xl bg-cyan-600 px-6 py-4 font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting
              ? "Enviando..."
              : "Solicitar atendimento"}
          </button>
        </form>
      </div>
    </section>
  );
}