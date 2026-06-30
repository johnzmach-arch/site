import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { siteConfig } from "../config.js";
import { whatsappLink } from "../utils/whatsapp.js";

const links = [
  { label: "Coleção", target: "catalogo" },
  { label: "Monte seu PC", target: "monte-seu-pc" },
  { label: "Sobre", target: "sobre" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navega para uma âncora da home (mesmo estando em outra rota).
  const goToSection = (target) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/#" + target);
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-ink-950/85 backdrop-blur-md border-b border-white/5"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / nome da marca (vem do config) */}
        <Link
          to="/"
          className="font-display text-lg font-extrabold uppercase tracking-widest text-white"
        >
          {siteConfig.brandName}
          <span className="text-accent">.</span>
        </Link>

        {/* Links desktop */}
        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <button
              key={l.target}
              onClick={() => goToSection(l.target)}
              className="text-xs uppercase tracking-widest text-white/70 transition-colors hover:text-accent"
            >
              {l.label}
            </button>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent !px-5 !py-2 text-xs"
          >
            WhatsApp
          </a>
        </div>

        {/* Botão mobile */}
        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span
            className={`h-px w-6 bg-white transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`h-px w-6 bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-6 bg-white transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-white/5 bg-ink-950/95 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <button
                key={l.target}
                onClick={() => goToSection(l.target)}
                className="text-left text-sm uppercase tracking-widest text-white/80"
              >
                {l.label}
              </button>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent mt-2"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
