"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logoMark from "@/app/Logo.svg";
import { cn } from "@/lib/cn";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/contracts", label: "Contracts" },
  { href: "/contact", label: "Contact" },
];

type HeaderProps = {
  variant?: "default" | "frosted";
};

export function Header({ variant = "default" }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const containerClasses =
    variant === "frosted"
      ? "header-bar flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
      : "flex items-center justify-between gap-6";

  const linkBase =
    "uppercase tracking-[0.18em] text-sm font-medium transition-colors";

  return (
    <header className="relative z-20">
      <div className={containerClasses}>
        <Link href="/" aria-label="Sentinel Gradient LLC home">
          <Image
            src={logoMark}
            alt="Sentinel Gradient LLC"
            className={cn(variant === "frosted" ? "h-14 w-auto" : "h-16 w-auto")}
            priority
          />
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-off-white transition-colors hover:border-white hover:text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path
                fill="currentColor"
                d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.17 12l6.72-7.71z"
              />
            ) : (
              <path
                fill="currentColor"
                d="M3 6h18v2H3zm6 5h12v2H9zm-6 5h18v2H3z"
              />
            )}
          </svg>
        </button>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
          role="navigation"
        >
          {navLinks.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  linkBase,
                  isActive ? "text-off-white underline decoration-[#1F97C1] decoration-2 underline-offset-8" : "text-gray-azure-muted hover:text-off-white",
                )}
                onClick={() => {
                  if (item.href === "/contact") {
                    trackEvent("nav_contact_click", { location: "desktop_nav" });
                  }
                }}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {open ? (
        <div className="mt-4 rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur md:hidden">
          <nav className="flex flex-col gap-4 text-sm" aria-label="Mobile navigation" role="navigation">
            {navLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                  linkBase,
                  isActive
                    ? "text-off-white underline decoration-[#1F97C1] decoration-2 underline-offset-8"
                    : "text-gray-azure hover:text-off-white",
                  )}
                  onClick={() => {
                    setOpen(false);
                    if (item.href === "/contact") {
                      trackEvent("nav_contact_click", { location: "mobile_nav" });
                    }
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
