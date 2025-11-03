import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const capabilityAreas = [
  {
    title: "Applied Machine Learning Research",
    description:
      "Evidence-driven modeling across classification, anomaly detection, and time-series analysis. We build reproducible, high-assurance ML pipelines that withstand operational scrutiny in defense and biomedical settings.",
    tags: ["ML", "TensorFlow", "PyTorch", "Time Series", "Model Evaluation"],
  },
  {
    title: "AI Safety & Interpretability",
    description:
      "Explainable AI frameworks, bias detection, and traceable model auditing that keep critical decisions accountable. Our teams embed interpretability tooling across the lifecycle so stakeholders can challenge every inference.",
    tags: ["AI Safety", "Interpretability", "Explainability", "Governance"],
  },
  {
    title: "Applied LLM Engineering",
    description:
      "Domain-specific LLM development supported by PsychBERT lineage and operational fine-tuning workflows. We design LangChain pipelines, retrieval layers, and prompt evaluations tailored to constrained mission data.",
    tags: ["LLMs", "NLP", "Transformers", "Prompt Engineering"],
  },
  {
    title: "Autonomous & Data-Centric Systems",
    description:
      "Integration of autonomy research with resilient sensing, simulation, and anomaly response. Systems adapt to uncertainty, maintain performance envelopes, and document behavior under contested conditions.",
    tags: ["Autonomy", "Simulation", "Anomaly Detection", "Robotics"],
  },
  {
    title: "Systems Engineering & Deployment",
    description:
      "Full-stack infrastructure that connects research prototypes to production-grade dashboards. We implement AWS-backed pipelines and React interfaces that preserve observability and governance from day one.",
    tags: ["Full Stack", "AWS", "React", "System Integration"],
  },
  {
    title: "Quantitative Modeling & Decision Analytics",
    description:
      "Analytical pipelines that transform complex data into defensible decisions. We combine statistical modeling with API-driven dissemination to support acquisition, investment, and technical evaluations.",
    tags: ["Quantitative Analysis", "Data Science", "APIs", "Decision Support"],
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
      <main
        id="main-content"
        className="relative mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-6 py-24 sm:px-10 lg:px-16"
      >
        <Header />

        {/* Hero */}
        <section className="mt-16 flex flex-col gap-10 md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-6 reveal-up">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-azure-subtle">
              Capabilities Portfolio
            </p>
            <h1 className="text-4xl leading-tight sm:text-5xl">Our Expertise.</h1>
            <p className="text-lg leading-relaxed text-gray-azure">
              Sentinel Gradient LLC structures every engagement around verifiable research outcomes. Our teams align analytical
              depth, engineering rigor, and compliance readiness so collaborators can rely on transparent performance across
              autonomous, safety-critical, and data-intensive systems.
            </p>
          </div>

          <Card className="reveal-up reveal-delay-1 md:max-w-sm">
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
                Transition plans that preserve fidelity from prototype to deployment.
              </li>
            </ul>
          </Card>
        </section>

        {/* Technical Competencies (normal dark canvas, no alt background) */}
        <section className="mt-24 space-y-8">
          <div className="reveal-up">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gray-azure-subtle">
              Technical Competencies
            </p>
            <h2 className="text-3xl sm:text-4xl">Precision-led research, ready for operational scrutiny.</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-azure">
              Each capability tile distills the engineering focus areas we bring to federal, commercial, and laboratory
              partners—grounded in measurable benchmarks, collaborative workflows, and documentation that supports acquisition
              and oversight audiences.
            </p>
          </div>

          <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {capabilityAreas.map((area, index) => (
              <li key={area.title}>
                <Card className={`reveal-up ${index % 3 === 1 ? "reveal-delay-1" : index % 3 === 2 ? "reveal-delay-2" : ""}`}>
                  <div className="space-y-3">
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
                </Card>
              </li>
            ))}
          </ul>
        </section>

        {/* Readiness Signals */}
        <Card className="mt-24 space-y-6">
          <h2 className="text-3xl">Readiness Signals We Deliver</h2>
          <p className="max-w-3xl text-base leading-relaxed text-gray-azure">
            Partners count on Sentinel Gradient for analytic depth and governance clarity. We integrate telemetry,
            documentation, and validation tooling so program managers and reviewers see the evidence chain without friction.
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
            <ButtonLink href="/contact">Learn More / Contact Us</ButtonLink>
          </div>
        </Card>

        <Footer />
      </main>
    </div>
  );
}
