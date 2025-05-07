import { ReactNode } from "react";
import { motion } from "framer-motion";

interface NavigationButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
  position: string;
  icon: ReactNode;
}

export function NavigationButton({
  direction,
  onClick,
  disabled,
  position,
  icon,
}: NavigationButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#26a0b9] shadow-md z-40 transition-all ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-[#f0f9fb] hover:shadow-lg"
      }`}
      style={{
        [direction === "prev" ? "left" : "right"]: position,
        border: "4px solid #26a0b9",
      }}
      aria-label={direction === "prev" ? "Previous day" : "Next day"}
    >
      {icon}
    </motion.button>
  );
}