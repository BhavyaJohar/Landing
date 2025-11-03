import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24" role="contentinfo">
      <div className="gradient-divider mb-8" aria-hidden="true" />
      <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-azure-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <span>&copy; {currentYear} Sentinel Gradient LLC</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/50 sm:inline-flex" aria-hidden="true" />
          <span>Virginia, USA</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/50 sm:inline-flex" aria-hidden="true" />
          <Link href="mailto:contact@sentinelgradient.com">contact@sentinelgradient.com</Link>
        </div>
        <div className="flex items-center gap-3">
          <span className="uppercase tracking-[0.2em] text-gray-azure-subtle">Connect</span>
          <Link
            href="https://www.linkedin.com/"
            aria-label="Sentinel Gradient LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-off-white transition-colors hover:border-white hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5zM3 9.75h3.95V21H3zM9.5 9.75h3.78v1.54h.05c.52-.98 1.8-2.02 3.7-2.02 3.96 0 4.69 2.61 4.69 6v6.72h-3.95v-5.96c0-1.42-.03-3.24-1.98-3.24-1.98 0-2.29 1.55-2.29 3.14V21H9.5z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
