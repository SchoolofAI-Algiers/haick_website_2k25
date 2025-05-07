import { motion } from "framer-motion";

interface ScheduleItemProps {
  time: string;
  activity: string;
  index: number;
  isActive: boolean;
}

export function ScheduleItem({ time, activity, index, isActive }: ScheduleItemProps) {
  const isKeyActivity = 
    activity.includes("Ceremony") || 
    activity.includes("Start") || 
    activity.includes("Submissions");
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className={`flex items-start transition-all ${
        isActive ? "hover:bg-gray-50 rounded-lg -mx-2 px-2 py-1" : ""
      }`}
    >
      {/* Time and activity */}
      <div className="flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4">
          <span 
            className={`font-medium rounded-full px-2.5 py-1 text-xs transition-all ${
              isActive ? "bg-[#cde7ee] bg-opacity-20 text-[#26a0b9]" : "text-[#a8d5e2]"
            }`}
            style={{ minWidth: "90px" }}
          >
            {time}
          </span>
          
          <span 
            className={`flex-1 transition-all ${
              isKeyActivity 
                ? "font-medium text-gray-800" 
                : isActive 
                  ? "text-gray-700" 
                  : "text-gray-600"
            }`}
          >
            {activity}
          </span>
        </div>
        
        {/* Activity indicator bar */}
        <div className="w-full h-0.5 mt-2 rounded-full overflow-hidden bg-gray-100">
          <div 
            className={`h-full rounded-full transition-all duration-500 ${
              isActive ? "w-full opacity-70" : "w-[30%] opacity-30"
            }`}
            style={{ 
              backgroundColor: isKeyActivity ? "#f9a76c" : "#a8d5e2"
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}