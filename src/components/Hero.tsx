import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { Github } from "lucide-react";
import ECGAnimation from "./ECGAnimation";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const brainWaves: {
      x: number;
      y: number;
      radius: number;
      speed: number;
      color: string;
    }[] = [];
    const heartBeats: {
      x: number;
      y: number;
      radius: number;
      speed: number;
      color: string;
    }[] = [];

    // Generate brain waves (blue particles)
    for (let i = 0; i < 30; i++) {
      brainWaves.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 1 + 0.2,
        color: "rgba(155, 135, 245, " + (Math.random() * 0.5 + 0.2) + ")",
      });
    }

    // Generate heart beats (red particles)
    for (let i = 0; i < 20; i++) {
      heartBeats.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 1 + 0.2,
        color: "rgba(234, 56, 76, " + (Math.random() * 0.5 + 0.2) + ")",
      });
    }

    const connections: { p1: number; p2: number; opacity: number }[] = [];

    // Create connections between some points
    for (let i = 0; i < brainWaves.length; i++) {
      for (let j = i + 1; j < brainWaves.length; j++) {
        if (Math.random() > 0.85) {
          connections.push({
            p1: i,
            p2: j,
            opacity: Math.random() * 0.2,
          });
        }
      }
    }

    function drawScene() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw brain waves
      for (let i = 0; i < brainWaves.length; i++) {
        const p = brainWaves[i];
        p.x += p.speed;
        if (p.x > canvas.width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      // Update and draw heart beats
      for (let i = 0; i < heartBeats.length; i++) {
        const p = heartBeats[i];
        p.x -= p.speed;
        if (p.x < 0) p.x = canvas.width;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      // Draw connections
      for (const conn of connections) {
        const p1 = brainWaves[conn.p1];
        const p2 = brainWaves[conn.p2];
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < canvas.width / 4) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(155, 135, 245, ${conn.opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      requestAnimationFrame(drawScene);
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        canvas.width = entry.contentRect.width;
        canvas.height = entry.contentRect.height;
      }
    });

    resizeObserver.observe(canvas);
    drawScene();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-background">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/80 z-10" />

      <div className="section-container z-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 title-gradient">
          Brain<span className="gradient-text">Heart</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
          Exploring Heart–Brain Interactions Through Open Science
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button
            variant="tech"
            size="lg"
            onClick={() => window.open("#get-involved", "_self")}
          >
            Join the Mission
          </Button>

          <Button
            variant="outline"
            size="lg"
            icon={<Github className="h-5 w-5" />}
            onClick={() => window.open("https://github.com", "_blank")}
          >
            GitHub Repo
          </Button>
        </div>

        <ECGAnimation className="max-w-4xl mt-8 opacity-75" />
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a
          href="#about"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
