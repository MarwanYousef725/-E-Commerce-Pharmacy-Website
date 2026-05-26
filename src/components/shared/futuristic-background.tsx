"use client";

import { motion } from "framer-motion";

export function FuturisticBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute -top-32 -start-24 h-[480px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.55),rgba(20,184,166,0.10),transparent_70%)] blur-2xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -end-28 h-[520px] w-[560px] rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.40),rgba(56,189,248,0.12),transparent_72%)] blur-2xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.22] dark:opacity-[0.18]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.10)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(34,211,238,0.18),transparent_65%)]"
          animate={{ opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Scanlines */}
      <motion.div
        className="absolute inset-0 scanline"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

