import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";

const naicsAndPscCodes = [
  { code: "NAICS 541715", description: "R&D in the Physical, Engineering, and Life Sciences (Aerospace, Defense)" },
  { code: "NAICS 541713", description: "R&D in Nanotechnology and Advanced Materials (pending verification)" },
  { code: "PSC AJ12", description: "R&D Services: General Science & Technology (Applied Research)" },
  { code: "PSC D318", description: "IT & Telecom: Integrated Hardware/Software/Services" },
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
        <Header variant="frosted" />

        <section className="mt-16 flex flex-col gap-10 md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-6 reveal-up">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-azure-subtle">
              Government & Partnerships
            </p>
            <h1 className="text-4xl leading-tight sm:text-5xl">Ready for Collaboration.</h1>
            <p className="text-lg leading-relaxed text-gray-azure">
              Sentinel Gradient LLC aligns SBIR, STTR, and OTA engagements with transparent milestones, audit-ready
              documentation, and engineering rigor that withstands programmatic scrutiny. Our teams structure every statement of
              work to preserve traceability from prototype experimentation to field deployment.
            </p>
          </div>
          <Card className="reveal-up reveal-delay-1 max-w-md text-sm text-gray-azure">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-azure-subtle">
              Contract-Ready Signals
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure" aria-hidden="true" />
                DFARS-aligned data stewardship and evidence packs prepared for rapid review.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure" aria-hidden="true" />
                Security-minded infrastructure plans covering accreditation and deployment workflows.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure" aria-hidden="true" />
                Integrated QA checkpoints ensuring performance evidence is reproducible and auditable.
              </li>
            </ul>
          </Card>
        </section>

        <section className="mt-24 space-y-10">
          <div className="reveal-up space-y-4">
            <h2 className="text-3xl">SBIR/STTR Focus</h2>
            <p className="max-w-3xl text-base leading-relaxed text-gray-azure">
              We structure research engagements to advance technology readiness while maintaining compliance with federal
              acquisition frameworks. Every deliverable includes validation narratives, risk registers, and transition artifacts
              built for contracting officers and technical evaluators.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="text-gray-azure">
              <h3 className="text-2xl text-off-white">NAICS & PSC Alignment</h3>
              <p className="text-sm uppercase tracking-[0.28em] text-gray-azure-subtle">Codes pending final registration</p>
              <ul className="mt-4 space-y-3 text-base leading-relaxed">
                {naicsAndPscCodes.map((item) => (
                  <li key={item.code}>
                    <span className="font-semibold text-off-white">{item.code}</span>
                    <span className="block text-gray-azure">{item.description}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="text-gray-azure">
              <h3 className="text-2xl text-off-white">Research Lineage</h3>
              <p className="text-sm uppercase tracking-[0.28em] text-gray-azure-subtle">Representative engagements</p>
              <ul className="mt-4 space-y-3 text-base leading-relaxed">
                {researchHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <Card className="mt-24 flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/5 p-10 shadow-2xl backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl">Download Capability Statement</h2>
            <p className="text-base leading-relaxed text-gray-azure">
              Access our latest contracting identifiers, teaming preferences, and technical narratives prepared for SBIR, STTR,
              and rapid acquisition pathways.
            </p>
          </div>
          <ButtonLink
            href="/documents/sentinel-gradient-capability-statement.pdf"
            variant="light"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Capability Statement (PDF)
          </ButtonLink>
        </Card>

        <Card className="mt-24 space-y-10 rounded-3xl border border-white/12 bg-white/5 p-10 shadow-2xl backdrop-blur">
          <div className="space-y-4">
            <h2 className="text-3xl">Contact CTA</h2>
            <p className="max-w-3xl text-base leading-relaxed text-gray-azure">
              Share your program objectives and contracting timelines. We will respond with alignment notes, teaming
              recommendations, and readiness artifacts tailored to your requirements.
            </p>
          </div>
          <form className="space-y-6" aria-label="Contact Sentinel Gradient for contracting collaboration">
            <div className="form-grid">
              <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-gray-azure-subtle">
                Name
                <Input type="text" name="name" required placeholder="Full name" aria-required="true" />
              </label>
              <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-gray-azure-subtle">
                Email
                <Input type="email" name="email" required placeholder="name@organization.mil" aria-required="true" />
              </label>
              <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-gray-azure-subtle">
                Organization
                <Input type="text" name="organization" required placeholder="Agency or company" aria-required="true" />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-gray-azure-subtle">
              Message
              <Textarea
                name="message"
                required
                placeholder="Outline contract type, domain, timelines, or teaming needs."
                aria-required="true"
              />
            </label>
            <div>
              <Button type="submit">Submit Collaboration Inquiry</Button>
            </div>
          </form>
        </Card>

        <Footer />
      </main>
    </div>
  );
}

