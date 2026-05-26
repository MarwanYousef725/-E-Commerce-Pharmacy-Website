"use client";

import { motion } from "framer-motion";
import { Pill, Stethoscope, HeartPulse, Syringe, Cross, Sparkles } from "lucide-react";

const elements = [
  { Icon: Pill, x: "8%", y: "15%", delay: 0, size: 28 },
  { Icon: Stethoscope, x: "88%", y: "22%", delay: 0.5, size: 32 },
  { Icon: HeartPulse, x: "12%", y: "65%", delay: 1, size: 26 },
  { Icon: Syringe, x: "92%", y: "58%", delay: 1.5, size: 24 },
  { Icon: Cross, x: "75%", y: "78%", delay: 2, size: 22 },
  { Icon: Sparkles, x: "25%", y: "38%", delay: 0.8, size: 20 },
  { Icon: Pill, x: "55%", y: "8%", delay: 1.2, size: 18 },
  { Icon: Cross, x: "42%", y: "88%", delay: 1.8, size: 24 },
];

export function FloatingPharmacyElements() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {elements.map(({ Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute text-emerald-500/25 dark:text-emerald-400/20"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0, 15, 0],
            x: [0, 10, -8, 5, 0],
            rotate: [0, 15, -10, 8, 0],
            opacity: [0.3, 0.7, 0.4, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </div>
  );
}
