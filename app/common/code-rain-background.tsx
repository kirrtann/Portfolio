"use client";
import { useEffect, useRef } from "react";

const CodeRainBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Code characters for the matrix effect
    const codeChars = "01{}[]()<>=+-*/;:.,?!@#$%^&|~`\"'\\";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Array to store the y position of each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }

    const colors = ["#00ff41", "#0099ff", "#ff6b35", "#7b68ee", "#32cd32"];

    const draw = () => {
      // Create trailing effect
      ctx.fillStyle = "rgba(15, 23, 42, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = codeChars[Math.floor(Math.random() * codeChars.length)];

        // Random color from developer palette
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color;

        // Draw character
        ctx.fillText(char, i * fontSize, drops[i]);

        // Reset drop to top randomly
        if (drops[i] > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i] += fontSize;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
      style={{ background: "transparent" }}
    />
  );
};

export default CodeRainBackground;
