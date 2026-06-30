import { siteConfig } from "../config.js";

// =============================================================================
//  Placeholder visual elegante (dark + gradiente + rótulo centralizado).
//  Usado em todo lugar onde ainda não há imagem real. Quando você tiver as
//  imagens, basta apontar `src` para um caminho que comece com "/" (em /public)
//  que o componente <Media> passa a exibir a foto real.
// =============================================================================
export default function Placeholder({ label = "", accent = siteConfig.accentColor, className = "" }) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{
        background:
          "radial-gradient(120% 120% at 30% 20%, #1C1C1C 0%, #0A0A0A 55%, #000000 100%)",
      }}
      aria-hidden="true"
    >
      {/* malha sutil */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* brilho de acento */}
      <div
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl"
        style={{ background: accent, opacity: 0.1 }}
      />
      {/* faixa diagonal sutil tipo "cinematográfico" */}
      <div
        className="absolute inset-0 animate-shimmer"
        style={{
          backgroundImage:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <span
          className="mb-3 h-px w-12"
          style={{ background: accent, opacity: 0.7 }}
        />
        <span className="font-display text-xs uppercase tracking-widest text-white/55">
          {label}
        </span>
      </div>
    </div>
  );
}
