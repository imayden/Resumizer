import React from 'react';

const InputField = ({ name, value, onChange, height = "min-h-[96px]", className, rounded = "rounded-full", placeholder }) => {
  const baseStyle = [
    // Input specific styling
    "w-full px-4 py-4",
    className,
    height,
    "mb-4",
    "text-2xl text-center",
    "text-black dark:text-white",
    "font-medium",
    "bg-white bg-opacity-30 hover:bg-opacity-25",
    "transition-[background-color] duration-300 ease-[ease-out]",
    "tracking-[-0.01em]",
    rounded,
    // Responsive adjustments
    "max-md:min-h-[60px]",
    "max-md:text-xl",
    "max-md:leading-8",
  ].join(" ");

  return (
    <input
      className={baseStyle}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  );
};

export default InputField;
