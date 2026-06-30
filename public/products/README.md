# Imagens dos produtos

Coloque aqui as imagens reais dos produtos.

## Imagens de galeria
Use caminhos que começem com `/` em `src/data/products.js`, por exemplo:

```js
images: ["/products/k1-pro-cyberpunk-01.jpg", "/products/k1-pro-cyberpunk-02.jpg"]
```

## Frames do giro 360°
Crie uma pasta com o `id` do produto e coloque os frames numerados
`frame_01.jpg`, `frame_02.jpg`, … `frame_NN.jpg`:

```
/public/products/k1-pro-cyberpunk/frame_01.jpg
/public/products/k1-pro-cyberpunk/frame_02.jpg
...
```

Depois defina `frames: NN` no produto correspondente. Se `frames` for menor
que 2, o site usa automaticamente o giro 360° procedural (sem imagens).

> Enquanto não houver imagens reais, o site mostra placeholders dark elegantes
> gerados automaticamente — nada quebra.
