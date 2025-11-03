import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

const initiatives = [
  {
    title: "Research",
    description:
      "Designing empirical studies that validate advanced learning systems for high-assurance environments.",
    icon: "/globe.svg",
  },
  {
    title: "Development",
    description:
      "Engineering interpretable LLM pipelines and autonomy stacks that align with mission requirements.",
    icon: "/window.svg",
  },
  {
    title: "Consulting",
    description:
      "Partnering with laboratories and program offices to harden AI roadmaps with measurable rigor.",
    icon: "/file.svg",
  },
];

export const revalidate = 86400;

export async function generateMetadata() {
  return buildMetadata({
    route: "/",
    title: "AI Assurance & Interpretable Machine Learning Research Partner",
    description:
      "Sentinel Gradient LLC is a Virginia AI research firm delivering AI assurance, interpretable machine learning, and autonomy readiness for defense and public sector programs.",
    imageSlug: "home",
  });
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="hero-aurora" aria-hidden="true" />
      <main
        id="main-content"
        className="relative mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-6 py-24 sm:px-10 lg:px-16"
      >
        <Header />

        <section className="mt-16 flex flex-col gap-10 md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-6 reveal-up">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-azure-subtle">
              Applied AI Research Studio
            </p>
            <h1 className="text-4xl leading-tight sm:text-5xl">
              Advancing Machine Intelligence Through Rigorous Research.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-gray-azure">
              Sentinel Gradient LLC evaluates, builds, and hardens machine learning systems with transparent methodologies,
              evidence-driven benchmarks, and safeguards that scale from laboratory prototypes to operational deployments.
              Explore our{" "}
              <Link href="/capabilities" className="underline decoration-sg-light-azure hover:text-off-white">
                AI assurance expertise
              </Link>{" "}
              or review our{" "}
              <Link
                href="/documents/sentinel-gradient-capability-statement.pdf"
                className="underline decoration-sg-light-azure hover:text-off-white"
              >
                capability statement
              </Link>{" "}
              before engaging on{" "}
              <Link href="/contracts" className="underline decoration-sg-light-azure hover:text-off-white">
                SBIR/STTR collaborations
              </Link>
              .
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ButtonLink
                href="/capabilities"
                className="reveal-up reveal-delay-1"
                eventName="nav_internal_click"
                eventParams={{ destination: "capabilities", location: "home_hero" }}
              >
                Explore Our Research
              </ButtonLink>
              <ButtonLink
                href="/contact"
                variant="secondary"
                className="reveal-up reveal-delay-2"
                eventName="nav_internal_click"
                eventParams={{ destination: "contact", location: "home_hero" }}
              >
                Contact for Collaboration
              </ButtonLink>
            </div>
          </div>

          <Card className="relative mt-10 max-w-md md:mt-0 md:w-96 reveal-up reveal-delay-1">
            <div className="absolute inset-0 -z-10 rounded-3xl border border-white/10" aria-hidden="true" />
            <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-gray-azure-subtle">
              Focus Areas
            </h2>
            <p className="mt-4 text-base text-gray-azure">
              We align research with critical domains spanning autonomy assurance, LLM reliability, and mission-grade
              analytics to ensure every model decision is interrogable and defensible.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-gray-azure">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-sg-light-azure" aria-hidden="true" />
                AI Safety &amp; Interpretability
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-sg-light-azure" aria-hidden="true" />
                Applied LLM Engineering
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-sg-light-azure" aria-hidden="true" />
                Autonomy for Complex Systems
              </div>
            </div>
          </Card>
        </section>

        <section
          id="capabilities"
          className="mt-24 grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
          aria-label="Sentinel Gradient services"
        >
          {initiatives.map((item, index) => (
            <Card
              key={item.title}
              className={index === 1 ? "reveal-up reveal-delay-1" : index === 2 ? "reveal-up reveal-delay-2" : "reveal-up"}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5">
                <Image
                  src={item.icon}
                  alt=""
                  width={28}
                  height={28}
                  style={{ filter: "invert(1) brightness(1.8)" }}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-2xl font-semibold text-off-white">{item.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-azure">{item.description}</p>
            </Card>
          ))}
        </section>

        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sentinel Gradient LLC",
              url: "https://sentinelgradient.com",
              address: {
                "@type": "PostalAddress",
                addressRegion: "VA",
                addressCountry: "US",
              },
              naics: ["541511", "541715", "541512"],
            }),
          }}
        />

        <Footer />
      </main>
    </div>
  );
}
