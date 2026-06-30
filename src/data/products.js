// =============================================================================
//  DADOS DE PRODUTOS — PLACEHOLDER
//
//  ATENÇÃO: os preços abaixo são PLACEHOLDER (catálogo GravaStar EUA convertido
//  por ~R$5,45). NÃO são preços finais de venda. Substituir pelos valores reais
//  definidos para o Brasil (com imposto e margem).
//
//  Como editar:
//   - Adicione/edite objetos neste array para mudar o catálogo.
//   - `images`: nomes dos arquivos reais (coloque em /public/products/).
//     Enquanto não existirem, o site mostra um placeholder elegante automático.
//   - `frames`: quantidade de frames do giro 360° (frame_01..frame_NN em
//     /public/products/<id>/). Se 0, o visualizador usa o fallback procedural.
//   - `variants`: cada cor troca a imagem principal e pode ter preço próprio.
//   - `options`: pílulas selecionáveis (switch, layout...) com `priceDelta`
//     somado ao preço base (apenas visual, para simular o configurador).
// =============================================================================

export const categories = [
  { id: "Teclados", label: "Teclados", available: true },
  { id: "Mouses", label: "Mouses", available: false },
  { id: "PCs", label: "PCs", available: false },
  { id: "Acessórios", label: "Acessórios", available: false },
];

export const products = [
  {
    id: "k98-pro-phantom-black",
    name: "Mercury K98 Pro — Phantom Black",
    category: "Teclados",
    price: 1345,
    badge: "Novo",
    tagline: "Carro-chefe full-size 98% em alumínio aeronáutico.",
    specs: {
      layout: "98%",
      switches: "GravaStar x Kailh Linear",
      material: "Alumínio",
      conexao: "2.4GHz / Bluetooth 5.0 / USB-C",
      rgb: "2 sistemas de luz",
    },
    variants: [{ name: "Phantom Black", color: "#1A1A1A", price: 1345 }],
    options: [
      {
        id: "switch",
        label: "Switch",
        choices: [
          { id: "linear", label: "Linear", priceDelta: 0 },
          { id: "tactile", label: "Tátil", priceDelta: 40 },
          { id: "speedy", label: "Speedy", priceDelta: 60 },
        ],
      },
      {
        id: "layout",
        label: "Layout",
        choices: [
          { id: "abnt2", label: "ABNT2", priceDelta: 0 },
          { id: "ansi", label: "ANSI (US)", priceDelta: 0 },
        ],
      },
    ],
    frames: 0,
    images: ["placeholder_k98_01.jpg", "placeholder_k98_02.jpg"],
  },
  {
    id: "k1-pro-cyberpunk",
    name: "Mercury K1 Pro — Cyberpunk",
    category: "Teclados",
    price: 1090,
    badge: "Mais Vendido",
    tagline: "Ícone 75% com iluminação lateral de 270°.",
    specs: {
      layout: "75%",
      switches: "GravaStar x Kailh Speedy Mint",
      material: "Alumínio",
      conexao: "2.4GHz / Bluetooth 5.0 / USB-C",
      rgb: "270° customizável",
    },
    variants: [{ name: "Cyberpunk", color: "#C8A050", price: 1090 }],
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
      {
        id: "layout",
        label: "Layout",
        choices: [
          { id: "abnt2", label: "ABNT2", priceDelta: 0 },
          { id: "ansi", label: "ANSI (US)", priceDelta: 0 },
        ],
      },
    ],
    frames: 0,
    images: ["placeholder_k1pro_cyber_01.jpg", "placeholder_k1pro_cyber_02.jpg"],
  },
  {
    id: "k1-pro-interstellar-silver",
    name: "Mercury K1 Pro — Interstellar Silver",
    category: "Teclados",
    price: 980,
    badge: null,
    tagline: "Prata interestelar com acabamento anodizado.",
    specs: {
      layout: "75%",
      switches: "GravaStar x Kailh Linear",
      material: "Alumínio",
      conexao: "2.4GHz / Bluetooth 5.0 / USB-C",
      rgb: "270° customizável",
    },
    variants: [{ name: "Interstellar Silver", color: "#C0C0C0", price: 980 }],
    options: [
      {
        id: "switch",
        label: "Switch",
        choices: [
          { id: "linear", label: "Linear", priceDelta: 0 },
          { id: "tactile", label: "Tátil", priceDelta: 20 },
        ],
      },
      {
        id: "layout",
        label: "Layout",
        choices: [
          { id: "abnt2", label: "ABNT2", priceDelta: 0 },
          { id: "ansi", label: "ANSI (US)", priceDelta: 0 },
        ],
      },
    ],
    frames: 0,
    images: [
      "placeholder_k1pro_silver_01.jpg",
      "placeholder_k1pro_silver_02.jpg",
    ],
  },
  {
    id: "k1-stealth-black",
    name: "Mercury K1 — Stealth Black",
    category: "Teclados",
    price: 710,
    badge: null,
    tagline: "Discreto, total black, pronto para o dia a dia.",
    specs: {
      layout: "75%",
      switches: "GravaStar x Kailh Linear",
      material: "Alumínio",
      conexao: "2.4GHz / Bluetooth 5.0 / USB-C",
      rgb: "2 sistemas de luz",
    },
    variants: [{ name: "Stealth Black", color: "#0D0D0D", price: 710 }],
    options: [
      {
        id: "switch",
        label: "Switch",
        choices: [
          { id: "linear", label: "Linear", priceDelta: 0 },
          { id: "tactile", label: "Tátil", priceDelta: 20 },
        ],
      },
    ],
    frames: 0,
    images: ["placeholder_k1_stealth_01.jpg", "placeholder_k1_stealth_02.jpg"],
  },
  {
    id: "k1-sakura-pink",
    name: "Mercury K1 — Sakura Pink (Edição Especial)",
    category: "Teclados",
    price: 765,
    badge: "Edição Especial",
    tagline: "Rosa sakura em série limitada.",
    specs: {
      layout: "75%",
      switches: "GravaStar x Kailh Linear",
      material: "Alumínio",
      conexao: "2.4GHz / Bluetooth 5.0 / USB-C",
      rgb: "2 sistemas de luz",
    },
    variants: [{ name: "Sakura Pink", color: "#E8A0B0", price: 765 }],
    options: [
      {
        id: "switch",
        label: "Switch",
        choices: [
          { id: "linear", label: "Linear", priceDelta: 0 },
          { id: "tactile", label: "Tátil", priceDelta: 20 },
        ],
      },
    ],
    frames: 0,
    images: ["placeholder_k1_sakura_01.jpg", "placeholder_k1_sakura_02.jpg"],
  },
  {
    id: "k1-lite-transparent-black",
    name: "Mercury K1 Lite — Transparent Black",
    category: "Teclados",
    price: 490,
    badge: null,
    tagline: "Estrutura translúcida em policarbonato.",
    specs: {
      layout: "75%",
      switches: "GravaStar x BSUN Linear",
      material: "PC (policarbonato)",
      conexao: "2.4GHz / Bluetooth 5.0 / USB-C",
      rgb: "1 sistema de luz",
    },
    variants: [{ name: "Transparent Black", color: "#2A2A2A", price: 490 }],
    options: [
      {
        id: "switch",
        label: "Switch",
        choices: [{ id: "linear", label: "Linear", priceDelta: 0 }],
      },
    ],
    frames: 0,
    images: ["placeholder_k1lite_01.jpg", "placeholder_k1lite_02.jpg"],
  },
];

// Busca rápida por id (usada na página de produto).
export const getProductById = (id) => products.find((p) => p.id === id);
