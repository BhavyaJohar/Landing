import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "light" | "disabled";

const variantClassMap: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  light: "btn-light-azure",
  disabled: "btn-disabled",
};

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonProps = BaseProps & ComponentPropsWithoutRef<"button">;

type ButtonLinkProps = BaseProps &
  ComponentPropsWithoutRef<typeof Link> & {
    href: string;
  };

export function Button({
  children,
  variant = "primary",
  className,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(variantClassMap[variant], className)}
      disabled={disabled || variant === "disabled"}
      aria-disabled={disabled || variant === "disabled" ? "true" : undefined}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  const isDisabled = variant === "disabled";
  return (
    <Link
      aria-disabled={isDisabled ? "true" : undefined}
      tabIndex={isDisabled ? -1 : undefined}
      className={cn(variantClassMap[variant], className, isDisabled && "pointer-events-none")}
      {...props}
    >
      {children}
    </Link>
  );
}
