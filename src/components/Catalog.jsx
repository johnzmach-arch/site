import { useMemo, useState } from "react";
import { products, categories } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

export default function Catalog() {
  const [active, setActive] = useState("Teclados");

  const filtered = useMemo(
    () => products.filter((p) => p.category === active),
    [active]
  );

  const activeCategory = categories.find((c) => c.id === active);

  return (
    <section id="catalogo" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow mb-3">Coleção</p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Catálogo
          </h2>
        </div>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-all ${
                active === c.id
                  ? "border-accent bg-accent text-black"
                  : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
              }`}
            >
              {c.label}
              {!c.available && (
                <span className="ml-1.5 text-[9px] opacity-70">• Em breve</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        // Categorias sem itens reais (placeholder "Em breve")
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-ink-800/40 py-24 text-center">
          <p className="font-display text-2xl font-semibold text-white/80">
            {activeCategory?.label} — Em breve
          </p>
          <p className="mt-3 max-w-md text-sm text-white/50">
            Estamos preparando esta categoria. Fale com a gente no WhatsApp para
            saber das novidades em primeira mão.
          </p>
        </div>
      )}
    </section>
  );
}
