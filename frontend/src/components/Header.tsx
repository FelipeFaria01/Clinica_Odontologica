import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Tratamentos", href: "#tratamentos" },
  { name: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl font-bold text-white">
            <img src="/src/assets/Coração Vermelho com Estetoscópio.png" alt="coração com estetoscopio"/>
          </div>

          <div>
            <p className="font-bold text-slate-900">Sorriso</p>
            <p className="text-xs text-slate-500">Odontologia</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-cyan-600"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a
          href="#agendamento"
          className="hidden rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600 lg:block"
        >
          Agendar avaliação
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-slate-900 lg:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t bg-white px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-medium text-slate-700"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#agendamento"
              className="rounded-xl bg-cyan-600 px-5 py-3 text-center font-semibold text-white"
            >
              Agendar avaliação
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}