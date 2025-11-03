import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { ContactForm } from "@/components/contact/contact-form";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 86400;

export async function generateMetadata() {
  return buildMetadata({
    route: "/contact",
    title: "Contact Sentinel Gradient — AI Assurance & Interpretability Experts",
    description:
      "Reach Sentinel Gradient LLC to discuss AI assurance, interpretable machine learning, LLM evaluation, and SBIR/STTR teaming opportunities with our Virginia research firm.",
  });
}

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="hero-aurora" aria-hidden="true" />
      <main
        id="main-content"
        className="relative mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-6 py-24 sm:px-10 lg:px-16"
      >
        <Header />

        <section className="mt-16 flex flex-col gap-8 md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-6 reveal-up">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-azure-subtle">Collaboration Inquiries</p>
            <h1 className="text-4xl leading-tight sm:text-5xl">Contact Sentinel Gradient.</h1>
            <p className="text-lg leading-relaxed text-gray-azure">
              Share the program, research initiative, or technical evaluation you are advancing. We respond with alignment notes,
              points of contact, and recommended next steps so engagements begin with clarity. For contracting context, review our{" "}
              <Link href="/contracts" className="underline decoration-sg-light-azure hover:text-off-white">
                SBIR/STTR readiness overview
              </Link>
              .
            </p>
          </div>
          <Card className="max-w-md space-y-4 text-sm text-gray-azure">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-azure-subtle">Engagement Signals</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure" aria-hidden="true" />
                Expect a response from our leadership team within two business days.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure" aria-hidden="true" />
                We maintain secure channels for sensitive research and contracting discussions.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sg-light-azure" aria-hidden="true" />
                Provide mission context so we can align the appropriate technical leads from the outset.
              </li>
            </ul>
          </Card>
        </section>

        <Card className="mt-24 rounded-3xl border border-white/12 bg-white/5 p-10 shadow-2xl backdrop-blur">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl">Submit an Inquiry</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-azure">
                Complete the form and include any mission constraints, security considerations, or contracting pathways you are
                exploring. We will coordinate a working session tailored to your objectives.
              </p>
            </div>
            <ContactForm />
          </div>
        </Card>

        <div className="mt-20 space-y-6">
          <h2 className="text-3xl">Additional Resources</h2>
          <div className="flex flex-wrap gap-4 text-gray-azure">
            <ButtonLink
              href="/documents/sentinel-gradient-capability-statement.pdf"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              download
              eventName="capability_pdf_download"
              eventParams={{ source: "contact_page" }}
            >
              Download Capability Statement
            </ButtonLink>
            <ButtonLink
              href="/capabilities"
              className="inline-flex"
              eventName="nav_internal_click"
              eventParams={{ destination: "capabilities", location: "contact_resources" }}
            >
              Review Capabilities
            </ButtonLink>
          </div>
        </div>

        <Script
          id="contact-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              url: "https://sentinelgradient.com/contact",
              mainEntity: {
                "@type": "Organization",
                name: "Sentinel Gradient LLC",
                email: "contact@sentinelgradient.com",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "VA",
                  addressCountry: "US",
                },
              },
            }),
          }}
        />

        <Footer />
      </main>
    </div>
  );
}

