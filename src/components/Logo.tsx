import React from "react";

const spicaLogo = "/logo.png";

interface LogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({
  className = "",
  size = "md",
}: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={spicaLogo}
        alt="Spica Lighting"
        className={
          size === "xl"
            ? "h-32 w-auto"
            : size === "lg"
            ? "h-28 w-auto"
            : size === "sm"
            ? "h-12 w-auto"
            : "h-24 w-auto"
        }
      />
    </div>
  );
}