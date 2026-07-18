import React from "react";

interface LogoProps {
  iconClassName?: string;
  textClassName?: string;
  containerClassName?: string;
  showText?: boolean;
  textColor?: string;
}

export function LogoIcon({ className = "w-6 h-6 text-[#005B3F]" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Abstract White Goat (Mbudzi Tshena) / Financial upward trends */}
      <path d="M4 3c2.5 0 4.5 2.5 5 5.5" />
      <path d="M20 3c-2.5 0-4.5 2.5-5 5.5" />
      <path d="M9 8.5L12 20l3-11.5" />
      <path d="M12 8.5v11.5" />
    </svg>
  );
}

export function Logo({ 
  iconClassName = "w-6 h-6 text-[#005B3F]", 
  textClassName = "text-xl font-bold tracking-tight",
  containerClassName = "flex items-center gap-2",
  showText = true,
  textColor = "text-[#111827]"
}: LogoProps) {
  return (
    <div className={containerClassName}>
      <div className="bg-[#B4D330] p-1.5 rounded-lg shadow-sm flex items-center justify-center">
        <LogoIcon className={iconClassName} />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`${textClassName} ${textColor} leading-none`}>Mbudzi Tshena</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-0.5 leading-none">Financial</span>
        </div>
      )}
    </div>
  );
}
