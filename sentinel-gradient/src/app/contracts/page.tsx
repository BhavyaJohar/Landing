import Link from "next/link";
import Image from "next/image";
import logoMark from "../Logo.svg";

const naicsAndPscCodes = [
  { code: "NAICS 541511", description: "Custom Computer Programming Services" },
  {
    code: "NAICS 541715",
    description:
      "R&D in the Physical, Engineering, and Life Sciences (except Nanotechnology and Biotechnology)",
  },
  { code: "NAICS 541512", description: "Computer Systems Design Services" },
];

const researchHighlights = [
  "Evaluated autonomy assurance frameworks for contested aerospace environments.",
  "Developed explainability toolchains for LLM-enabled analytical platforms.",
  "Constructed model governance packages for biomedical anomaly-detection projects.",
  "Delivered SBIR-ready transition plans aligning prototype maturity with acquisition gates.",
];

export default function ContractsPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="hero-aurora" aria-hidden="true" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-6 py-24 sm:px-10 lg:px-16">
        {/* Top Nav */}
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
                className="hover:text-off-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/capabilities"
                className="hover:text-off-white transition-colors"
              >
                Capabilities
              </Link>
              <Link
                href="/contracts"
                aria-current="page"
                className="text-off-white underline decoration-[#1F97C1] decoration-2 underline-offset-8"
              >
                Contracts
              </Link>
              <Link
                href="/contact"
                className="hover:text-off-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Hero Section */}
          <section className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-6 reveal-up">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-azure-subtle">
                Government & Partnerships
              </p>
              <h1 className="text-4xl leading-tight sm:text-5xl">
                Ready for Collaboration.
              </h1>
              <p className="text-lg leading-relaxed text-gray-azure">
                Sentinel Gradient LLC aligns SBIR, STTR, and OTA engagements with
                transparent milestones, audit-ready documentation, and engineering
                rigor that withstands programmatic scrutiny. Our teams structure every
                statement of work to preserve traceability from prototype experimentation
                to field deployment.
              </p>
            </div>

            <div className="card-surface reveal-up reveal-delay-1 max-w-md space-y-4 text-sm text-gray-azure">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-azure-subtle">
                Contract-Ready Signals
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure"
                    aria-hidden="true"
                  />
                  DFARS-aligned data stewardship and evidence packs prepared for rapid
                  review.
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure"
                    aria-hidden="true"
                  />
                  Security-minded infrastructure plans covering accreditation and
                  deployment workflows.
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure"
                    aria-hidden="true"
                  />
                  Integrated QA checkpoints ensuring performance evidence is reproducible
                  and auditable.
                </li>
              </ul>
            </div>
          </section>
        </header>

        {/* SBIR / STTR Section */}
        <section className="mt-24 space-y-10">
          <div className="reveal-up space-y-4">
            <h2 className="text-3xl">SBIR / STTR Focus</h2>
            <p className="max-w-3xl text-base leading-relaxed text-gray-azure">
              We structure research engagements to advance technology readiness while
              maintaining compliance with federal acquisition frameworks. Every deliverable
              includes validation narratives, risk registers, and transition artifacts built
              for contracting officers and technical evaluators.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* NAICS Codes */}
            <article className="card-surface reveal-up text-gray-azure">
              <h3 className="text-2xl text-off-white">NAICS Codes</h3>
              <p className="text-sm uppercase tracking-[0.28em] text-gray-azure-subtle">
                Codes pending final registration
              </p>
              <ul className="mt-4 space-y-3 text-base leading-relaxed">
                {naicsAndPscCodes.map((item) => (
                  <li key={item.code}>
                    <span className="font-semibold text-off-white">
                      {item.code}
                    </span>
                    <span className="block text-gray-azure">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Research Highlights */}
            <article className="card-surface reveal-up reveal-delay-1 text-gray-azure">
              <h3 className="text-2xl text-off-white">Research Lineage</h3>
              <p className="text-sm uppercase tracking-[0.28em] text-gray-azure-subtle">
                Representative engagements
              </p>
              <ul className="mt-4 space-y-3 text-base leading-relaxed">
                {researchHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure"
                      aria-hidden="true"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* Capability Statement Download */}
        <section className="mt-24 flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/5 p-10 shadow-2xl backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl">Download Capability Statement</h2>
            <p className="text-base leading-relaxed text-gray-azure">
              Access our latest contracting identifiers, teaming preferences, and technical
              narratives prepared for SBIR, STTR, and rapid acquisition pathways.
            </p>
          </div>
          <Link
            href="/documents/sentinel-gradient-capability-statement.pdf"
            className="btn-light-azure"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Capability Statement (PDF)
          </Link>
        </section>

        {/* Contact Form */}
        <section className="mt-24 space-y-10 rounded-3xl border border-white/12 bg-white/5 p-10 shadow-2xl backdrop-blur">
          <div className="space-y-4 reveal-up">
            <h2 className="text-3xl">Contact CTA</h2>
            <p className="max-w-3xl text-base leading-relaxed text-gray-azure">
              Share your program objectives and contracting timelines. We’ll respond with
              alignment notes, teaming recommendations, and readiness artifacts tailored to
              your requirements.
            </p>
          </div>

          <form className="space-y-6" aria-label="Contact Sentinel Gradient for contracting collaboration">
            <div className="form-grid">
              <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-gray-azure-subtle">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full name"
                  className="form-field"
                  aria-required="true"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-gray-azure-subtle">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@organization.mil"
                  className="form-field"
                  aria-required="true"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-gray-azure-subtle">
                Organization
                <input
                  type="text"
                  name="organization"
                  required
                  placeholder="Agency or company"
                  className="form-field"
                  aria-required="true"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-gray-azure-subtle">
              Message
              <textarea
                name="message"
                required
                placeholder="Outline contract type, domain, timelines, or teaming needs."
                className="form-field form-textarea"
                aria-required="true"
              />
            </label>

            <div>
              <button type="submit" className="btn-primary">
                Submit Collaboration Inquiry
              </button>
            </div>
          </form>
        </section>

        {/* Footer */}
        <footer className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-azure-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <Link href="mailto:info@sentinelgradient.com">
              info@sentinelgradient.com
            </Link>
            <span
              className="hidden h-1 w-1 rounded-full bg-white/50 sm:inline-flex"
              aria-hidden="true"
            />
            <span>Virginia, USA</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
