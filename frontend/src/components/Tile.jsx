import React from 'react';

// props includes children, className, and any extra propp, like onClick...
const Tile = ({ children,  padding = "px-12 py-10 max-md:p-8", items = "start", height, className, ...props }) => {
  // Basic Styles
  const baseStyle = [
    // layout styling
    padding,
    className,
    items,
    "flex w-full",
    "flex-col",
    "gap-x-8 gap-y-8",
    "rounded-3xl",
    "max-w-none",
    "overflow-hidden",
    // background styling
    "bg-opacity-40",
    "backdrop-blur-3xl",
    "border-white",
    "border-[1px]",
    "border-opacity-5",
    "bg-white",
    // layout syling for dark mode
    "dark:bg-opacity-40",
    "dark:backdrop-blur-3xl",
    "dark:border-black",
    "dark:border-[1px]",
    "dark:border-opacity-5",
    "dark:bg-black"
  ].join(" ");

  // Combine basic styles with the styles props from the parent components
  const tileClassName = `${className} ${baseStyle}`;

  return (
    <div className={tileClassName} {...props}>
      {children}
    </div>
  );
};

export default Tile;
