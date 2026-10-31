import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "teal" | "gold" | "outline" | "navy";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full transition-colors";

  const variants = {
    default: "bg-slate-100 text-slate-800 border border-slate-200",
    teal: "bg-teal-50 text-teal-700 border border-teal-200/60",
    gold: "bg-gold-50 text-gold-800 border border-gold-200",
    navy: "bg-navy-50 text-navy-800 border border-navy-200",
    outline: "border border-slate-300 text-slate-600 bg-transparent",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
