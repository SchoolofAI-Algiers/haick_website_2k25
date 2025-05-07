"use client";
import React, { useCallback, useEffect, useState } from "react";

type Ripple = {
  id: number;
  left: number;
  top: number;
};

export default function WaterEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [lastRippleTime, setLastRippleTime] = useState(0);

  const addRipple = useCallback(
    (x: number, y: number) => {
      const now = Date.now();
      if (now - lastRippleTime < 100) return;

      const newRipple = {
        id: now,
        left: x,
        top: y,
      };

      setRipples((prevRipples) => [...prevRipples.slice(-5), newRipple]);
      setLastRippleTime(now);

      setTimeout(() => {
        setRipples((prevRipples) =>
          prevRipples.filter((ripple) => ripple.id !== newRipple.id)
        );
      }, 2000);
    },
    [lastRippleTime]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      // Use document coordinates instead of relative to the element
      const x = e.clientX;
      const y = e.clientY;
      addRipple(x, y);
    },
    [addRipple]
  );

  useEffect(() => {
    // Add a global event listener to catch all mouse movements
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      addRipple(x, y);
    };

    // Throttle global mouse move events
    let timeout: NodeJS.Timeout | null = null;
    const throttledGlobalMouseMove = (e: MouseEvent) => {
      if (!timeout) {
        timeout = setTimeout(() => {
          handleGlobalMouseMove(e);
          timeout = null;
        }, 100);
      }
    };

    document.addEventListener("mousemove", throttledGlobalMouseMove);

    const interval = setInterval(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * (window.innerHeight * 0.8);
      addRipple(x, y);
    }, 4000);

    return () => {
      document.removeEventListener("mousemove", throttledGlobalMouseMove);
      clearInterval(interval);
    };
  }, [addRipple]);

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ 
        width: "100%", 
        height: "100%", 
        position: "absolute",
        overflow: "hidden",
        background: "rgba(255, 255, 255, 0.9)",
        zIndex: 0,
      }}
    >
      {/* Background pattern from hero_bg.png */}
      <div className="hidden lg:block pattern-bg" style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('/hero_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.7,
      }} />
      
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ripple"
          style={{
            position: "absolute",
            left: ripple.left,
            top: ripple.top,
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            animation: "ripple-effect 2s ease-out forwards",
            zIndex: 1,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes ripple-effect {
          0% {
            box-shadow: 0 0 0 0 rgba(84, 178, 200, 0.3),
                       0 0 0 10px rgba(84, 178, 200, 0.3),
                       0 0 0 20px rgba(84, 178, 200, 0.3);
            opacity: 1;
          }
          100% {
            box-shadow: 0 0 0 10px rgba(84, 178, 200, 0.2),
                       0 0 0 40px rgba(84, 178, 200, 0.1),
                       0 0 0 70px rgba(84, 178, 200, 0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}