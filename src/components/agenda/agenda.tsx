"use client"
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { agendaData } from "@/constants/agenda";
import { DayCard } from "./DayCard";
import { useCarousel } from "./useCarousel";
import { NavigationButton } from "./navigationButton";

export default function AgendaComponent() {
  const { days } = agendaData;
  const [windowWidth, setWindowWidth] = useState(0);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    currentIndex,
    direction,
    isAnimating,
    visibleDayIndices,
    handlePrevDay,
    handleNextDay,
    handleAnimationComplete,
    cardVariants
  } = useCarousel(days);

  // Calculate card width and spacing dynamically
  const cardWidth = Math.min(340, windowWidth * 0.85); // Card width scales with screen, max 340px
  const cardHeight = 520; // Fixed height for all cards

  // Calculate spacing between cards as a percentage of screen width
  const spacingMultiplier = windowWidth < 640 ? 0.6 : windowWidth < 1024 ? 1.1 : 1.6;
  
  // Calculate button position (middle of the space between cards)
  const buttonPosition = windowWidth < 640 ? "12px" : windowWidth < 1024 ? "18%" : "25%";

  return (
    <div className="w-full min-h-screen py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-[#26a0b9] tracking-tight">
          Agenda
        </h1>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 px-4">
          Our event spans across three exciting days packed with activities, workshops, and opportunities to connect and create.
        </p>

        <div className="relative flex justify-center items-center h-[580px] max-w-6xl mx-auto">
          {/* Card carousel with smooth animations */}
          <div
            className="relative"
            style={{ width: `${cardWidth}px`, height: `${cardHeight}px` }}
          >
            <AnimatePresence initial={false} mode="popLayout">
              {visibleDayIndices(spacingMultiplier).map(({ index, position }) => {
                let initial, animate, exit;

                if (position === 0) {
                  animate = "center";
                  initial = direction > 0 ? "enterRight" : direction < 0 ? "enterLeft" : "center";
                  exit = direction > 0 ? "exitLeft" : "exitRight";
                } else if (position === -1) {
                  animate = "left";
                  initial = direction < 0 ? "enterLeft" : "left";
                  exit = direction < 0 ? "exitLeft" : "left";
                } else if (position === 1) {
                  animate = "right";
                  initial = direction > 0 ? "enterRight" : "right";
                  exit = direction > 0 ? "exitRight" : "right";
                }

                return (
                  <DayCard
                    key={days[index].id}
                    day={days[index]}
                    isActive={position === 0}
                    position={position!}
                    cardWidth={cardWidth}
                    cardHeight={cardHeight}
                    initial={initial!}
                    animate={animate!}
                    exit={exit!}
                    variants={cardVariants(spacingMultiplier)}
                    onAnimationComplete={position === 0 ? handleAnimationComplete : undefined}
                  />
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <NavigationButton
            direction="prev"
            onClick={handlePrevDay}
            disabled={isAnimating}
            position={buttonPosition}
            icon={<ArrowLeft className="w-6 h-6" strokeWidth={3} />}
          />

          <NavigationButton
            direction="next"
            onClick={handleNextDay}
            disabled={isAnimating}
            position={buttonPosition}
            icon={<ArrowRight className="w-6 h-6" strokeWidth={3} />}
          />
        </div>
        
        {/* Simple day indicator dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {days.map((day, idx) => (
            <div 
              key={day.id} 
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? "bg-[#f9a76c] scale-125" 
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}