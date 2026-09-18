'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

export function WireframeCanvas() {
  const t = useTranslations('canvas3d');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rotLabelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    const rotLabel = rotLabelRef.current;
    const fpsLabel = document.getElementById('viewport-fps');

    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Theme colors (read from CSS tokens, kept in sync with mode/theme changes)
    let ink = '#121212';
    let inkSoft = '#888888';
    let surface = '#ffffff';
    const readTheme = () => {
      const styles = getComputedStyle(document.documentElement);
      ink = styles.getPropertyValue('--c-ink').trim() || '#121212';
      inkSoft = styles.getPropertyValue('--c-ink-soft').trim() || '#888888';
      surface = styles.getPropertyValue('--c-surface').trim() || '#ffffff';
    };
    readTheme();
    const themeObserver = new MutationObserver(readTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Set canvas size
    const setCanvasSize = () => {
      const rect = wrapper.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Icosahedron vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVertices = [
      [-1,  phi, 0], [ 1,  phi, 0], [-1, -phi, 0], [ 1, -phi, 0],
      [ 0, -1,  phi], [ 0,  1,  phi], [ 0, -1, -phi], [ 0,  1, -phi],
      [ phi, 0, -1], [ phi, 0,  1], [-phi, 0, -1], [-phi, 0,  1]
    ];

    const vertices = rawVertices.map(v => {
      const d = Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);
      return [v[0]/d, v[1]/d, v[2]/d];
    });

    const edges = [
      [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
      [1, 5], [1, 9], [1, 8], [1, 7],
      [2, 11], [2, 4], [2, 3], [2, 6], [2, 10],
      [3, 4], [3, 9], [3, 8], [3, 6],
      [4, 11], [4, 5], [4, 9],
      [5, 11], [5, 9],
      [6, 10], [6, 7], [6, 8],
      [7, 10], [7, 8],
      [8, 9],
      [10, 11]
    ];

    let angleX = 0.45;
    let angleY = 0.65;
    const targetRotSpeedX = 0.003;
    const targetRotSpeedY = 0.006;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      wrapper.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
      isDragging = false;
      wrapper.style.cursor = 'grab';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      angleY += dx * 0.008;
      angleX += dy * 0.008;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    wrapper.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    // Touch support
    const handleTouchStart = (e: TouchEvent) => {
      isDragging = true;
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const dx = e.touches[0].clientX - lastMouseX;
      const dy = e.touches[0].clientY - lastMouseY;
      angleY += dx * 0.008;
      angleX += dy * 0.008;
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
    };

    wrapper.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchmove', handleTouchMove);

    let lastFrameTime = performance.now();
    let frameCount = 0;
    let fpsTimer = 0;

    const render = (now: number) => {
      const dt = now - lastFrameTime;
      lastFrameTime = now;

      frameCount++;
      fpsTimer += dt;
      if (fpsTimer >= 1000) {
        if (fpsLabel) fpsLabel.textContent = `${frameCount} ${t('fps')}`;
        frameCount = 0;
        fpsTimer = 0;
      }

      if (!isDragging) {
        angleY += targetRotSpeedY;
        angleX += targetRotSpeedX;
      }

      if (rotLabel) {
        const deg = Math.round(((angleY % (Math.PI * 2)) * 180 / Math.PI));
        rotLabel.textContent = `ROT_Y: ${(deg < 0 ? deg + 360 : deg)}°`;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const scale = Math.min(canvas.width, canvas.height) * 0.3;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const projected = vertices.map(v => {
        const x1 = v[0] * cosY + v[2] * sinY;
        const y1 = v[1];
        const z1 = -v[0] * sinY + v[2] * cosY;

        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        const fov = 3.2;
        const pZ = z2 + fov;
        const projX = cx + (x2 / pZ) * scale * 2.8;
        const projY = cy + (y2 / pZ) * scale * 2.8;

        return { x: projX, y: projY, z: z2 };
      });

      // Draw edges - retro ink stroke style
      edges.forEach(edge => {
        const p1 = projected[edge[0]];
        const p2 = projected[edge[1]];
        const avgZ = (p1.z + p2.z) / 2;
        const isFront = avgZ > 0;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = isFront ? ink : inkSoft;
        ctx.lineWidth = isFront ? 1.8 : 1.0;
        ctx.stroke();
      });

      // Draw vertices - retro squares
      projected.forEach((p) => {
        const isFront = p.z > 0;
        const size = isFront ? 6 : 4;
        ctx.fillStyle = isFront ? ink : surface;
        ctx.strokeStyle = ink;
        ctx.lineWidth = 1.5;
        ctx.fillRect(p.x - size/2, p.y - size/2, size, size);
        ctx.strokeRect(p.x - size/2, p.y - size/2, size, size);
      });

      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      wrapper.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [t]);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full aspect-square bg-[#faf9f5] border-2 border-retro-ink flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden"
      id="canvas-3d-wrapper"
      role="img"
      aria-label={t('title')}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        id="polyhedron-canvas"
      />
      <div className="absolute bottom-3 left-3 bg-retro-card/95 border-2 border-retro-ink p-2 font-mono text-[11px] text-retro-ink flex flex-col gap-0.5 pointer-events-none retro-shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <span className="text-retro-muted uppercase">{t('object')}</span>
          <span className="font-bold">{t('objectValue')}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-retro-muted uppercase">{t('status')}</span>
          <span className="font-bold text-retro-on-accent bg-retro-mint/80 px-1 border border-retro-ink" ref={rotLabelRef} id="poly-rot-label">ROT_Y: 0°</span>
        </div>
      </div>
      <div className="absolute top-3 right-3 bg-retro-card border-2 border-retro-ink px-2 py-1 font-mono text-[10px] font-bold text-retro-ink pointer-events-none flex items-center gap-1 retro-shadow-sm">
        <span className="material-symbols-outlined text-[13px]">touch_app</span>
        <span>{t('dragHint')}</span>
      </div>
    </div>
  );
}