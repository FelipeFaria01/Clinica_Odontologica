export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
        <div>
          <h3 className="text-xl font-bold text-white">
            Sorriso Odontologia
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-6">
            Cuidado odontológico moderno, seguro e humanizado.
          </p>
        </div>

        <div className="text-sm">
          <p>Segunda a sexta — 08h às 19h</p>
          <p className="mt-2">(21) 99999-9999</p>
          <p className="mt-2">contato@clinica.com.br</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-6 text-sm">
        © 2026 Sorriso Odontologia. Todos os direitos reservados.
      </div>
    </footer>
  );
}