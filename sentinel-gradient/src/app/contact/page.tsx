'use client';

import { useState, FormEvent } from "react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";

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
    if (Object.keys(nextErrors).length === 0) {
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
        <Header />

        <section className="mt-16 flex flex-col gap-8 md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-6 reveal-up">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-azure-subtle">Collaboration Inquiries</p>
            <h1 className="text-4xl leading-tight sm:text-5xl">Contact Sentinel Gradient.</h1>
            <p className="text-lg leading-relaxed text-gray-azure">
              Share the program, research initiative, or technical evaluation you are advancing. We respond with alignment notes,
              points of contact, and recommended next steps so engagements begin with clarity.
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
            {submitted ? (
              <div
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-gray-azure"
                role="status"
                aria-live="polite"
              >
                Thank you. We received your inquiry and will reply with coordination details shortly.
              </div>
            ) : null}
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="form-grid">
                <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-gray-azure-subtle">
                  Name
                  <Input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={(event) =>
                      setFormState((prev) => ({ ...prev, name: event.target.value }))
                    }
                    required
                    placeholder="Full name"
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
                  <Input
                    type="text"
                    name="organization"
                    value={formState.organization}
                    onChange={(event) =>
                      setFormState((prev) => ({ ...prev, organization: event.target.value }))
                    }
                    required
                    placeholder="Agency or company"
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
                  <Input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={(event) =>
                      setFormState((prev) => ({ ...prev, email: event.target.value }))
                    }
                    required
                    placeholder="name@organization.mil"
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
                <Textarea
                  name="message"
                  value={formState.message}
                  onChange={(event) =>
                    setFormState((prev) => ({ ...prev, message: event.target.value }))
                  }
                  required
                  placeholder="Outline mission needs, technical focus areas, or desired timelines."
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
                <Button type="submit">Submit Inquiry</Button>
              </div>
            </form>
          </div>
        </Card>

        <Footer />
      </main>
    </div>
  );
}

