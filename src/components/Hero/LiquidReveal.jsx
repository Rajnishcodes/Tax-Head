
import { useEffect, useRef } from "react";

const BRUSH_RADIUS = 143;
const TRAIL_DECAY = 0.016;
const MAX_DPR = 2;

export default function LiquidReveal({
  baseSrc = "/hero/hero-base.jpg",
  revealSrc = "/hero/hero-reveal.jpg",
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return undefined;

    const context = canvas.getContext("2d");
    const coverCanvas = document.createElement("canvas");
    const coverContext = coverCanvas.getContext("2d");
    const brushCanvas = document.createElement("canvas");
    const brushContext = brushCanvas.getContext("2d");

    if (!context || !coverContext || !brushContext) {
      return undefined;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const image = new Image();
    image.src = revealSrc;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let radius = BRUSH_RADIUS;
    let brushSize = 0;
    let lastPoint = null;
    let points = [];
    let idleFrames = 0;
    let frameId = 0;
    let active = true;
    let ready = false;

    const drawCoverImage = () => {
      if (!ready || !width || !height) return;

      coverContext.clearRect(
        0,
        0,
        coverCanvas.width,
        coverCanvas.height
      );

      const scale = Math.max(
        coverCanvas.width / image.naturalWidth,
        coverCanvas.height / image.naturalHeight
      );

      const drawWidth = image.naturalWidth * scale;
      const drawHeight = image.naturalHeight * scale;

      coverContext.drawImage(
        image,
        (coverCanvas.width - drawWidth) / 2,
        (coverCanvas.height - drawHeight) / 2,
        drawWidth,
        drawHeight
      );
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();

      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      coverCanvas.width = canvas.width;
      coverCanvas.height = canvas.height;

      radius = BRUSH_RADIUS * dpr;
      brushSize = Math.ceil(radius * 2);

      brushCanvas.width = brushSize;
      brushCanvas.height = brushSize;

      drawCoverImage();
      context.clearRect(0, 0, canvas.width, canvas.height);
      points = [];
      lastPoint = null;
    };

    const stamp = (x, y) => {
      const center = brushSize / 2;

      brushContext.clearRect(0, 0, brushSize, brushSize);
      brushContext.globalCompositeOperation = "source-over";

      const gradient = brushContext.createRadialGradient(
        center,
        center,
        0,
        center,
        center,
        radius
      );

      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.55, "rgba(255,255,255,0.82)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");

      brushContext.fillStyle = gradient;
      brushContext.fillRect(0, 0, brushSize, brushSize);

      brushContext.globalCompositeOperation = "source-in";

      brushContext.drawImage(
        coverCanvas,
        x - center,
        y - center,
        brushSize,
        brushSize,
        0,
        0,
        brushSize,
        brushSize
      );

      brushContext.globalCompositeOperation = "source-over";

      context.globalCompositeOperation = "source-over";
      context.drawImage(
        brushCanvas,
        x - center,
        y - center
      );
    };

    const handlePointerMove = (event) => {
      if (!active || !ready || reducedMotion.matches) return;

      const rect = container.getBoundingClientRect();

      const x = (event.clientX - rect.left) * dpr;
      const y = (event.clientY - rect.top) * dpr;

      const outside =
        x < -radius ||
        y < -radius ||
        x > canvas.width + radius ||
        y > canvas.height + radius;

      if (outside) {
        lastPoint = null;
        return;
      }

      if (!lastPoint) {
        points.push({ x, y });
        lastPoint = { x, y };
        return;
      }

      const dx = x - lastPoint.x;
      const dy = y - lastPoint.y;
      const distance = Math.hypot(dx, dy);
      const step = Math.max(radius * 0.3, 1);
      const count = Math.min(Math.ceil(distance / step), 60);

      for (let index = 1; index <= count; index += 1) {
        const progress = index / count;

        points.push({
          x: lastPoint.x + dx * progress,
          y: lastPoint.y + dy * progress,
        });
      }

      lastPoint = { x, y };
    };

    const tick = () => {
      if (!active || !ready || reducedMotion.matches) return;

      if (points.length) {
        idleFrames = 0;
      } else {
        idleFrames += 1;
      }

      if (idleFrames > 120) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        lastPoint = null;
        frameId = 0;
        return;
      }

      const fade = points.length
        ? TRAIL_DECAY
        : Math.min(TRAIL_DECAY + idleFrames * 0.004, 0.5);

      context.globalCompositeOperation = "destination-out";
      context.fillStyle = `rgba(0,0,0,${fade})`;
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.globalCompositeOperation = "source-over";

      points.forEach(({ x, y }) => stamp(x, y));
      points = [];

      frameId = window.requestAnimationFrame(tick);
    };

    const startAnimation = () => {
      if (
        !active ||
        !ready ||
        reducedMotion.matches ||
        frameId
      ) {
        return;
      }

      frameId = window.requestAnimationFrame(tick);
    };

    const handleReducedMotionChange = () => {
      if (reducedMotion.matches) {
        points = [];
        lastPoint = null;

        if (frameId) {
          window.cancelAnimationFrame(frameId);
          frameId = 0;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    const handleImageLoad = () => {
      if (!active) return;

      ready = true;
      resize();
      startAnimation();
    };

    image.addEventListener("load", handleImageLoad);

    if (image.complete && image.naturalWidth > 0) {
      handleImageLoad();
    }

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", () => {
      lastPoint = null;
    });

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    reducedMotion.addEventListener(
      "change",
      handleReducedMotionChange
    );

    return () => {
      active = false;
      image.removeEventListener("load", handleImageLoad);
      container.removeEventListener("pointermove", handlePointerMove);
      observer.disconnect();
      reducedMotion.removeEventListener(
        "change",
        handleReducedMotionChange
      );

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [baseSrc, revealSrc]);

  return (
    <div
      className="gst-liquid-reveal"
      ref={containerRef}
      aria-hidden="true"
    >
      <img
        className="gst-liquid-reveal__base"
        src={baseSrc}
        alt=""
        draggable="false"
      />

      <canvas
        className="gst-liquid-reveal__canvas"
        ref={canvasRef}
      />
    </div>
  );
}
