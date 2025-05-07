"use client"
import { useState } from "react";

export function useCarousel(days: any[]) {
  const [[currentIndex, direction], setPage] = useState([1, 0]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate visible day indices (prev, current, next)
  const visibleDayIndices = (spacingMultiplier: number) => {
    return days
      .map((_, index) => {
        return {
          index,
          position:
            index === currentIndex
              ? 0
              : index === getPrevIndex()
              ? -1
              : index === getNextIndex()
              ? 1
              : null,
        };
      })
      .filter((item) => item.position !== null);
  };

  const getPrevIndex = () => (currentIndex - 1 + days.length) % days.length;
  const getNextIndex = () => (currentIndex + 1) % days.length;

  // Navigation handlers
  const handlePrevDay = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPage([getPrevIndex(), -1]);
  };

  const handleNextDay = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPage([getNextIndex(), 1]);
  };

  // Animation completion handler
  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  // Variants for animations with responsive spacing
  const cardVariants = (spacingMultiplier: number) => {
    // Calculate spacing values
    const spacing = `${spacingMultiplier * 150}%`;
    const spacingForEntryExit = `${spacingMultiplier * 300}%`;
    
    return {
      center: {
        x: 0,
        opacity: 1,
        zIndex: 30,
        rotateY: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.5,
        },
      },
      left: {
        x: `-${spacing}`,
        opacity: 0.4,
        zIndex: 10,
        rotateY: 10,
        scale: 0.95,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.5,
        },
      },
      right: {
        x: spacing,
        opacity: 0.4,
        zIndex: 10,
        rotateY: -10,
        scale: 0.95,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.5,
        },
      },
      enterLeft: {
        x: `-${spacingForEntryExit}`,
        opacity: 0,
        zIndex: 0,
        rotateY: 15,
        scale: 0.9,
        transition: {
          duration: 0.3,
        },
      },
      enterRight: {
        x: spacingForEntryExit,
        opacity: 0,
        zIndex: 0,
        rotateY: -15,
        scale: 0.9,
        transition: {
          duration: 0.3,
        },
      },
      exitLeft: {
        x: `-${spacingForEntryExit}`,
        opacity: 0,
        zIndex: 0,
        rotateY: 15,
        scale: 0.9,
        transition: {
          duration: 0.5,
        },
      },
      exitRight: {
        x: spacingForEntryExit,
        opacity: 0,
        zIndex: 0,
        rotateY: -15,
        scale: 0.9,
        transition: {
          duration: 0.5,
        },
      },
    };
  };

  return {
    currentIndex,
    direction,
    isAnimating,
    visibleDayIndices,
    handlePrevDay,
    handleNextDay,
    handleAnimationComplete,
    cardVariants
  };
}