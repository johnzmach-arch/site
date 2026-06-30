// =============================================================================
//  DADOS DE PRODUTOS — linha real GravaStar (modelos com variantes de cor)
//
//  ATENÇÃO: os preços abaixo são PLACEHOLDER (catálogo GravaStar EUA convertido
//  por ~R$5,45). NÃO são preços finais de venda. Substituir pelos valores reais
//  definidos para o Brasil (com imposto e margem).
//
//  ESTRUTURA: cada objeto é um MODELO; `variants` são as cores reais (viram os
//  swatches no configurador da página de produto). Selecionar uma cor troca a
//  imagem principal, o nome e o preço exibidos.
//
//  IMAGENS: cada variante tem seu próprio `images` (caminhos em /public). Os
//  caminhos começam com "/" — enquanto o arquivo não existir, aparece um
//  placeholder dark elegante automaticamente. Veja /public/products/README.md.
// =============================================================================

export const categories = [
  { id: "Teclados", label: "Teclados", available: true },
  { id: "Mouses", label: "Mouses", available: false },
  { id: "PCs", label: "PCs", available: false },
  { id: "Acessórios", label: "Acessórios", available: false },
];

// Opções padrão de layout (pílulas — apenas visual no protótipo).
const layoutOption = {
  id: "layout",
  label: "Layout",
  choices: [
    { id: "abnt2", label: "ABNT2", priceDelta: 0 },
    { id: "ansi", label: "ANSI (US)", priceDelta: 0 },
  ],
};

