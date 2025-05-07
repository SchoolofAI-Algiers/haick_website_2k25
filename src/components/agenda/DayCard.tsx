import { motion } from "framer-motion";
import { ScheduleItem } from "./scheduelItem";

interface DayCardProps {
  day: {
    id: number;
    number: number;
    date: string;
    schedule: Array<{ time: string; activity: string }>;
  };
  isActive: boolean;
  position: number;
  cardWidth: number;
  cardHeight: number;
  initial: string;
  animate: string;
  exit: string;
  variants: any;
  onAnimationComplete?: () => void;
}

export function DayCard({
  day,
  isActive,
  position,
  cardWidth,
  cardHeight,
  initial,
  animate,
  exit,
  variants,
  onAnimationComplete,
}: DayCardProps) {
  return (
    <motion.div
      custom={position}
      initial={initial}
      animate={animate}
      exit={exit}
      variants={variants}
      onAnimationComplete={onAnimationComplete}
      className="absolute top-0 left-0 origin-center"
      style={{
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className={`w-full h-full rounded-t-[170px] overflow-hidden transition-all duration-300 ${
          isActive ? "border-[#f9a76c]" : "border-[#f9d8c0]"
        }`}
        style={{
          borderWidth: isActive ? "4px" : "2px",
          boxShadow: isActive
            ? "0 25px 50px -12px rgba(0,0,0,0.15), 0 0 15px rgba(0,0,0,0.05)"
            : "0 15px 30px -10px rgba(0,0,0,0.1)",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
          backfaceVisibility: "hidden",
          background: "white",
        }}
      >
        <div className="h-full flex flex-col">
          {/* Card header with day info */}
          <div 
            className="text-center pt-8 pb-6 px-6" 
            style={{
              background: isActive 
                ? "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,240,235,0.3) 100%)" 
                : "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,240,235,0.1) 100%)"
            }}
          >
            <div className="inline-block mb-2">
              <div 
                className={`inline-flex items-center justify-center rounded-full mb-2 transition-all ${
                  isActive 
                    ? "bg-[#f9a76c] text-white w-16 h-16" 
                    : "bg-[#f9d8c0] text-gray-700 w-14 h-14"
                }`}
              >
                <span className={`font-bold ${isActive ? "text-2xl" : "text-xl"}`}>
                  {day.number}
                </span>
              </div>
            </div>
            
            <h2 className={`font-bold transition-all ${
              isActive ? "text-3xl text-gray-800" : "text-2xl text-gray-700"
            }`}>
              Day {day.number}
            </h2>
            
            <p className={`transition-all ${
              isActive ? "text-gray-600 text-base" : "text-gray-500 text-sm"
            }`}>
              {day.date}
            </p>
          </div>

          {/* Schedule items */}
          <div className="px-6 pb-6 flex-1 overflow-y-auto scrollbar-none">
            <div className="space-y-3">
              {day.schedule.map((item, idx) => (
                <ScheduleItem
                  key={idx}
                  time={item.time}
                  activity={item.activity}
                  index={idx}
                  isActive={isActive}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}