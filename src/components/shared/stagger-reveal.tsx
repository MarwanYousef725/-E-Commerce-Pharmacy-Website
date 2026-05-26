"use client";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type StaggerRevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
};

export function StaggerReveal({
  children,
  className,
  as: Tag = "div",
}: StaggerRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ once: true, rootMargin: "-40px" });

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn("stagger-children", isVisible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}
