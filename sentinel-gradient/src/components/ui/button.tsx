'use client';

import Link from "next/link";
import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { trackEvent } from "@/lib/analytics";

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
  eventName?: string;
  eventParams?: Record<string, unknown>;
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
  eventName,
  eventParams,
  onClick,
  ...rest
}: ButtonProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (eventName) {
      trackEvent(eventName, eventParams);
    }
    onClick?.(event);
  };

  return (
    <button
      type={type}
      className={cn(variantClassMap[variant], className)}
      disabled={disabled || variant === "disabled"}
      aria-disabled={disabled || variant === "disabled" ? "true" : undefined}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  className,
  eventName,
  eventParams,
  ...props
}: ButtonLinkProps) {
  const isDisabled = variant === "disabled";
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isDisabled) {
      event.preventDefault();
      return;
    }
    if (eventName) {
      trackEvent(eventName, eventParams);
    }
    props.onClick?.(event);
  };

  return (
    <Link
      aria-disabled={isDisabled ? "true" : undefined}
      tabIndex={isDisabled ? -1 : undefined}
      className={cn(variantClassMap[variant], className, isDisabled && "pointer-events-none")}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
