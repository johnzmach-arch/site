import { motion } from "framer-motion";
import { siteConfig } from "../config.js";

const pillars = [
  { k: "01", t: "Curadoria", d: "Selecionamos apenas o que tem engenharia e acabamento de verdade." },
  { k: "02", t: "Premium", d: "Materiais nobres, alumínio aeronáutico e atenção a cada detalhe." },
  { k: "03", t: "Atendimento", d: "Consultoria humana e personalizada, direto no WhatsApp." },
];

// Seção "Sobre" — posicionamento premium da marca (texto placeholder).
export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">Sobre a {siteConfig.brandName}</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Performance com alma de design
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/65">
            A {siteConfig.brandName} nasce para quem entende que um setup é mais
            do que ferramenta — é extensão de quem você é. Reunimos periféricos e
            PCs de alto padrão com uma estética escura, minimalista e
            cinematográfica. Cada peça é escolhida por desempenho, durabilidade e
            beleza. <span className="text-white/40">(Texto placeholder — ajuste com a história real da marca.)</span>
          </p>
        </motion.div>

        <div className="flex flex-col justify-center gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 rounded-xl border border-white/5 bg-ink-800/50 p-6"
            >
              <span className="font-display text-2xl font-bold text-accent">
                {p.k}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {p.t}
                </h3>
                <p className="mt-1 text-sm text-white/55">{p.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
