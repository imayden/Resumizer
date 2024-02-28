import React from 'react';

const TextField = ({
  name,
  value,
  onChange,
  // height = "min:h-10 inline-flex",
  className,
  width = "w-full",
  rounded = "rounded-full",
  padding = "px-4 pt-4 max-md:pt-4 max-sm:pt-1",
  placeholder
}) => {
  const baseStyle = [
    className,
    // height,
    width,
    rounded,
    padding,
    "px-4 pt-4", 
    "max-md:pt-4",
    "max-sm:pt-1",
    "mb-4",
    "text-2xl text-start",
    "text-black dark:text-white",
    "font-medium",
    "bg-white bg-opacity-30 hover:bg-opacity-25",
    "transition-[background-color] duration-300 ease-[ease-out]",
    "tracking-[-0.01em]",
    // "max-md:min-h-[60px]",
    "max-md:text-xl",
    // "max-md:leading-8",
    "overflow-hidden",
    "resize-none"
  ].join(" ");

    // Dynamic adjusting height
    const handleHeightAdjustment = (e) => {
      const textarea = e.target;
      textarea.style.height = 'auto'; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height by content
  
      if (onChange) {
        onChange(e); // If passed the onChange, then keep calling
      }
    };
  

  return (
    <textarea
      className={baseStyle}
      name={name}
      value={value}
      // onChange={onChange}
      onChange={handleHeightAdjustment}
      placeholder={placeholder}
      required
    />
  );
};

export default TextField;
