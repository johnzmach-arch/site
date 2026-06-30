// =============================================================
//  CONFIGURAÇÃO CENTRAL DA MARCA
//  Edite TUDO o que é "de marca" aqui — nome, WhatsApp, cores, redes.
//  Alterar um valor neste arquivo reflete em todo o site.
// =============================================================

export const siteConfig = {
  // Nome exibido em toda a interface (logo, títulos, rodapé, mensagens).
  brandName: "BRUMA STORE",

  // Frase de posicionamento curta usada no hero/sobre.
  tagline: "Periféricos & PCs de alto padrão",

  // Número do WhatsApp no formato internacional, somente dígitos.
  // Ex.: 55 (Brasil) + 11 (DDD) + número.  <-- TROCAR pelo número real.
  whatsappNumber: "5511999999999",

  // @ do Instagram (placeholder — trocar depois).
  instagramHandle: "@brumastore",

  // URL completa do Instagram (placeholder).
  instagramUrl: "https://instagram.com/",

  // Cor de acento central (âmbar/dourado metálico — ar "Porsche premium").
  // Para experimentar o ciano elétrico, troque por "#00E0FF".
  accentColor: "#C8A050",

  // Versão suave do acento (usada em brilhos/sombras). Mantenha o mesmo tom.
  accentSoft: "rgba(200, 160, 80, 0.18)",

  // Símbolo de moeda usado nos preços.
  currency: "R$",

  // Cidade/região exibida no rodapé (placeholder).
  location: "Brasil",
};

// Mensagem padrão do WhatsApp quando não há produto específico.
export const defaultWhatsappMessage =
  `Olá! Vim pelo site da ${siteConfig.brandName} e gostaria de mais informações.`;
