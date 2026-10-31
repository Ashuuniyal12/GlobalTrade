import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "px-3 py-1.5 text-xs sm:text-sm gap-1.5",
      md: "px-5 py-2.5 text-sm font-semibold gap-2",
      lg: "px-6 py-3.5 text-base font-semibold gap-2.5 shadow-sm",
    };

    const variantStyles = {
      primary:
        "bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500 shadow-sm hover:shadow-md shadow-primary-500/20",
      secondary:
        "bg-navy-900 text-white hover:bg-navy-800 focus-visible:ring-navy-900 shadow-sm",
      outline:
        "border border-slate-300 bg-white text-navy-900 hover:bg-slate-50 hover:border-slate-400 focus-visible:ring-primary-500",
      ghost:
        "text-navy-900 hover:bg-slate-100 hover:text-navy-950 focus-visible:ring-primary-500",
      gold:
        "bg-primary-500 text-white font-bold hover:bg-primary-600 focus-visible:ring-primary-500 shadow-sm hover:shadow-md shadow-primary-500/20",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
