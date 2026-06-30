import { Link } from "react-router-dom";
import { siteConfig } from "../config.js";
import { whatsappLink } from "../utils/whatsapp.js";

export default function Footer() {
  const year = 2026; // data fixa do protótipo; ajuste se desejar dinâmico.
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* marca */}
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-extrabold uppercase tracking-widest text-white">
            {siteConfig.brandName}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-4 max-w-sm text-sm text-white/50">
            {siteConfig.tagline}. Periféricos e PCs premium com estética dark e
            atendimento humano.
          </p>
        </div>

        {/* links rápidos */}
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
            Navegação
          </p>
          <ul className="space-y-3 text-sm text-white/65">
            <li>
              <Link to="/#catalogo" className="hover:text-accent">
                Coleção
              </Link>
            </li>
            <li>
              <Link to="/#monte-seu-pc" className="hover:text-accent">
                Monte seu PC
              </Link>
            </li>
            <li>
              <Link to="/#sobre" className="hover:text-accent">
                Sobre
              </Link>
            </li>
          </ul>
        </div>

        {/* contato / redes */}
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
            Contato
          </p>
          <ul className="space-y-3 text-sm text-white/65">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                {siteConfig.instagramHandle}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {/* ícones de redes (placeholder) */}
            <Social href={siteConfig.instagramUrl} label="Instagram">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.22.6-.48 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.22-1-.48-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.22-.6.48-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.07-.9.04-1.4.2-1.7.32-.4.16-.7.36-1 .66-.3.3-.5.6-.66 1-.12.3-.28.8-.32 1.7C3.8 8.5 3.8 8.9 3.8 12s0 3.5.07 4.7c.04.9.2 1.4.32 1.7.16.4.36.7.66 1 .3.3.6.5 1 .66.3.12.8.28 1.7.32 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c.9-.04 1.4-.2 1.7-.32.4-.16.7-.36 1-.66.3-.3.5-.6.66-1 .12-.3.28-.8.32-1.7.07-1.2.07-1.6.07-4.7s0-3.5-.07-4.7c-.04-.9-.2-1.4-.32-1.7-.16-.4-.36-.7-.66-1-.3-.3-.6-.5-1-.66-.3-.12-.8-.28-1.7-.32C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.1-.3a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
            </Social>
            <Social href={whatsappLink()} label="WhatsApp">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.157 5.335 5.493 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24z" />
            </Social>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/35 sm:flex-row">
          <p>
            © {year} {siteConfig.brandName} — {siteConfig.location}. Todos os
            direitos reservados.
          </p>
          <p>Vitrine premium • Sem checkout • Atendimento via WhatsApp</p>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-accent hover:text-accent"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}
