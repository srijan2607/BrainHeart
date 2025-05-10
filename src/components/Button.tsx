
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "tech" | "heart";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

  const variantStyles = {
    primary: "bg-primary text-primary-foreground shadow hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-secondary dark:text-secondary-foreground",
    outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground dark:border-gray-700 dark:hover:bg-gray-800",
    ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-gray-800 dark:text-gray-200",
    tech: "bg-tech text-white shadow hover:bg-tech/90",
    heart: "bg-heart text-white shadow hover:bg-heart/90"
  };

  const sizeStyles = {
    sm: "h-9 px-3 text-xs",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8 text-base"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
