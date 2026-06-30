import { useEffect, useMemo, useRef, useState } from "react";

// =============================================================================
//  Visualizador 360° estilo Porsche — arraste (mouse/touch) para girar.
//
//  COMO USAR FRAMES REAIS:
//   - Coloque frame_01.jpg ... frame_NN.jpg em /public/products/<id>/
//   - Defina `frames: NN` no produto (em data/products.js).
//  O componente monta os caminhos automaticamente e alterna entre os frames
//  conforme o arrasto, simulando rotação 360°.
//
//  FALLBACK ELEGANTE: se não houver frames suficientes (frames < 2), exibe uma
//  representação procedural do dispositivo que GIRA em 3D ao arrastar — sem
//  depender de nenhuma imagem. Assim o recurso funciona desde já.
// =============================================================================
export default function Viewer360({ product, accent = "#C8A050" }) {
  const frameCount = product?.frames || 0;
  const hasFrames = frameCount >= 2;

  // Caminhos dos frames reais (quando existirem).
  const frameUrls = useMemo(() => {
    if (!hasFrames) return [];
    return Array.from({ length: frameCount }, (_, i) => {
      const n = String(i + 1).padStart(2, "0");
      return `/products/${product.id}/frame_${n}.jpg`;
    });
  }, [hasFrames, frameCount, product?.id]);

  return hasFrames ? (
    <FrameSequence urls={frameUrls} accent={accent} label={product.name} />
  ) : (
    <ProceduralSpin accent={accent} label={product.name} />
  );
}

// ---------------------------------------------------------------------------
//  Modo 1: sequência de frames reais (drag → troca de frame)
// ---------------------------------------------------------------------------
function FrameSequence({ urls, accent, label }) {
  const [frame, setFrame] = useState(0);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startFrame = useRef(0);

  const onDown = (x) => {
    dragging.current = true;
    startX.current = x;
    startFrame.current = frame;
  };
  const onMove = (x, width) => {
    if (!dragging.current) return;
    const delta = x - startX.current;
    const perFrame = width / urls.length;
    const advance = Math.round(delta / perFrame);
    setFrame((((startFrame.current + advance) % urls.length) + urls.length) % urls.length);
  };
  const onUp = () => (dragging.current = false);

  return (
    <DragSurface accent={accent} onDown={onDown} onMove={onMove} onUp={onUp}>
      <img
        src={urls[frame]}
        alt={`${label} — ângulo ${frame + 1}`}
        className="pointer-events-none h-full w-full select-none object-contain"
        draggable={false}
      />
    </DragSurface>
  );
}

// ---------------------------------------------------------------------------
//  Modo 2: giro procedural (sem imagens) — slab 3D que rotaciona ao arrastar
// ---------------------------------------------------------------------------
function ProceduralSpin({ accent, label }) {
  const [angle, setAngle] = useState(-18);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startAngle = useRef(0);

  const onDown = (x) => {
    dragging.current = true;
    startX.current = x;
    startAngle.current = angle;
  };
  const onMove = (x) => {
    if (!dragging.current) return;
    const delta = x - startX.current;
    setAngle(startAngle.current + delta * 0.4);
  };
  const onUp = () => (dragging.current = false);

  // luz acompanha o ângulo
  const lightX = 50 + Math.sin((angle * Math.PI) / 180) * 30;

  return (
    <DragSurface accent={accent} onDown={onDown} onMove={onMove} onUp={onUp}>
      <div
        className="flex h-full w-full items-center justify-center"
        style={{ perspective: "1100px" }}
      >
        <div
          style={{
            transform: `rotateY(${angle}deg) rotateX(8deg)`,
            transformStyle: "preserve-3d",
            transition: dragging.current ? "none" : "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* corpo do teclado */}
          <div
            className="relative grid grid-cols-12 gap-[3px] rounded-xl p-4 shadow-2xl"
            style={{
              width: "min(64vw, 360px)",
              height: "min(28vw, 150px)",
              background: `linear-gradient(${135}deg, #1f1f1f, #0c0c0c)`,
              boxShadow: `0 30px 60px -20px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.04)`,
            }}
          >
            {/* iluminação de acento que segue o giro */}
            <div
              className="pointer-events-none absolute inset-0 rounded-xl"
              style={{
                background: `radial-gradient(120% 90% at ${lightX}% 0%, ${accent}33, transparent 60%)`,
              }}
            />
            {Array.from({ length: 48 }).map((_, i) => (
              <span
                key={i}
                className="rounded-[3px]"
                style={{
                  background: "linear-gradient(180deg, #2a2a2a, #161616)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                  height: "100%",
                }}
              />
            ))}
            {/* faixa de luz inferior (RGB) */}
            <div
              className="absolute inset-x-3 -bottom-1 h-1 rounded-full blur-[2px]"
              style={{ background: accent, opacity: 0.7 }}
            />
          </div>
          {/* reflexo no "chão" */}
          <div
            className="mx-auto mt-2 rounded-full blur-md"
            style={{
              width: "70%",
              height: "16px",
              background: "rgba(0,0,0,0.6)",
            }}
          />
        </div>
      </div>
    </DragSurface>
  );
}

// ---------------------------------------------------------------------------
//  Superfície de arrasto compartilhada (mouse + touch) + dica visual
// ---------------------------------------------------------------------------
function DragSurface({ children, onDown, onMove, onUp, accent }) {
  const ref = useRef(null);
  const [hint, setHint] = useState(true);

  const width = () => ref.current?.offsetWidth || 1;

  useEffect(() => {
    const handleUp = () => onUp();
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, [onUp]);

  return (
    <div
      ref={ref}
      className="relative h-full w-full cursor-ew-resize touch-none select-none"
      onMouseDown={(e) => {
        setHint(false);
        onDown(e.clientX);
      }}
      onMouseMove={(e) => onMove(e.clientX, width())}
      onTouchStart={(e) => {
        setHint(false);
        onDown(e.touches[0].clientX);
      }}
      onTouchMove={(e) => onMove(e.touches[0].clientX, width())}
    >
      {children}

      {/* dica "arraste para girar" */}
      {hint && (
        <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.6">
            <path d="M3 12a9 9 0 1 0 3-6.7" strokeLinecap="round" />
            <path d="M3 4v4h4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[10px] uppercase tracking-widest text-white/70">
            Arraste para girar 360°
          </span>
        </div>
      )}
    </div>
  );
}