export const products = [
  // ------------------------------------------------------------------- V60 Pro
  {
    id: "v60-pro",
    name: "Mercury V60 Pro",
    category: "Teclados",
    badge: "Novo",
    tagline:
      "60% translúcido com switches magnéticos UFO (Hall Effect) e polling de 8000Hz.",
    price: 1090, // preço inicial (placeholder)
    specs: {
      layout: "60%",
      switches: "GravaStar UFO Magnético (Hall Effect · Linear)",
      atuacao: "Ajustável 0,1–3,5 mm · Rapid Trigger",
      polling: "8000 Hz",
      latencia: "0,125 ms",
      precisao: "0,005 mm",
      material: "Case translúcido (PC) · placa de alumínio escovado",
      acustica: "5 camadas de espuma acústica (PORON / IXPE)",
      conexao: "USB-C (com fio) / 2.4GHz",
      rgb: "RGB por tecla · presets (CS:GO, VALORANT, Delta Force)",
      durabilidade: "100 milhões de cliques",
    },
    options: [
      {
        id: "switch",
        label: "Switch",
        choices: [
          { id: "ufo", label: "UFO Magnético", priceDelta: 0 },
          { id: "ufo-silent", label: "UFO Silent", priceDelta: 60 },
        ],
      },
      layoutOption,
    ],
    frames: 0,
    variants: [
      {
        name: "Clutch — Transparente",
        color: "#3E434C",
        price: 1090,
        // Coloque as 5 fotos enviadas em /public/products/v60-pro/
        images: [
          "/products/v60-pro/clutch-01.jpg",
          "/products/v60-pro/clutch-02.jpg",
          "/products/v60-pro/clutch-03.jpg",
          "/products/v60-pro/clutch-04.jpg",
          "/products/v60-pro/clutch-05.jpg",
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ K98 Pro
  {
    id: "k98-pro",
    name: "Mercury K98 Pro",
    category: "Teclados",
    badge: "Premium",
    tagline: "Carro-chefe 98% com display TFT 1.65\", 8KHz e switches UFO.",
    price: 1415,
    specs: {
      layout: "98%",
      switches: "GravaStar UFO",
      display: "TFT inteligente 1.65\"",
      polling: "8000 Hz (dual)",
      material: "Alumínio",
      conexao: "2.4GHz / Bluetooth 5.0 / USB-C",
      bateria: "Até 228h sem fio",
      rgb: "2 sistemas de luz · RGB",
    },
    options: [
      {
        id: "switch",
        label: "Switch",
        choices: [
          { id: "ufo", label: "UFO", priceDelta: 0 },
          { id: "linear", label: "Linear", priceDelta: -40 },
          { id: "tactile", label: "Tátil", priceDelta: 20 },
        ],
      },
      layoutOption,
    ],
    frames: 0,
    variants: [
      {
        name: "Phantom Black",
        color: "#161616",
        price: 1415,
        images: [],
      },
    ],
  },

  // ------------------------------------------------------------------- K1 Pro
  {
    id: "k1-pro",
    name: "Mercury K1 Pro",
    category: "Teclados",
    badge: "Mais Vendido",
    tagline:
      "75% em alumínio com switches Kailh Speedy Mint e iluminação lateral de 270°.",
    price: 925,
    specs: {
      layout: "75%",
      switches: "GravaStar x Kailh Speedy Mint (Linear · 45gf)",
      material: "Alumínio (acabamento glossy)",
      keycaps: "PBT Pudding (sublimação)",
      conexao: "2.4GHz / Bluetooth 5.0 / USB-C",
      bateria: "8000 mAh",
      rgb: "2 sistemas RGB · 16.8M cores · 13 modos",
      durabilidade: "70 milhões de cliques",
    },
    options: [
      {
        id: "switch",
        label: "Switch",
        choices: [
          { id: "speedy", label: "Speedy Mint", priceDelta: 0 },
          { id: "linear", label: "Linear", priceDelta: -30 },
          { id: "tactile", label: "Tátil", priceDelta: 20 },
        ],
      },
      layoutOption,
    ],
    frames: 0,
    variants: [
      { name: "Cyberpunk", color: "#2A2E38", price: 1090, badge: "Edição Especial", images: [] },
      { name: "CyberFlare", color: "#C2392A", price: 980, images: [] },
      { name: "Interstellar Silver", color: "#C7C9CC", price: 925, images: [] },
      { name: "Battle-Worn Yellow", color: "#C9A23A", price: 1090, badge: "Edição Especial", images: [] },
    ],
  },

  // ----------------------------------------------------------------------- K1
  {
    id: "k1",
    name: "Mercury K1",
    category: "Teclados",
    badge: null,
    tagline: "75% em alumínio, hot-swappable e conexão tri-mode.",
    price: 710,
    specs: {
      layout: "75%",
      switches: "GravaStar Stellar Bloom (Linear)",
      material: "Alumínio (estrutura)",
      hotswap: "Hot-swappable",
      conexao: "2.4GHz / Bluetooth 5.0 / USB-C",
      bateria: "8000 mAh",
      rgb: "2 sistemas RGB",
    },
    options: [
      {
        id: "switch",
        label: "Switch",
        choices: [
          { id: "linear", label: "Linear", priceDelta: 0 },
          { id: "tactile", label: "Tátil", priceDelta: 20 },
        ],
      },
      layoutOption,
    ],
    frames: 0,
    variants: [
      { name: "Stealth Black", color: "#0D0D0D", price: 710, images: [] },
      { name: "Gradient Black", color: "#2B2B2B", price: 710, images: [] },
      { name: "Gradient White", color: "#E6E6E6", price: 710, images: [] },
      { name: "Sakura Pink", color: "#E8A6B6", price: 765, badge: "Edição Especial", images: [] },
      { name: "Lavender Purple", color: "#9A8AC9", price: 765, badge: "Edição Especial", images: [] },
    ],
  },

  // ------------------------------------------------------------------- K1 Lite
  {
    id: "k1-lite",
    name: "Mercury K1 Lite",
    category: "Teclados",
    badge: null,
    tagline: "Entrada premium 75% em policarbonato, hot-swap e pré-lubrificado.",
    price: 490,
    specs: {
      layout: "75%",
      switches: "GravaStar x Kailh Linear (pré-lubrificado)",
      material: "Policarbonato (translúcido)",
      hotswap: "Hot-swappable (gasket)",
      conexao: "2.4GHz / Bluetooth 5.0 / USB-C",
      rgb: "RGB",
    },
    options: [
      {
        id: "switch",
        label: "Switch",
        choices: [{ id: "linear", label: "Linear", priceDelta: 0 }],
      },
      layoutOption,
    ],
    frames: 0,
    variants: [
      { name: "Transparent Black", color: "#34343A", price: 490, images: [] },
      { name: "Crystal Aurora", color: "#4A6FA5", price: 545, badge: "Edição Especial", images: [] },
      { name: "Lumen Rose", color: "#E0A7C0", price: 545, badge: "Edição Especial", images: [] },
    ],
  },
];

// Busca rápida por id (usada na página de produto).
export const getProductById = (id) => products.find((p) => p.id === id);

// Menor preço entre as variantes (para o card mostrar "a partir de").
export const startingPrice = (product) =>
  Math.min(...product.variants.map((v) => v.price));
