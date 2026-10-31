"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ShieldCheck, Compass } from "lucide-react";

export function SiteLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING CORRIDORS...");

  useEffect(() => {
    // Check if user already saw the intro loader in this browser session
    const hasSeenLoader = sessionStorage.getItem("apex_intro_shown");
    if (hasSeenLoader) {
      setIsLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("apex_intro_shown", "true");
          }, 400);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next > 30 && next < 65) {
          setStatusText("AUDITING PORT PROTOCOLS & HS CODES...");
        } else if (next >= 65 && next < 95) {
          setStatusText("CONNECTING GLOBAL MARITIME LANES...");
        } else if (next >= 95) {
          setStatusText("TRADE DESK READY");
        }
        return next > 100 ? 100 : next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  // 5 vertical columns for the 3D folding curtain reveal seen in the reel
  const columns = [0, 1, 2, 3, 4];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="site-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden pointer-events-auto bg-navy-950"
          style={{ perspective: "1200px" }}
        >
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-radial from-teal-900/40 via-navy-950 to-navy-950 pointer-events-none" />

          {/* 3D Folding Columns / Accordion Panels Container */}
          <div className="absolute inset-0 flex w-full h-full">
            {columns.map((colIndex) => {
              // Staggered fold delay & direction
              const isEven = colIndex % 2 === 0;
              return (
                <motion.div
                  key={colIndex}
                  className="relative h-full flex-1 border-r border-navy-800/40"
                  style={{
                    backgroundColor: colIndex === 2 ? "#102A43" : "#0B1B2B",
                    transformOrigin: isEven ? "left center" : "right center",
                  }}
                  initial={{ scaleY: 1, rotateY: 0 }}
                  exit={{
                    scaleY: 0,
                    rotateY: isEven ? 45 : -45,
                    transition: {
                      duration: 0.8,
                      delay: colIndex * 0.08,
                      ease: [0.85, 0, 0.15, 1],
                    },
                  }}
                >
                  {/* Subtle vertical accent lines */}
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.2)_50%,transparent)]" />
                </motion.div>
              );
            })}
          </div>

          {/* Center Card - 3D Accordion Branding Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, rotateX: 15 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{
              scale: 1.1,
              opacity: 0,
              y: -50,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 w-full max-w-md mx-4 p-8 rounded-2xl bg-gradient-to-b from-navy-900/90 to-navy-950/95 border border-white/10 shadow-2xl backdrop-blur-xl text-center"
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 35px rgba(255, 105, 19, 0.25)",
            }}
          >
            {/* Top Logo Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary-600 to-primary-500 border border-primary-400/40 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary-500/25">
              <Globe className="w-8 h-8 text-white animate-spin-slow" />
            </div>

            {/* Brand Title */}
            <h2 className="text-2xl font-black tracking-wider text-white uppercase">
              APEX <span className="text-primary-400 font-semibold">GLOBAL</span>
            </h2>
            <p className="text-[11px] font-mono tracking-widest uppercase text-slate-400 mt-1">
              Cross-Border Trade & Logistics Coordination
            </p>

            {/* Progress Bar & Percentage */}
            <div className="mt-8">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-primary-300 text-[11px] tracking-wide">
                  {statusText}
                </span>
                <span className="text-primary-400 font-bold">{progress}%</span>
              </div>

              <div className="w-full h-1.5 bg-navy-800 rounded-full overflow-hidden p-0.5 border border-navy-700">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-600 via-primary-500 to-primary-300 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
            </div>

            {/* Bottom verified tags */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-4 text-[10px] text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                VERIFIED INCOTERMS
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Compass className="w-3 h-3 text-teal-400" />
                GLOBAL HUBS
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
