import { useState } from "react";
import Placeholder from "./Placeholder.jsx";

// =============================================================================
//  <Media> — mostra a imagem real quando existir; senão, o Placeholder.
//  Regra: só tenta carregar arquivos cujo caminho começa com "/" (estão em
//  /public). Os nomes "placeholder_*.jpg" dos dados ainda não são arquivos
//  reais, então caem no placeholder elegante sem erro no console.
//  Para usar fotos reais: coloque-as em /public/... e use o caminho "/..."
// =============================================================================
export default function Media({ src, label, accent, className = "" }) {
  const isRealAsset = typeof src === "string" && src.startsWith("/");
  const [failed, setFailed] = useState(false);

  if (!isRealAsset || failed) {
    return <Placeholder label={label} accent={accent} className={className} />;
  }

  return (
    <img
      src={src}
      alt={label}
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
      loading="lazy"
    />
  );
}
