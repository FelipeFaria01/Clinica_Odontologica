export function About() {
  return (
    <section
      id="sobre"
      className="bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        {/* Imagem */}
        <div className="relative">
          <div className="overflow-hidden rounded-[32px] shadow-xl">
            <img
              src="src/assets/dentista.png"
              alt="Equipe da clínica odontológica"
              className="h-[520px] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-cyan-600 px-6 py-5 text-white shadow-lg">
            <p className="text-3xl font-bold">
              10+
            </p>

            <p className="text-sm text-cyan-50">
              anos cuidando de sorrisos
            </p>
          </div>
        </div>

        {/* Conteúdo */}
        <div>
          <span className="inline-block rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            Sobre a clínica
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight !text-gray-500 md:text-4xl lg:text-5xl">
            Cuidado odontológico com tecnologia e atenção em cada detalhe
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Nossa clínica foi criada para oferecer uma experiência odontológica
            mais tranquila, moderna e humanizada. Trabalhamos com profissionais
            especializados, atendimento personalizado e soluções pensadas para
            cada paciente.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            Nosso objetivo é cuidar da saúde do seu sorriso com segurança,
            conforto e transparência, utilizando técnicas atuais e uma estrutura
            preparada para oferecer um atendimento de qualidade.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900">
                Atendimento humanizado
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Cada paciente recebe atenção individualizada durante todo o
                tratamento.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900">
                Tecnologia e segurança
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Utilizamos soluções modernas para proporcionar mais precisão e
                conforto.
              </p>
            </div>
          </div>

          <a
            href="#agendamento"
            className="mt-8 inline-flex rounded-xl bg-cyan-600 px-6 py-4 font-semibold text-white transition hover:bg-cyan-700"
          >
            Agendar avaliação
          </a>
        </div>
      </div>
    </section>
  );
}