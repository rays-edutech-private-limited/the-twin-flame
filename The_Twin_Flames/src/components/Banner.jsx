"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import * as THREE from "three";

export default function Banner() {
  const canvasRef = useRef(null);
  const sparksCanvasRef = useRef(null);
  
  // Ref states for Three.js WebGL rotation & mouse parallax
  const dragging = useRef(false);
  const lastMX = useRef(0);
  const velX = useRef(0.0);
  const rotY = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });

  // Track mouse coordinates for holographic parallax cinematic depth
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleMouseMoveGlobal = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMoveGlobal);
    return () => {
      window.removeEventListener("mousemove", handleMouseMoveGlobal);
    };
  }, []);

  // 1. Full-Screen 2D Canvas Background Golden Sparks & Fiery Flares Animation
  useEffect(() => {
    if (typeof window === "undefined" || !sparksCanvasRef.current) return;
    const canvas = sparksCanvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
    let height = canvas.parentElement ? canvas.parentElement.clientHeight : 800;
    
    // Set initial size
    canvas.width = width;
    canvas.height = height;

    // Create 90 golden sparks
    const sparks = Array.from({ length: 90 }).map(() => ({
      type: "spark",
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speed: Math.random() * 0.85 + 0.4,
      opacity: Math.random() * 0.7 + 0.25,
      swaySpeed: Math.random() * 0.015 + 0.005,
      swayOffset: Math.random() * 100,
    }));

    // Create 12 glowing bokeh lights
    const bokehs = Array.from({ length: 12 }).map(() => ({
      type: "bokeh",
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 15 + 8,
      speed: Math.random() * 0.2 + 0.08,
      opacity: Math.random() * 0.15 + 0.05,
      swaySpeed: Math.random() * 0.008 + 0.003,
      swayOffset: Math.random() * 100,
      pulseSpeed: Math.random() * 0.02 + 0.005,
    }));

    // Create 8 large glowing fire flares (smoke trail effect)
    const flares = Array.from({ length: 8 }).map(() => ({
      type: "flare",
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 70 + 55,
      speed: Math.random() * 0.16 + 0.05,
      opacity: Math.random() * 0.05 + 0.025,
      swaySpeed: Math.random() * 0.004 + 0.002,
      swayOffset: Math.random() * 100,
      color: Math.random() > 0.5 ? "255, 175, 75" : "235, 75, 30",
    }));

    const particles = [...sparks, ...bokehs, ...flares];
    let initializedLayout = false;

    const draw = () => {
      const parent = canvas.parentElement;
      const currentW = parent ? parent.clientWidth : window.innerWidth;
      const currentH = parent ? parent.clientHeight : 800;

      // Update internal drawing buffer resolution without altering CSS styles directly
      if (canvas.width !== currentW || canvas.height !== currentH || !initializedLayout) {
        width = canvas.width = currentW;
        height = canvas.height = currentH;
        initializedLayout = true;

        for (let p of particles) {
          p.x = Math.random() * width;
          p.y = Math.random() * height;
        }
      }

      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        p.y -= p.speed;
        const xOffset = Math.sin(p.y * p.swaySpeed + p.swayOffset) * 2.8;

        if (p.type === "spark") {
          ctx.beginPath();
          ctx.arc(p.x + xOffset, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 220, 150, ${p.opacity})`;
          ctx.fill();
        } else if (p.type === "bokeh") {
          const currentOpacity = p.opacity * (0.6 + Math.sin(p.y * p.pulseSpeed) * 0.4);
          ctx.beginPath();
          ctx.arc(p.x + xOffset, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 195, 110, ${currentOpacity})`;
          ctx.fill();
        } else {
          const grad = ctx.createRadialGradient(
            p.x + xOffset, p.y, 0,
            p.x + xOffset, p.y, p.size
          );
          grad.addColorStop(0, `rgba(${p.color}, ${p.opacity})`);
          grad.addColorStop(0.3, `rgba(${p.color}, ${p.opacity * 0.5})`);
          grad.addColorStop(1, `rgba(${p.color}, 0)`);

          ctx.beginPath();
          ctx.arc(p.x + xOffset, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        const boundSize = p.size || 10;
        if (p.y < -boundSize) {
          p.y = height + boundSize;
          p.x = Math.random() * width;
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Observe parent container to avoid loop thrashing
    const sparksResizeObserver = new ResizeObserver((entries) => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    });

    if (canvas.parentElement) {
      sparksResizeObserver.observe(canvas.parentElement);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      sparksResizeObserver.disconnect();
    };
  }, []);

  // 2. Boxed 3D Three.js WebGL Candle Showcase (Highly Responsive & Performant)
  useEffect(() => {
    if (typeof window === "undefined" || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    let width = parent ? parent.clientWidth : 300;
    let height = parent ? parent.clientHeight : 300;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height, false); // Pass false to prevent style reflow loops

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 3.2);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.AmbientLight(0xffffff, 0.85));

    const dirLight = new THREE.DirectionalLight(0xfffaf5, 1.55);
    dirLight.position.set(0.5, 1.2, 3.5);
    scene.add(dirLight);

    const glowLight = new THREE.PointLight(0xffb85c, 3.2, 8, 1.2);
    glowLight.position.set(0, 0.15, 0.25);
    scene.add(glowLight);

    // Volumetric Halo Plane
    const glowCanvas = document.createElement("canvas");
    glowCanvas.width = 128;
    glowCanvas.height = 128;
    const glowCtx = glowCanvas.getContext("2d");
    const glowGrad = glowCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
    glowGrad.addColorStop(0, "rgba(255, 175, 75, 0.45)");
    glowGrad.addColorStop(0.3, "rgba(255, 120, 40, 0.18)");
    glowGrad.addColorStop(1, "rgba(255, 120, 40, 0)");
    glowCtx.fillStyle = glowGrad;
    glowCtx.fillRect(0, 0, 128, 128);
    const glowTex = new THREE.CanvasTexture(glowCanvas);

    const glowGeo = new THREE.PlaneGeometry(3.6, 3.6);
    const glowMat = new THREE.MeshBasicMaterial({
      map: glowTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const bgGlow = new THREE.Mesh(glowGeo, glowMat);
    bgGlow.position.set(0, 0.1, -0.18);
    scene.add(bgGlow);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    
    const desktopTex = textureLoader.load("/images/our_products/bg_remove_02.png");
    desktopTex.minFilter = THREE.LinearFilter;

    const mobileTex = textureLoader.load("/images/our_products/bg_remove_candle.png");
    mobileTex.minFilter = THREE.LinearFilter;

    // Create Desktop Mesh
    const desktopGeo = new THREE.PlaneGeometry(3.2, 2.4);
    const desktopMat = new THREE.MeshStandardMaterial({
      map: desktopTex,
      transparent: true,
      side: THREE.DoubleSide,
      roughness: 0.35,
      metalness: 0.05,
    });
    const desktopCandle = new THREE.Mesh(desktopGeo, desktopMat);
    desktopCandle.position.set(0, 0, 0);
    scene.add(desktopCandle);

    // Create Mobile Mesh
    const mobileGeo = new THREE.PlaneGeometry(1.6, 2.13);
    const mobileMat = new THREE.MeshStandardMaterial({
      map: mobileTex,
      transparent: true,
      side: THREE.DoubleSide,
      roughness: 0.35,
      metalness: 0.05,
    });
    const mobileCandle = new THREE.Mesh(mobileGeo, mobileMat);
    mobileCandle.position.set(0, 0, 0);
    scene.add(mobileCandle);

    // Dynamic Camera Distance and Image Switcher
    const adjustCamera = (w, h) => {
      if (w === 0 || h === 0) return;
      const aspect = w / h;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false); // Style width/height locked by CSS to prevent loops

      const fovRad = (camera.fov * Math.PI) / 180;
      const tanFOV = Math.tan(fovRad / 2);
      let z;

      if (aspect >= 1.0) {
        desktopCandle.visible = true;
        mobileCandle.visible = false;

        const planeHeight = 2.4;
        z = (planeHeight / (2 * tanFOV)) * 1.26;
      } else {
        desktopCandle.visible = false;
        mobileCandle.visible = true;

        const planeWidth = 1.6;
        z = (planeWidth / (2 * tanFOV * aspect)) * 1.12;
      }
      
      camera.position.z = Math.max(3.2, Math.min(z, 8.5));
      camera.lookAt(0, 0, 0);
    };

    // Observe the parent container instead of the canvas to avoid style-reflow loops
    const canvasResizeObserver = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const w = entries[0].contentRect.width || (parent ? parent.clientWidth : 300);
      const h = entries[0].contentRect.height || (parent ? parent.clientHeight : 300);
      adjustCamera(w, h);
    });

    if (parent) {
      canvasResizeObserver.observe(parent);
    }

    // Initial Adjustment
    adjustCamera(width, height);

    // Animation Loop
    let animationFrameId;
    const timer = new THREE.Timer();
    let t = 0;

    const animate = (timestamp) => {
      animationFrameId = requestAnimationFrame(animate);
      timer.update(timestamp || performance.now());
      const dt = Math.min(timer.getDelta(), 0.05);
      t += dt;

      if (!dragging.current) {
        velX.current *= 0.95;
        rotY.current += velX.current;
      }
      
      desktopCandle.rotation.y = rotY.current;
      mobileCandle.rotation.y = rotY.current;
      bgGlow.rotation.z = rotY.current * 0.2;

      const pulse = Math.sin(t * 14) * 0.25;
      glowLight.intensity = 3.2 + pulse;
      bgGlow.scale.setScalar(1.0 + Math.sin(t * 12) * 0.06);

      if (!dragging.current) {
        const targetCamX = mouse.current.x * 0.25;
        const targetCamY = mouse.current.y * 0.18;
        camera.position.x += (targetCamX - camera.position.x) * 0.05;
        camera.position.y += (targetCamY - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
      } else {
        camera.position.x += (0 - camera.position.x) * 0.1;
        camera.position.y += (0 - camera.position.y) * 0.1;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvasResizeObserver.disconnect();
      renderer.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      glowTex.dispose();
      desktopGeo.dispose();
      desktopMat.dispose();
      desktopTex.dispose();
      mobileGeo.dispose();
      mobileMat.dispose();
      mobileTex.dispose();
    };
  }, []);

  // Mouse & Touch events for rotating the candle manually
  const handleMouseDown = (e) => {
    dragging.current = true;
    lastMX.current = e.clientX;
    velX.current = 0;
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;
    const deltaX = e.clientX - lastMX.current;
    velX.current = deltaX * 0.006;
    rotY.current += velX.current;
    lastMX.current = e.clientX;
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  const handleTouchStart = (e) => {
    dragging.current = true;
    lastMX.current = e.touches[0].clientX;
    velX.current = 0;
  };

  const handleTouchMove = (e) => {
    if (!dragging.current) return;
    const deltaX = e.touches[0].clientX - lastMX.current;
    velX.current = deltaX * 0.006;
    rotY.current += velX.current;
    lastMX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    dragging.current = false;
  };

  return (
    <section 
      className="relative min-h-[720px] lg:min-h-[820px] w-full overflow-hidden pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 xl:pt-44 xl:pb-28 flex items-center justify-center select-none"
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes breathingGlow {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(216, 191, 156, 0.2);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 4px 35px rgba(216, 191, 156, 0.55);
            transform: scale(1.02);
          }
        }
        .animate-breathing-glow {
          animation: breathingGlow 4s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      {/* Layer 1: Background Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1c0204] via-[#3a0b12] to-[#0a0002] -z-40 pointer-events-none" />

      {/* Layer 2: Silk Satin Background Image overlay */}
      <div className="absolute inset-0 -z-30 overflow-hidden pointer-events-none">
        <Image 
          src="/images/our_products/the_flame_06.png" 
          alt="Luxury Red Silk Drapery Background" 
          fill 
          sizes="100vw"
          priority
          className="object-cover opacity-45 blur-[0.5px] brightness-[0.52] mix-blend-luminosity"
        />
      </div>

      {/* Layer 2.5: Large Blurry Scented Candle silhouette in the background */}
      {/* Desktop Background Silhouette */}
      <div className="hidden lg:block absolute w-[850px] h-[630px] right-[-12%] top-[12%] opacity-18 blur-[6px] -z-25 overflow-hidden pointer-events-none">
        <Image 
          src="/images/our_products/bg_remove_02.png" 
          alt="Luxury Candle Background Silhouette" 
          fill
          sizes="(max-width: 1024px) 100vw, 850px"
          className="object-contain"
        />
      </div>

      {/* Mobile Background Silhouette */}
      <div className="block lg:hidden absolute w-[360px] h-[480px] left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 opacity-15 blur-[12px] -z-25 overflow-hidden pointer-events-none">
        <Image 
          src="/images/our_products/bg_remove_candle.png" 
          alt="Luxury Candle Mobile Background Silhouette" 
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-contain"
        />
      </div>

      {/* Layer 3: Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)] opacity-70 -z-20 pointer-events-none" />

      {/* Layer 4: Full-Screen background canvas sparks & flares animation */}
      <canvas 
        ref={sparksCanvasRef} 
        className="absolute inset-0 w-full h-full block pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Equal 50/50 split column layout for desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center font-sans">
          
          {/* Left Column: Premium Brand Text Content */}
          <div className="flex flex-col text-left space-y-6 lg:pr-6 w-full animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            
            {/* Top Brand Label */}
            <div className="flex flex-col space-y-1">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-white/50 leading-none">
                BY ATELIER ESSENTIALS
              </span>
              <span className="text-[12px] md:text-[13.5px] font-semibold uppercase tracking-[0.3em] text-[#d8bf9c] mt-0.5 leading-none">
                TWIN FLAME
              </span>
            </div>

            {/* Main Statement */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-[2.35rem] lg:text-[2.6rem] xl:text-[3.1rem] font-bold tracking-tight text-white leading-[1.15] max-w-xl">
              Fragrance That Turns <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#faf8f5] via-[#e2c7a3] to-[#ecd591]">
                Moments Into Memories
              </span>
            </h1>

            {/* Separator line */}
            <div className="w-18 h-[1.5px] bg-gradient-to-r from-[#d8bf9c] to-transparent" />

            {/* Description */}
            <p className="font-sans text-xs md:text-[13.5px] text-white/75 font-light leading-relaxed max-w-md">
              Discover thoughtfully crafted fragrances, candles and gifting pieces designed to bring warmth, character and atmosphere into your everyday spaces.
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                href="#collections"
                className="bg-[#d8bf9c] text-[#741F27] font-sans text-[11px] font-bold uppercase tracking-[0.18em] py-3.5 px-9 rounded-sm transition-all duration-300 hover:bg-[#fffaf3] animate-breathing-glow"
              >
                Shop Collection
              </Link>
              <Link
                href="#gifts"
                className="border border-[#d8bf9c]/40 hover:border-[#d8bf9c] text-white hover:bg-white/5 font-sans text-[11px] font-bold uppercase tracking-[0.18em] py-3.5 px-9 rounded-sm transition-all duration-300 hover:shadow-lg"
              >
                Explore Gifts
              </Link>
            </div>

          </div>

          {/* Right Column: WebGL Three.js Interactive 3D Candle Showcase (Highly Responsive Container) */}
          <div className="flex justify-center items-center relative w-full h-[380px] sm:h-[420px] md:h-[480px] lg:h-[520px] animate-fade-in-up" style={{ animationDelay: "450ms" }}>
            
            {/* Boxed Responsive Container holding the WebGL Canvas */}
            <div className="relative w-full max-w-[500px] h-[360px] sm:h-[400px] md:h-[440px] lg:h-[460px] rounded-3xl overflow-visible">
              
              {/* WebGL Canvas Element */}
              <canvas 
                ref={canvasRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="w-full h-full block cursor-grab active:cursor-grabbing rounded-3xl"
              />

            </div>

          </div>

        </div>
      </div>

      {/* Elegant Star-Badged Drag Instruction centered at the bottom of the section */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[#d8bf9c]/55 font-sans text-[9px] tracking-[0.25em] pointer-events-none uppercase">
        <div className="w-5 h-5 rounded-full border border-[#d8bf9c]/35 flex items-center justify-center text-[8px] pb-0.5">
          ✦
        </div>
        <span>Drag to Spin</span>
      </div>

      {/* Decorative Elegant Bottom Border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#d8bf9c]/35 to-transparent" />
    </section>
  );
}
