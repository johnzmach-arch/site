import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../data/products.js";
import { siteConfig } from "../config.js";
import { whatsappLink, productMessage, formatPrice } from "../utils/whatsapp.js";
import Viewer360 from "../components/Viewer360.jsx";
import Media from "../components/Media.jsx";

const SPEC_LABELS = {
  layout: "Layout",
  switches: "Switches",
  material: "Material",
  conexao: "Conexão",
  rgb: "Iluminação",
};

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);

  const [variantIdx, setVariantIdx] = useState(0);
  const [view, setView] = useState("360"); // "360" | "galeria"
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [options, setOptions] = useState(() =>
    Object.fromEntries((product?.options || []).map((o) => [o.id, o.choices[0].id]))
  );

  // Preço dinâmico: base da variante + deltas das opções escolhidas.
  const price = useMemo(() => {
    if (!product) return 0;
    const base = product.variants[variantIdx].price;
    const delta = (product.options || []).reduce((sum, opt) => {
      const choice = opt.choices.find((c) => c.id === options[opt.id]);
      return sum + (choice?.priceDelta || 0);
    }, 0);
    return base + delta;
  }, [product, variantIdx, options]);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="font-display text-3xl text-white">Produto não encontrado</h1>
        <Link to="/" className="btn-ghost">
          Voltar para a home
        </Link>
      </div>
    );
  }

  const variant = product.variants[variantIdx];
  const waMessage = productMessage(product.name, variant.name);

  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 pt-28 sm:pt-32">
      {/* breadcrumb */}
      <nav className="mb-8 text-xs uppercase tracking-widest text-white/40">
        <Link to="/" className="hover:text-accent">
          Início
        </Link>
        <span className="mx-2">/</span>
        <Link to="/#catalogo" className="hover:text-accent">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-white/70">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
        {/* ----------------------------- VISUALIZADOR ----------------------------- */}
        <div>
          {/* alternador 360 / galeria */}
          <div className="mb-4 flex gap-2">
            {[
              { id: "360", label: "Giro 360°" },
              { id: "galeria", label: "Galeria" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setView(t.id)}
                className={`rounded-full border px-4 py-1.5 text-[11px] uppercase tracking-widest transition-all ${
                  view === t.id
                    ? "border-accent bg-accent text-black"
                    : "border-white/15 text-white/60 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 bg-ink-800">
            {view === "360" ? (
              <Viewer360 product={product} accent={variant.color} />
            ) : (
              <Media
                src={product.images?.[galleryIdx]}
                label={`${product.name} — ${variant.name}`}
                accent={variant.color}
              />
            )}
          </div>

          {/* thumbnails da galeria */}
          <div className="mt-4 flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={img}
                onClick={() => {
                  setView("galeria");
                  setGalleryIdx(i);
                }}
                className={`relative h-20 w-24 overflow-hidden rounded-lg border transition-all ${
                  view === "galeria" && galleryIdx === i
                    ? "border-accent"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <Media src={img} label={`Vista ${i + 1}`} accent={variant.color} />
              </button>
            ))}
          </div>
        </div>

        {/* --------------------------- PAINEL DE CUSTOMIZAÇÃO --------------------------- */}
        <div className="lg:pl-4">
          {product.badge && (
            <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-black">
              {product.badge}
            </span>
          )}
          <p className="text-xs uppercase tracking-widest text-white/40">
            {product.category}
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {product.name}
          </h1>
          {product.tagline && (
            <p className="mt-3 text-sm text-white/60">{product.tagline}</p>
          )}

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-4xl font-bold text-accent">
              {formatPrice(price)}
            </span>
            <span className="text-xs text-white/40">à vista</span>
          </div>

          {/* seletor de cor / variante */}
          <div className="mt-8">
            <p className="mb-3 text-xs uppercase tracking-widest text-white/50">
              Cor — <span className="text-white/80">{variant.name}</span>
            </p>
            <div className="flex gap-3">
              {product.variants.map((v, i) => (
                <button
                  key={v.name}
                  onClick={() => setVariantIdx(i)}
                  aria-label={v.name}
                  title={v.name}
                  className={`h-10 w-10 rounded-full border-2 transition-all ${
                    variantIdx === i
                      ? "scale-110 border-accent"
                      : "border-white/20 hover:border-white/50"
                  }`}
                  style={{ background: v.color }}
                />
              ))}
            </div>
          </div>

          {/* opções em pílulas (switch, layout...) */}
          {(product.options || []).map((opt) => (
            <div key={opt.id} className="mt-7">
              <p className="mb-3 text-xs uppercase tracking-widest text-white/50">
                {opt.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {opt.choices.map((c) => {
                  const selected = options[opt.id] === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() =>
                        setOptions((prev) => ({ ...prev, [opt.id]: c.id }))
                      }
                      className={`rounded-full border px-4 py-2 text-xs tracking-wide transition-all ${
                        selected
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                      }`}
                    >
                      {c.label}
                      {c.priceDelta > 0 && (
                        <span className="ml-1 opacity-70">
                          +{formatPrice(c.priceDelta)}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* CTA principal WhatsApp */}
          <a
            href={whatsappLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent mt-10 w-full"
          >
            <WhatsappIcon /> Consultar no WhatsApp
          </a>
          <p className="mt-3 text-center text-[11px] text-white/40">
            Atendimento humano • Sem compromisso
          </p>
        </div>
      </div>

      {/* ----------------------------- ESPECIFICAÇÕES ----------------------------- */}
      <section className="mt-20 border-t border-white/5 pt-12">
        <h2 className="font-display text-2xl font-bold text-white">
          Especificações técnicas
        </h2>
        <dl className="mt-8 grid grid-cols-1 gap-x-12 gap-y-0 sm:grid-cols-2">
          {Object.entries(product.specs).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center justify-between border-b border-white/5 py-4"
            >
              <dt className="text-sm uppercase tracking-widest text-white/40">
                {SPEC_LABELS[key] || key}
              </dt>
              <dd className="text-right text-sm font-medium text-white/85">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* faixa de contato */}
      <section className="mt-16 overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-r from-ink-800 to-ink-900 p-10 text-center">
        <p className="eyebrow mb-3">Ficou com dúvida?</p>
        <h3 className="font-display text-2xl font-bold text-white">
          Fale direto com a {siteConfig.brandName}
        </h3>
        <a
          href={whatsappLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent mt-6"
        >
          <WhatsappIcon /> Chamar no WhatsApp
        </a>
      </section>
    </div>
  );
}

function WhatsappIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.157 5.335 5.493 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.516 5.26l-.999 3.648 3.673-.957z" />
    </svg>
  );
}
