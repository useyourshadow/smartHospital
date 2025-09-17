import React from "react";

const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      // Changed to a purple button with white text
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[#6A5AF9] text-white hover:bg-[#5848d8] h-10 px-4 py-2 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };