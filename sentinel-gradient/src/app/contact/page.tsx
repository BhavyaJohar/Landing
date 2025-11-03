'use client';

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import logoMark from "../Logo.svg";

type ContactFormState = {
  name: string;
  organization: string;
  email: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

const initialState: ContactFormState = {
  name: "",
  organization: "",
  email: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const [formState, setFormState] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (state: ContactFormState) => {
    const nextErrors: ContactFormErrors = {};
    if (!state.name.trim()) {
      nextErrors.name = "Please provide your name.";
    }
    if (!state.organization.trim()) {
      nextErrors.organization = "Please provide your organization.";
    }
    if (!state.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(state.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!state.message.trim()) {
      nextErrors.message = "Outline your collaboration interest.";
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(formState);
    setErrors(nextErrors);
    const hasErrors = Object.keys(nextErrors).length > 0;
    if (!hasErrors) {
      setSubmitted(true);
      setFormState(initialState);
    } else {
      setSubmitted(false);
    }
  };

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
              <Link href="/about" className="hover:text-off-white transition-colors">
                About
              </Link>
              <Link href="/capabilities" className="hover:text-off-white transition-colors">
                Capabilities
              </Link>
              <Link href="/contracts" className="hover:text-off-white transition-colors">
                Contracts
              </Link>
              <Link
                href="/contact"
                aria-current="page"
                className="text-off-white underline decoration-[#1F97C1] decoration-2 underline-offset-8"
              >
                Contact
              </Link>
            </nav>
          </div>

          <section className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-azure-subtle">
                Collaboration Inquiries
              </p>
              <h1 className="text-4xl leading-tight sm:text-5xl">Contact Sentinel Gradient.</h1>
              <p className="text-lg leading-relaxed text-gray-azure">
                Share the program, research initiative, or technical evaluation you are advancing. We respond with
                alignment notes, points of contact, and recommended next steps so engagements begin with clarity.
              </p>
            </div>
            <div className="card-surface max-w-md space-y-4 text-sm text-gray-azure">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-azure-subtle">
                Engagement Signals
              </p>
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
            </div>
          </section>
        </header>

        <section className="mt-24 rounded-3xl border border-white/12 bg-white/5 p-10 shadow-2xl backdrop-blur">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl">Submit an Inquiry</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-azure">
                Complete the form and include any mission constraints, security considerations, or contracting pathways
                you are exploring. We will coordinate a working session tailored to your objectives.
              </p>
            </div>
            {submitted && (
              <div
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-gray-azure"
                role="status"
                aria-live="polite"
              >
                Thank you. We received your inquiry and will reply with coordination details shortly.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="form-grid">
                <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-gray-azure-subtle">
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={(event) =>
                      setFormState((prev) => ({ ...prev, name: event.target.value }))
                    }
                    required
                    placeholder="Full name"
                    className="form-field"
                    aria-required="true"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                  />
                  {errors.name ? (
                    <span id="contact-name-error" className="text-sm text-[#FFB3B3]">
                      {errors.name}
                    </span>
                  ) : null}
                </label>
                <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-gray-azure-subtle">
                  Organization
                  <input
                    type="text"
                    name="organization"
                    value={formState.organization}
                    onChange={(event) =>
                      setFormState((prev) => ({ ...prev, organization: event.target.value }))
                    }
                    required
                    placeholder="Agency or company"
                    className="form-field"
                    aria-required="true"
                    aria-invalid={errors.organization ? "true" : "false"}
                    aria-describedby={errors.organization ? "contact-organization-error" : undefined}
                  />
                  {errors.organization ? (
                    <span id="contact-organization-error" className="text-sm text-[#FFB3B3]">
                      {errors.organization}
                    </span>
                  ) : null}
                </label>
                <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-gray-azure-subtle">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={(event) =>
                      setFormState((prev) => ({ ...prev, email: event.target.value }))
                    }
                    required
                    placeholder="name@organization.mil"
                    className="form-field"
                    aria-required="true"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                  />
                  {errors.email ? (
                    <span id="contact-email-error" className="text-sm text-[#FFB3B3]">
                      {errors.email}
                    </span>
                  ) : null}
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-gray-azure-subtle">
                Message
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={(event) =>
                    setFormState((prev) => ({ ...prev, message: event.target.value }))
                  }
                  required
                  placeholder="Outline mission needs, technical focus areas, or desired timelines."
                  className="form-field form-textarea"
                  aria-required="true"
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
                {errors.message ? (
                  <span id="contact-message-error" className="text-sm text-[#FFB3B3]">
                    {errors.message}
                  </span>
                ) : null}
              </label>
              <div>
                <button type="submit" className="btn-primary">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </section>

        <footer className="mt-24 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-gray-azure-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
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
        </footer>
      </main>
    </div>
  );
}

