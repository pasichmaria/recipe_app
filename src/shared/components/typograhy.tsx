import type * as React from "react";

interface TypographyProps {
  center?: boolean;
  children: React.ReactNode;
  color?: "primary" | "blue" | "gray" | "warning" | "danger";
  strong?: boolean;
  italic?: boolean;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "body1" | "body2";
  className?: string;
}

export const Typography = ({
  center = false,
  children,
  color = "primary",
  strong = false,
  italic = false,
  variant = "h5",
  className = "",
}: TypographyProps) => {
  const colorClasses: Record<string, string> = {
    primary: "text-gray-200",
    blue: "text-blue-600",
    gray: "text-gray-400",
    warning: "text-amber-500",
    danger: "text-red-500",
  };

  const variantClasses: Record<string, string> = {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    body1: "text-base",
    body2: "text-sm",
  };

  const baseClass = `${colorClasses[color]} ${variantClasses[variant]} 
    ${strong ? "font-semibold" : ""} ${italic ? "italic" : ""} 
    ${center ? "text-center" : ""} ${className}`.trim();

  const ComponentTag: React.ElementType = variant.startsWith("h") ? variant : "p";

  return <ComponentTag className={baseClass}>{children}</ComponentTag>;
};
