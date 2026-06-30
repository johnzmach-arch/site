import { motion } from "framer-motion";
import { whatsappLink } from "../utils/whatsapp.js";

const buildMessage =
  "Olá! Quero montar um PC sob medida com vocês. Podem me ajudar?";

// Seção teaser do futuro "Monte seu PC" (ainda não funcional).
export default function BuildPC() {
  return (
    <section id="monte-seu-pc" className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 120% at 80% 10%, var(--accent-soft), transparent 60%), linear-gradient(180deg, #0A0A0A, #000000)",
        }}
      />
      {/* linhas técnicas decorativas */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="eyebrow mb-4">Em breve • Configurador</p>
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            Monte seu PC <span className="text-accent">sob medida</span>
          </h2>
          <p className="mt-6 max-w-xl text-base text-white/65">
            Estamos preparando um configurador completo para você montar a
            máquina dos seus sonhos, peça por peça, com a nossa curadoria
            premium. Enquanto isso, fale com a gente — montamos um projeto
            exclusivo para o seu perfil.
          </p>
          <a
            href={whatsappLink(buildMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent mt-9"
          >
            Fale com a gente para um PC sob medida
          </a>
        </motion.div>
      </div>
    </section>
  );
}
