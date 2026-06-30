import { siteConfig, defaultWhatsappMessage } from "../config.js";

// Monta o link wa.me com a mensagem url-encoded, puxando o número do config.
export function whatsappLink(message) {
  const text = encodeURIComponent(message || defaultWhatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

// Mensagem padrão de interesse em um produto específico.
export function productMessage(productName, variantName) {
  const variantePart = variantName ? ` - ${variantName}` : "";
  return `Olá! Tenho interesse no ${productName}${variantePart}. Pode me ajudar?`;
}

// Formata um número como preço em Real (R$ 1.345).
export function formatPrice(value) {
  return `${siteConfig.currency} ${value.toLocaleString("pt-BR")}`;
}
