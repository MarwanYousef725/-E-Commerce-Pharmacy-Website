"use client";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "form";
  variant?: "up" | "left" | "right" | "scale" | "fade";
  delay?: number;
  id?: string;
};

const variantClass: Record<NonNullable<ScrollRevealProps["variant"]>, string> = {
  up: "reveal-up",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  fade: "reveal-fade",
};

export function ScrollReveal({
  children,
  className,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  id,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ once: true });

  return (
    <Tag
      // @ts-expect-error polymorphic ref
      ref={ref}
      id={id}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={cn(variantClass[variant], isVisible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}
