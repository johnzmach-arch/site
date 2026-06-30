# Brumadinho — Site Vitrine de Periféricos & PCs Premium

Site vitrine/portfólio (sem checkout) para uma loja de periféricos gamer e PCs
premium. Estética **dark premium** inspirada na Porsche e na GravaStar. Todo o
texto da interface é em **português do Brasil** e os preços em **Real (R$)**. A
conversão acontece via **WhatsApp** (não há carrinho nem pagamento).

> ⚠️ O nome da marca está definido como **Brumadinho** no config central.
> Todos os preços dos produtos são **placeholder** (catálogo GravaStar EUA
> convertido) — **não são preços finais de venda**. Veja `src/data/products.js`.

## Stack
- **React 18 + Vite**
- **Tailwind CSS** (tema dark + cor de acento configurável)
- **Framer Motion** (microanimações leves)
- **React Router** (HashRouter — funciona em qualquer hospedagem estática)
- Sem backend, sem banco de dados, sem checkout.

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # build de produção (pasta dist/)
npm run preview  # pré-visualiza o build
```

## O que editar (e onde)

| Quero mudar...                       | Arquivo                                  |
| ------------------------------------ | ---------------------------------------- |
| **Nome da marca**                    | `src/config.js` → `brandName`            |
| **Número do WhatsApp**               | `src/config.js` → `whatsappNumber`       |
| **Instagram / redes**                | `src/config.js` → `instagramHandle`/`instagramUrl` |
| **Cor de acento** (âmbar/ciano)      | `src/config.js` → `accentColor` + `accentSoft` |
| **Símbolo da moeda**                 | `src/config.js` → `currency`             |
| **Produtos (nome, preço, specs...)** | `src/data/products.js`                   |
| **Categorias / filtros**             | `src/data/products.js` → `categories`    |
| **Slides do hero**                   | `src/data/slides.js`                     |

### Trocar o nome da marca
O nome vem **inteiramente** de `siteConfig.brandName` em `src/config.js`.
Alterar lá atualiza navbar, rodapé, seção "Sobre" e mensagens do WhatsApp.

### Trocar o número do WhatsApp
Edite `whatsappNumber` em `src/config.js` (formato internacional, só dígitos:
`55` + DDD + número). Todos os botões usam `https://wa.me/NUMERO?text=...`
com a mensagem já preenchida (e o nome do produto, nas páginas de produto).

### Mudar a cor de acento
Troque `accentColor` (e `accentSoft`) em `src/config.js`. O valor é injetado
como CSS variable (`--accent`) e propaga para todo o Tailwind/estilos.
Sugestões: âmbar premium `#C8A050` (padrão) ou ciano elétrico `#00E0FF`.

### Adicionar / editar produtos
Edite o array `products` em `src/data/products.js`. Cada produto tem:
`id`, `name`, `category`, `price`, `badge`, `specs`, `variants`, `options`,
`frames`, `images`. Só a categoria **Teclados** tem itens reais; as demais
aparecem como **"Em breve"**.

## Onde colocar as imagens reais

Tudo usa **placeholders dark elegantes automáticos** até você fornecer as
imagens — nada quebra enquanto isso.

- **Imagens de produto / galeria:** coloque em `public/products/` e aponte
  `images: ["/products/arquivo.jpg", ...]` no produto (caminho começando com `/`).
- **Frames do giro 360°:** crie `public/products/<id>/frame_01.jpg` …
  `frame_NN.jpg` e defina `frames: NN` no produto. Se houver menos de 2 frames,
  o site usa o **giro 360° procedural** (sem imagens). Veja
  `public/products/README.md`.
- **Slides do hero:** coloque em `public/hero/` e aponte `image: "/hero/x.jpg"`
  em `src/data/slides.js`.

## Estrutura

```
src/
  config.js              ← configuração central da marca (EDITE AQUI)
  data/
    products.js          ← catálogo (preços PLACEHOLDER)
    slides.js            ← slides do hero
  utils/whatsapp.js      ← link wa.me, mensagens e formatação de preço
  components/
    Navbar, Hero, Catalog, ProductCard,
    Viewer360 (giro 360° + fallback), BuildPC, About, Footer,
    Media, Placeholder
  pages/
    Home.jsx             ← hero + catálogo + monte seu PC + sobre
    ProductPage.jsx      ← visualizador 360° + configurador + specs + CTA
```

## Funcionalidades principais
- **Hero** fullscreen com slider automático (~5s), setas e dots.
- **Catálogo** responsivo (3/2/1 colunas) com filtro por categoria.
- **Página de produto** com **giro 360° (arraste para girar)**, galeria,
  seletor de cor/variante, opções em pílulas, **preço dinâmico** e CTA WhatsApp
  com mensagem pré-preenchida incluindo o nome do produto.
- **Monte seu PC** (teaser) e **Sobre** + rodapé completo.
- 100% responsivo, tema dark absoluto, microanimações suaves.
