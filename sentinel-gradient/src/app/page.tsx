import Image from "next/image";
import Link from "next/link";
import logoMark from "./Logo.svg";

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

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="hero-aurora" aria-hidden="true" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-6 py-24 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-16">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Sentinel Gradient LLC home">
              <Image
                src={logoMark}
                alt="Sentinel Gradient LLC"
                className="h-16 w-auto"
                priority
              />
            </Link>
            <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.18em] text-gray-azure-muted md:flex">
              <Link href="/capabilities" className="hover:text-off-white transition-colors">
                Capabilities
              </Link>
              <Link href="/about" className="hover:text-off-white transition-colors">
                About
              </Link>
              <Link href="/contracts" className="hover:text-off-white transition-colors">
                Contracts
              </Link>
              <Link href="/contact" className="hover:text-off-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <section className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-6 reveal-up">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-azure-subtle">
                Applied AI Research Studio
              </p>
              <h1 className="text-4xl leading-tight sm:text-5xl">
                Advancing Machine Intelligence Through Rigorous Research.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-gray-azure">
                Sentinel Gradient LLC evaluates, builds, and hardens machine learning systems with
                transparent methodologies, evidence-driven benchmarks, and safeguards that scale from
                laboratory prototypes to operational deployments.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/capabilities" className="btn-primary reveal-up reveal-delay-1">
                  Explore Our Research
                </Link>
                <Link href="/contact" className="btn-secondary reveal-up reveal-delay-2">
                  Contact for Collaboration
                </Link>
              </div>
            </div>

            <div className="relative mt-10 max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur md:mt-0 md:w-96 reveal-up reveal-delay-1">
              <div className="absolute inset-0 -z-10 rounded-3xl border border-white/10" aria-hidden="true" />
              <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-gray-azure-subtle">
                Focus Areas
              </h2>
              <p className="mt-4 text-base text-gray-azure">
                We align research with critical domains spanning autonomy assurance, LLM reliability, and
                mission-grade analytics to ensure every model decision is interrogable and defensible.
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
            </div>
          </section>
        </header>

        <section
          id="capabilities"
          className="mt-24 grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
          aria-label="Sentinel Gradient services"
        >
          {initiatives.map((item, index) => (
            <article
              key={item.title}
              className={`card-surface reveal-up ${
                index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""
              }`}
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
            </article>
          ))}
        </section>

        <footer className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-azure-muted sm:flex-row sm:items-center sm:justify-between">
          {/*<span>&copy; {new Date().getFullYear()} Sentinel Gradient LLC. All rights reserved.</span>*/}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="mailto:info@sentinelgradient.com">info@sentinelgradient.com</Link>
            <span className="hidden h-1 w-1 rounded-full bg-white/50 sm:inline-flex" aria-hidden="true" />
            <span>Virginia, USA</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
