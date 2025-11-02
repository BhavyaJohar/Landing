import Image from "next/image";
import Link from "next/link";
import logoMark from "../Logo.svg";

const approachPillars = [
  "Construct evidence-driven evaluation plans that quantify model reliability before deployment.",
  "Integrate interpretability tooling across the lifecycle to surface rationale and mitigate drift.",
  "Co-develop architectures with partners, aligning benchmarks to mission-specific performance gates.",
  "Document traceable methodologies so regulators and contracting officers can audit every decision.",
];

const teamProfiles = [
  {
    name: "Bhavya Johar",
    role: "Co-Founder & CEO",
    bio: "Leads company strategy and programs. Focused on mission-aligned AI assurance, acquisition-readiness, and transitioning research to deployable capability.",
    image: "/team/bhavya_pfp.jpeg",
  },
  {
    name: "Vedant Vajre",
    role: "Co-Founder & CTO",
    bio: "Owns technical direction and architectures. Builds interpretable, resilient evaluation pipelines and governance baselines for autonomy and LLM systems.",
    image: "/team/vedant_pfp.jpeg",
  },
];

export default function AboutPage() {
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
              <Link href="/" className="hover:text-off-white transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                aria-current="page"
                className="text-off-white underline decoration-[#1F97C1] decoration-2 underline-offset-8"
              >
                About
              </Link>
              <Link href="/capabilities" className="hover:text-off-white transition-colors">
                Capabilities
              </Link>
              <Link href="/contracts" className="hover:text-off-white transition-colors">
                Contracts
              </Link>
              <Link href="/contact" className="hover:text-off-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <section className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-6 reveal-up">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-azure-subtle">
                About Sentinel Gradient
              </p>
              <h1 className="text-4xl leading-tight sm:text-5xl">Research with Purpose.</h1>
              <p className="text-lg leading-relaxed text-gray-azure">
                We build mission-aligned machine intelligence that stands up to scrutiny. Our teams
                combine empirical rigor with operational context to design, validate, and deliver AI
                capabilities that perform reliably in contested environments.
              </p>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="/documents/sentinel-gradient-capability-statement.pdf"
                className="btn-secondary"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Capability Statement
              </Link>
              <Link href="/contact" className="btn-primary reveal-up reveal-delay-1">
                Connect With Us
              </Link>
            </div>
          </section>
        </header>

        <section className="mt-20 grid gap-12 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center">
          <div className="space-y-6 reveal-up">
            <h2 className="text-3xl">Mission, Expertise, and Credibility</h2>
            <p className="text-base leading-relaxed text-gray-azure">
              Sentinel Gradient LLC exists to strengthen decision-making systems where precision and
              accountability are non-negotiable. Our research portfolio spans AI assurance,
              autonomy calibration, and model governance for federal and commercial partners who
              demand auditable performance.
            </p>
            <p className="text-base leading-relaxed text-gray-azure">
              We operate as a research-native firm with contracting fluency, integrating human factors,
              model interpretability, and data stewardship into every engagement. By respecting
              accreditation pathways and compliance frameworks, we ensure our solutions transition
              smoothly from laboratory prototypes to fielded capability.
            </p>
            <ul className="space-y-3 text-base text-gray-azure">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure" aria-hidden="true" />
                Contract-ready processes aligned to SBIR, STTR, and OTA mechanisms.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure" aria-hidden="true" />
                Validated evaluation harnesses for autonomy, LLM, and safety benchmarks.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure" aria-hidden="true" />
                Transparent reporting that equips stakeholders to verify outcomes quickly.
              </li>
            </ul>
          </div>
          <div
            className="relative flex h-full min-h-[320px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur reveal-up reveal-delay-1"
            role="img"
            aria-label="Abstract visualization of interconnected research gradients"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(31,151,193,0.25),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(37,103,138,0.35),transparent_60%)]" />
              <div className="absolute inset-6 rounded-3xl border border-white/15" />
              <div className="absolute inset-10 rounded-3xl border border-white/10" />
            </div>
            <div className="relative grid w-full max-w-sm gap-6">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-gray-azure">
                <p className="font-semibold text-off-white">Validated Pipelines</p>
                <p className="mt-2 leading-relaxed">
                  Continuous evaluation loops connect datasets, metrics, and governance checkpoints.
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-gray-azure">
                <p className="font-semibold text-off-white">Benchmarks in Context</p>
                <p className="mt-2 leading-relaxed">
                  Scenario modeling captures contested environments and real-world operational limits.
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-gray-azure">
                <p className="font-semibold text-off-white">Accountable Outcomes</p>
                <p className="mt-2 leading-relaxed">
                  Every insight is packaged with traceable evidence to support acquisition decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 space-y-8">
          <div className="reveal-up">
            <h2 className="text-3xl">Our Approach</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-azure">
              We stay grounded in disciplined research practices so partners can trust the technical
              and programmatic feasibility of each deliverable.
            </p>
          </div>
          <ul className="grid gap-6 md:grid-cols-2">
            {approachPillars.map((pillar) => (
              <li
                key={pillar}
                className="card-surface reveal-up text-base leading-relaxed text-gray-azure"
              >
                {pillar}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-24 space-y-10">
          <div className="reveal-up">
            <h2 className="text-3xl">Team Leadership</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-azure">
              Co-founders and systems engineers translating academic advancements into deployable capability.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {teamProfiles.map((profile, index) => (
              <article
                key={profile.name}
                className={`card-surface reveal-up ${index === 1 ? "reveal-delay-1" : ""}`}
              >
                <div className="flex items-center gap-6">
                  {/* Avatar: guaranteed perfect circle */}
                  <div className="relative size-24 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white/10 aspect-square">
                    <Image
                      src={profile.image}
                      alt={`${profile.name} headshot`}
                      fill
                      className="object-cover"
                      sizes="96px"
                      priority={index === 0}
                    />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-off-white">{profile.name}</p>
                    <p className="text-sm uppercase tracking-[0.25em] text-gray-azure-subtle">
                      {profile.role}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed text-gray-azure">{profile.bio}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/5 p-10 shadow-2xl backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl">Download Our Capability Statement</h2>
            <p className="text-base leading-relaxed text-gray-azure">
              Review our contracting identifiers, research qualifications, and past performance
              summaries prepared for rapid SBIR and partnering discussions.
            </p>
          </div>
          <Link
            href="/documents/sentinel-gradient-capability-statement.pdf"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download PDF
          </Link>
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
