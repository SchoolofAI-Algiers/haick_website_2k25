import React from "react";
import { cn } from "@/lib/utils";

interface BadgeStatProps {
  value: string;
  label: string;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export function BadgeStat({ 
  value, 
  label, 
  className, 
  valueClassName,
  labelClassName 
}: BadgeStatProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className={cn("text-3xl font-bold transition-all duration-300 hover:scale-110", valueClassName)}>
        {value}
      </div>
      <div className={cn("text-xl text-gray-600", labelClassName)}>
        {label}
      </div>
    </div>
  );
}
