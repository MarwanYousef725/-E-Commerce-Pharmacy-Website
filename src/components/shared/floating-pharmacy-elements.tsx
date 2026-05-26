import { Pill, Stethoscope, Cross, HeartPulse, Syringe, Activity, Bandage } from "lucide-react";

const elements = [
  { Icon: Pill, x: "6%", y: "12%", delay: "0s", size: 22 },
  { Icon: Stethoscope, x: "92%", y: "18%", delay: "1.2s", size: 24 },
  { Icon: Cross, x: "10%", y: "68%", delay: "0.6s", size: 20 },
  { Icon: HeartPulse, x: "82%", y: "62%", delay: "1.8s", size: 20 },
  { Icon: Syringe, x: "46%", y: "6%", delay: "2.4s", size: 18 },
  { Icon: Activity, x: "72%", y: "38%", delay: "0.3s", size: 19 },
  { Icon: Bandage, x: "22%", y: "42%", delay: "1.5s", size: 18 },
  { Icon: Pill, x: "58%", y: "78%", delay: "2.1s", size: 16 },
];

export function FloatingPharmacyElements() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {elements.map(({ Icon, x, y, delay, size }, i) => (
        <div
          key={i}
          className="float-icon absolute text-emerald-500/30 dark:text-emerald-400/20"
          style={{ left: x, top: y, animationDelay: delay }}
        >
          <Icon size={size} />
        </div>
      ))}
    </div>
  );
}
