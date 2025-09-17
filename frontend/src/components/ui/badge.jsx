import React from "react";

const Badge = React.forwardRef(({ className, variant, ...props }, ref) => {
  // Your getStatusBadge function applies specific colors via className,
  // so this component just needs to be a basic styled container.
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export { Badge };