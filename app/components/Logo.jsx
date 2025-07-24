import React from 'react';

const Logo = ({ isDarkMode, className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-3xl", 
    lg: "text-4xl",
    xl: "text-5xl",
  };

  const dotSizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5", 
    xl: "w-3 h-3",
  };

  return (
    <div className={`flex items-baseline ${className}`}>
      <span
        className={`font-bold ${sizeClasses[size]} transition-all duration-300`}
        style={{ 
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
          color: isDarkMode ? "#ffffff" : "#000000",
          letterSpacing: "0.01em",
          fontWeight: "700",
          lineHeight: "1.3"
        }}
      >
        Jamal
      </span>
      <div
        className={`${dotSizes[size]} bg-red-500 rounded-full ml-1 transition-all duration-300`}
        style={{ backgroundColor: "#EF4444" }}
      />
    </div>
  );
};

export default Logo; 