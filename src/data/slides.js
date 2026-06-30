// =============================================================================
//  SLIDES DO HERO (carrossel fullscreen)
//  Troque `image` pelo caminho da imagem real (ex.: "/hero/slide1.jpg" em
//  /public/hero/). Enquanto vazio, é gerado um placeholder dark com gradiente.
//  `cta.type`: "whatsapp" abre o WhatsApp; "link" navega para uma rota interna.
// =============================================================================

export const heroSlides = [
  {
    id: "slide-colecao",
    eyebrow: "Coleção 2026",
    title: "Engenharia que você sente em cada tecla",
    subtitle: "Teclados mecânicos premium em alumínio aeronáutico.",
    image: "", // ex.: "/hero/slide1.jpg"
    accentTone: "#C8A050",
    cta: { label: "Ver Coleção", type: "link", to: "/#catalogo" },
  },
  {
    id: "slide-k1pro",
    eyebrow: "Mais Vendido",
    title: "Mercury K1 Pro — Cyberpunk",
    subtitle: "Iluminação lateral de 270° e switches Speedy Mint.",
    image: "",
    accentTone: "#00E0FF",
    cta: { label: "Conhecer", type: "link", to: "/produto/k1-pro-cyberpunk" },
  },
  {
    id: "slide-montar",
    eyebrow: "Sob Medida",
    title: "Monte o PC dos seus sonhos",
    subtitle: "Projetos premium pensados peça por peça com a nossa curadoria.",
    image: "",
    accentTone: "#C8A050",
    cta: { label: "Falar no WhatsApp", type: "whatsapp" },
  },
];
