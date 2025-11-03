import type { Metadata } from "next";

type SeoOptions = {
  route: string;
  title: string;
  description: string;
  imageSlug?: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sentinelgradient.com";

export function buildMetadata({ route, title, description, imageSlug }: SeoOptions): Metadata {
  const normalizedRoute = route.startsWith("/") ? route : `/${route}`;
  const isHome = normalizedRoute === "/" || normalizedRoute === "//";
  const canonicalUrl = isHome ? BASE_URL : `${BASE_URL}${normalizedRoute}`;
  const slug = imageSlug ?? (isHome ? "home" : normalizedRoute.replace(/^\//, ""));
  const ogImage = `${BASE_URL}/og/${slug}.png`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      siteName: "Sentinel Gradient",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

