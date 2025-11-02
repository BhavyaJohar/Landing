import Image from "next/image";
import Link from "next/link";
import logoMark from "../Logo.svg";

const capabilityAreas = [
  {
    title: "Applied Machine Learning Research",
    description:
      "Evidence-driven modeling across classification, anomaly detection, and time-series. NIH-backed pipelines and IBM-scale MLOps experience inform how we design baselines that stand up to audit and replication.",
    tags: ["PyTorch", "TensorFlow", "Time Series", "Anomaly Detection", "Evaluation"],
  },
  {
    title: "AI Safety & Interpretability",
    description:
      "Explainability, bias checks, and traceable auditing from design to deployment. We embed interpretability tools so reviewers can challenge every inference and see rationale under operational constraints.",
    tags: ["AI Safety", "Interpretability", "Explainability", "Governance"],
  },
  {
    title: "Applied LLM Engineering",
    description:
      "Domain-specific LLMs and NLP systems influenced by PsychBERT lineage and NASA Ames LLM workflows. LangChain/RAG stacks, retrieval layers, and prompt evaluations tailored to mission data realities.",
    tags: ["LLMs", "NLP", "Transformers", "LangChain", "RAG"],
  },
  {
    title: "Autonomy & Data-Centric Systems",
    description:
      "Integration of autonomy research with resilient sensing, simulation, and anomaly response. NASA-informed methods document behavior under contested conditions and keep performance within envelopes.",
    tags: ["Autonomy", "Simulation", "Robotics", "Anomaly Response"],
  },
  {
    title: "Systems Engineering & Deployment",
    description:
      "Full-stack delivery from prototype to production dashboards. Akima/DoD experience: AWS-backed services, React interfaces, and service APIs that preserve observability, access controls, and governance from day one.",
    tags: ["AWS", "React", "Express", "APIs", "Observability"],
  },
  {
    title: "Quantitative Modeling & Decision Analytics",
    description:
      "APIs and analytics that support acquisition and investment decisions. UVA fund experience with factor analysis, portfolio metrics, and defensible reporting for technical reviews.",
    tags: ["Quant", "Factor Analysis", "APIs", "Decision Support"],
  },
];

const readinessSignals = [
  "Deliverable roadmaps include validation gates mapped to stakeholder risk profiles.",
  "Methodologies incorporate ARIA-labelled dashboards, ensuring evidence is auditable.",
  "Data governance and documentation packages accelerate partner onboarding and compliance checks.",
];

export default function CapabilitiesPage() {
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
              <Link href="/about" className="hover:text-off-white transition-colors">
                About
              </Link>
              <Link
                href="/capabilities"
                aria-current="page"
                className="text-off-white underline decoration-[#1F97C1] decoration-2 underline-offset-8"
              >
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

          {/* Hero */}
          <section className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-6 reveal-up">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-azure-subtle">
                Capabilities Portfolio
              </p>
              <h1 className="text-4xl leading-tight sm:text-5xl">Our Expertise.</h1>
              <p className="text-lg leading-relaxed text-gray-azure">
                We structure every engagement around verifiable research outcomes. Analytical depth,
                engineering rigor, and compliance readiness, so collaborators can trust performance
                across autonomous, safety-critical, and data-intensive systems.
              </p>
            </div>

            <div className="reveal-up reveal-delay-1 md:max-w-sm">
              <div className="card-surface">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-azure-subtle">
                  Evaluation Focus
                </p>
                <ul className="mt-4 space-y-3 text-sm text-gray-azure">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure" aria-hidden="true" />
                    Reproducible baselines tuned to mission data realities.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure" aria-hidden="true" />
                    Model accountability frameworks with explainability checkpoints.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure" aria-hidden="true" />
                    Transition plans preserving fidelity from prototype to deployment.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </header>

        {/* Gradient divider (kept minimal) */}
        <div className="mt-16 h-[2px] w-full bg-gradient-to-r from-sg-light-azure/80 via-white/10 to-[#25678A]/70" aria-hidden="true" />

        {/* Capabilities Grid on the SAME dark canvas */}
        <section className="mt-12">
          <div className="max-w-3xl space-y-4 reveal-up">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gray-azure-subtle">
              Technical Competencies
            </p>
            <h2 className="text-3xl sm:text-4xl">Precision-led research, ready for scrutiny.</h2>
            <p className="text-base leading-relaxed text-gray-azure">
              Each tile distills the engineering focus areas we bring to federal, commercial, and
              laboratory partners. All grounded in measurable benchmarks, collaborative workflows, and
              documentation that supports acquisition and oversight audiences.
            </p>
          </div>

          <ul className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {capabilityAreas.map((area, index) => (
              <li
                key={area.title}
                className={`card-surface reveal-up ${
                  index % 3 === 1 ? "reveal-delay-1" : index % 3 === 2 ? "reveal-delay-2" : ""
                }`}
              >
                <div className="space-y-3">
                  {/* Playfair for titles via your global font config */}
                  <h3 className="font-serif text-2xl text-off-white">{area.title}</h3>
                  <p className="text-base leading-relaxed text-gray-azure">{area.description}</p>
                </div>

                {area.tags?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2" aria-label="Key technologies and themes">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-gray-azure"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        {/* Readiness Signals + CTA */}
        <section className="mt-24">
          <div className="reveal-up space-y-6 rounded-3xl border border-white/15 bg-white/5 p-10 shadow-2xl backdrop-blur">
            <h2 className="text-3xl">Readiness Signals We Deliver</h2>
            <p className="max-w-3xl text-base leading-relaxed text-gray-azure">
              Partners count on Sentinel Gradient for analytic depth and governance clarity. We integrate
              telemetry, documentation, and validation tooling so program managers and reviewers see the
              evidence chain without friction.
            </p>
            <ul className="space-y-3 text-base text-gray-azure">
              {readinessSignals.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div>
              <Link href="/contact" className="btn-primary">
                Learn More / Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-azure-muted sm:flex-row sm:items-center sm:justify-between">
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
