import { type VariantProps, cva } from "class-variance-authority";
import React from "react";
import { Loading } from "./layout";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  fullWidth?: boolean;
  asChild?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center font-light rounded-lg shadow-md transition focus:outline-none focus:ring-2",
  {
    variants: {
      variant: {
        gray: "border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black transition",
        primary:
          "bg-blue-500 border border-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
        secondary:
          "bg-amber-500 border border-amber-600 text-white hover:bg-amber-600 focus:ring-amber-600",
        transparent: "bg-transparent hover:bg-zinc-800 text-gray-300 focus:ring-amber-400",
        danger: "bg-red-500 border border-red-500 text-white hover:bg-red-400 focus:ring-red-300",
      },
      size: {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      fullWidth = false,
      asChild = false,
      loading = false,
      variant,
      size,
      icon,
      iconPosition = "left",
      className,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? "span" : "button";
    const mainClassName = [
      buttonVariants({ variant, size }),
      fullWidth && "w-full",
      !children && "p-2 flex items-center justify-center",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Component ref={ref} className={mainClassName} {...props}>
        {icon && !children ? (
          <span className="flex items-center justify-center w-full">{icon}</span>
        ) : (
          <>
            {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
            {loading && <Loading />}
            <span>{children}</span>
            {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
          </>
        )}
      </Component>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
