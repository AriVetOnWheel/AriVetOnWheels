import React from "react";

export default function Logo({ className = "", variant = "default" }) {
  const sizes = {
    default: "h-16 md:h-20",
    compact: "h-14",
    large: "h-24",
  };
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/assets/logo.png"
        alt="Ari Vet On Wheels"
        className={`${sizes[variant] || sizes.default} w-auto object-contain`}
        draggable={false}
      />
    </div>
  );
}
