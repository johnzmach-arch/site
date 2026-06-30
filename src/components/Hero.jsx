import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { heroSlides } from "../data/slides.js";
import Media from "./Media.jsx";
import { whatsappLink } from "../utils/whatsapp.js";

const AUTOPLAY_MS = 5000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timer = useRef(null);
  const navigate = useNavigate();

  const total = heroSlides.length;

  const goTo = useCallback(
    (next, dir = 1) => {
      setDirection(dir);
      setIndex((next + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = () => goTo(index - 1, -1);

  // Autoplay (~5s), reiniciado a cada troca manual.
  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(timer.current);
  }, [index, next]);

  const slide = heroSlides[index];

  const handleCta = (cta) => {
    if (!cta) return;
    if (cta.type === "whatsapp") {
      window.open(whatsappLink(), "_blank", "noopener");
    } else if (cta.to?.startsWith("/produto/")) {
      navigate(cta.to);
    } else if (cta.to?.includes("#")) {
      const id = cta.to.split("#")[1];
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-ink-950">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Media
            src={slide.image}
            label=""
            accent={slide.accentTone}
            className="h-full w-full"
          />
          {/* camadas escuras para legibilidade do texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Conteúdo do slide */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id + "-content"}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="eyebrow mb-5">{slide.eyebrow}</p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {slide.title}
            </h1>
            <p className="mt-6 max-w-lg text-base text-white/70 sm:text-lg">
              {slide.subtitle}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={() => handleCta(slide.cta)} className="btn-accent">
                {slide.cta.label}
              </button>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Setas laterais discretas */}
      <button
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/15 p-3 text-white/70 transition-all hover:border-accent hover:text-accent md:block"
      >
        <Arrow dir="left" />
      </button>
      <button
        onClick={next}
        aria-label="Próximo slide"
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/15 p-3 text-white/70 transition-all hover:border-accent hover:text-accent md:block"
      >
        <Arrow dir="right" />
      </button>

      {/* Indicadores (dots) */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i, i > index ? 1 : -1)}
            aria-label={`Ir para o slide ${i + 1}`}
            className="group h-2.5 overflow-hidden rounded-full bg-white/25 transition-all"
            style={{ width: i === index ? 34 : 10 }}
          >
            <span
              className={`block h-full rounded-full ${i === index ? "bg-accent" : "bg-transparent"}`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

function Arrow({ dir }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      {dir === "left" ? (
        <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}
