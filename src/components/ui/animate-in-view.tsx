"use client";
import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type AnimationDirection = "up" | "down" | "left" | "right" | "none";
type AnimationType = "fade" | "scale" | "slide" | "fade-slide";

interface AnimateInViewProps {
  children: ReactNode;
  animation?: AnimationType;
  direction?: AnimationDirection;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
  distance?: number;
}

export function AnimateInView({
  children,
  animation = "fade",
  direction = "up",
  className = "",
  delay = 0,
  duration = 1000,
  threshold = 0.1,
  triggerOnce = true,
  distance = 20,
}: AnimateInViewProps) {
  const [ref, isInView] = useInView({
    threshold,
    triggerOnce,
  });

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration}`;
    const delayClass = delay > 0 ? `delay-${delay}` : "";

    // Initial and animate states
    let initialState = "opacity-0";
    let animateState = "opacity-100";

    // Add translation based on direction
    if (animation.includes("slide") || direction !== "none") {
      const translateMap = {
        up: { initial: `translate-y-[${distance}px]`, animate: "translate-y-0" },
        down: { initial: `translate-y-[-${distance}px]`, animate: "translate-y-0" },
        left: { initial: `translate-x-[${distance}px]`, animate: "translate-x-0" },
        right: { initial: `translate-x-[-${distance}px]`, animate: "translate-x-0" },
        none: { initial: "", animate: "" },
      };
      
      initialState += ` ${translateMap[direction].initial}`;
      animateState += ` ${translateMap[direction].animate}`;
    }

    // Add scale if needed
    if (animation === "scale") {
      initialState = "opacity-0 scale-95";
      animateState = "opacity-100 scale-100";
    }

    return `${baseClasses} ${delayClass} ${isInView ? animateState : initialState}`;
  };

  return (
    <div ref={ref} className={cn(getAnimationClasses(), className)}>
      {children}
    </div>
  );
}
