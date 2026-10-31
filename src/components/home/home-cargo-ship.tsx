"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Ship } from "lucide-react";

export function HomeCargoShip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLDivElement>(null);
  const spriteRef = useRef<HTMLDivElement>(null);
  const wakeRef = useRef<HTMLDivElement>(null);

  // Visibility state: true only when in main content (between Hero and Footer)
  const [isVisible, setIsVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1200);

  // Track viewport dimensions and scroll position to hide in Hero and Footer
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const checkHeroAndFooter = () => {
      // Find Hero and Footer elements
      const heroElement = document.getElementById("home-hero") || document.querySelector("section");
      const footerElement = document.getElementById("site-footer") || document.querySelector("footer");

      const windowHeight = window.innerHeight;

      let inHero = false;
      let inFooter = false;

      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect();
        // User is viewing the Hero if hero occupies the majority of the screen
        if (heroRect.bottom > windowHeight * 0.45) {
          inHero = true;
        }
      } else if (window.scrollY < 350) {
        inHero = true;
      }

      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        // If top of footer has scrolled into viewport
        if (footerRect.top < windowHeight * 0.85) {
          inFooter = true;
        }
      }

      // Show vessel only across whole home page between Hero and Footer
      setIsVisible(!inHero && !inFooter);
    };

    checkHeroAndFooter();
    window.addEventListener("scroll", checkHeroAndFooter, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", checkHeroAndFooter);
    };
  }, []);

  // Continuous 60fps autonomous maritime navigation loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    let lastScroll = window.scrollY;

    const isMobile = screenWidth < 640;
    const shipWidth = isMobile ? 180 : 280;

    const minX = 16;
    const maxX = Math.max(minX + 80, screenWidth - shipWidth - 20);

    // Dynamic vessel physics state
    const state = {
      x: Math.min(maxX - 40, Math.max(minX + 40, screenWidth * 0.5)),
      direction: -1, // -1 = sailing left, 1 = sailing right
      targetX: minX + Math.random() * (maxX * 0.4),
      speed: 55, // Base cruise speed (px/s)
      waveAngle: 0,
      roll: 0,
      scrollImpulse: 0,
      verticalDrift: 0,
      targetVerticalDrift: 0,
      lastTurnTime: performance.now(),
    };

    const loop = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.08);
      lastTime = currentTime;

      // 1. Measure scroll velocity for dynamic hydro-boost
      const currentScroll = window.scrollY;
      const scrollDelta = currentScroll - lastScroll;
      lastScroll = currentScroll;
      const scrollSpeed = Math.abs(scrollDelta);

      // Scroll speed adds hydro-surge acceleration
      state.scrollImpulse = state.scrollImpulse * 0.90 + scrollSpeed * 0.10;
      const effectiveSpeed = state.speed + Math.min(state.scrollImpulse * 1.6, 130);

      // Random rudder maneuver triggered organically while actively scrolling
      const timeSinceTurn = currentTime - state.lastTurnTime;
      if (scrollSpeed > 25 && timeSinceTurn > 3500 && Math.random() < 0.03) {
        state.direction = state.direction === 1 ? -1 : 1;
        state.lastTurnTime = currentTime;
        state.targetX =
          state.direction === 1
            ? maxX - Math.random() * (maxX * 0.4)
            : minX + Math.random() * (maxX * 0.4);
        state.speed = 48 + Math.random() * 32;
        state.targetVerticalDrift = (Math.random() - 0.5) * 14;
      }

      // 2. Horizontal traversal
      state.x += state.direction * effectiveSpeed * dt;

      // Smooth vertical water drift
      state.verticalDrift += (state.targetVerticalDrift - state.verticalDrift) * 0.04;

      // 3. Waypoint & boundary collision -> Smooth turn & reversal
      if (state.direction === 1 && (state.x >= state.targetX || state.x >= maxX)) {
        // Reached eastern waypoint -> Turn west (left)
        state.direction = -1;
        state.lastTurnTime = currentTime;
        state.targetX = minX + Math.random() * (maxX * 0.45);
        state.speed = 48 + Math.random() * 28;
        state.targetVerticalDrift = (Math.random() - 0.5) * 14;
      } else if (state.direction === -1 && (state.x <= state.targetX || state.x <= minX)) {
        // Reached western waypoint -> Turn east (right)
        state.direction = 1;
        state.lastTurnTime = currentTime;
        state.targetX = maxX - Math.random() * (maxX * 0.45);
        state.speed = 48 + Math.random() * 28;
        state.targetVerticalDrift = (Math.random() - 0.5) * 14;
      }

      // Strict clamping ensures vessel is ALWAYS 100% visible inside the screen
      state.x = Math.max(minX, Math.min(maxX, state.x));

      // 4. Hydrodynamic wave physics (ocean heave & gentle rolling)
      state.waveAngle += dt * 2.2;
      const waveHeave = Math.sin(state.waveAngle) * 4.5 + state.verticalDrift;
      const waveRoll = Math.cos(state.waveAngle * 0.8) * 1.3 + scrollDelta * 0.025;

      // 5. Direct 60fps DOM transform updates
      if (shipRef.current) {
        shipRef.current.style.transform = `translate3d(${state.x}px, ${waveHeave}px, 0)`;
      }

      if (spriteRef.current) {
        // cargo-ship.png bow is on the left.
        // Sailing left (direction === -1) -> scaleX = 1
        // Sailing right (direction === 1) -> scaleX = -1
        const scaleX = state.direction === -1 ? 1 : -1;
        spriteRef.current.style.transform = `scaleX(${scaleX}) rotate(${waveRoll * scaleX}deg)`;
      }

      // Foaming wake expansion with speed/scrolling
      if (wakeRef.current) {
        const wakeIntensity = Math.min(1, 0.75 + (effectiveSpeed / 180) * 0.25);
        wakeRef.current.style.opacity = `${wakeIntensity}`;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [screenWidth]);

  return (
    <div
      ref={containerRef}
      className={`fixed bottom-4 sm:bottom-6 left-0 right-0 h-32 sm:h-40 pointer-events-none z-40 transition-all duration-700 select-none overflow-visible ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
      }`}
      aria-hidden="true"
    >
      {/* Moving cargo vessel */}
      <div
        ref={shipRef}
        className="absolute bottom-2 left-0 will-change-transform flex items-center"
        style={{ transform: "translate3d(100px, 0px, 0)" }}
      >
        <div className="relative">
          {/* Flipped Ship Sprite (Bow leads direction of travel) */}
          <div ref={spriteRef} className="relative will-change-transform">
            <Image
              src="/images/cargo-ship.png"
              alt="Autonomous Cargo Vessel"
              width={400}
              height={212}
              priority
              className="w-44 sm:w-60 md:w-72 lg:w-80 h-auto drop-shadow-[0_18px_26px_rgba(10,25,47,0.26)] select-none pointer-events-none"
            />

            {/* Foaming ocean wake trailing behind the stern */}
            <div
              ref={wakeRef}
              className="absolute left-[78%] bottom-2 sm:bottom-3 flex flex-col gap-1 pointer-events-none pl-1 transition-opacity duration-300"
            >
              <div className="w-28 sm:w-56 h-[3px] bg-gradient-to-r from-cyan-300/90 via-sky-200/50 to-transparent blur-[1px] rounded-full" />
              <div className="w-20 sm:w-40 h-[2px] bg-gradient-to-r from-white/95 via-sky-100/60 to-transparent blur-[1px] rounded-full translate-y-1" />
            </div>
          </div>

          {/* Centered Telemetry Badge (Always stays upright, crisp, and never reversed) */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-navy-950/95 text-[10px] font-mono text-white/90 border border-white/15 shadow-xl whitespace-nowrap select-none backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <Ship className="w-2.5 h-2.5 text-teal-400 inline" />
            <span className="text-teal-300 font-bold">19.2 KTS · OCEAN CARRIER</span>
          </div>
        </div>
      </div>
    </div>
  );
}
