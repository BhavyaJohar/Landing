import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export const Input = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<"input">>(
  ({ className, type = "text", ...props }, ref) => (
    <input ref={ref} type={type} className={cn("form-field", className)} {...props} />
  ),
);

Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, ComponentPropsWithoutRef<"textarea">>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn("form-field form-textarea", className)} {...props} />
  ),
);

Textarea.displayName = "Textarea";

