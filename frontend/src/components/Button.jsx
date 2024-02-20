import React from 'react';

const Button = ({ children, onClick, variant = "primary" }) => {
  // Basic button styling
  const baseStyle = [
    "min-h-[96px]",
    "w-full",
    "px-8 py-6",
    "transition-[background-color] duration-300 ease-[ease-out]",
    "text-center",
    "font-medium",
    "rounded-[99px]",
    "tracking-[-0.01em]",
    // Responsive adjustments
    "max-md:min-h-[80px]",
    "max-md:text-2xl",
    "max-md:leading-8",
  ];

  // 根Primary button style
  const primaryStyle = [
    "text-white",
    "bg-[#4F0ED1] hover:bg-[#6D49FE]",
    "mt-0 mb-0",
    "text-2xl leading-8",
  ].join(" ");

  // Secondary button style
  const secondaryStyle = [
    "text-[#4F0ED1] hover:text-white dark:text-[#7A7497]",
    "bg-[#6D49FE] bg-opacity-0 hover:bg-[#6D49FE]",
    "ring-2 ring-[#4F0ED1] dark:ring-[#7A7497] hover:ring-0",
    "text-[28px] leading-[48px]",
  ].join(" ");

  // Combine basic and specific styles
  const buttonStyle = [
    ...baseStyle,
    variant === "primary" ? primaryStyle : secondaryStyle,
  ].join(" ");

  return (
    <button className={buttonStyle} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
