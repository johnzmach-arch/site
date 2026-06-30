import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Media from "./Media.jsx";
import { formatPrice } from "../utils/whatsapp.js";

export default function ProductCard({ product }) {
  const variant = product.variants[0];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <Link
        to={`/produto/${product.id}`}
        className="group block overflow-hidden rounded-2xl border border-white/5 bg-ink-800 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40"
        style={{ willChange: "transform" }}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
            <Media src={product.images?.[0]} label={product.name} accent={variant.color} />
          </div>

          {/* brilho de acento no hover */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ boxShadow: "inset 0 -80px 80px -40px var(--accent-soft)" }}
          />

          {product.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-black">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex items-end justify-between gap-4 p-5">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-white/40">
              {product.category}
            </p>
            <h3 className="mt-1 font-display text-base font-semibold text-white">
              {product.name}
            </h3>
          </div>
          <div className="text-right">
            <p className="font-display text-lg font-bold text-accent">
              {formatPrice(product.price)}
            </p>
            <span className="text-[11px] uppercase tracking-widest text-white/40 transition-colors group-hover:text-accent">
              Ver →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
