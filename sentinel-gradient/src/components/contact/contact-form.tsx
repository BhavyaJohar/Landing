'use client';

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { trackEvent } from "@/lib/analytics";

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

export function ContactForm() {
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
      trackEvent("contact_submit", { source: "contact_page" });
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="space-y-6">
      {submitted ? (
        <div
          className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-gray-azure"
          role="status"
          aria-live="polite"
        >
          Thank you. We received your inquiry and will reply with coordination details shortly.
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className="space-y-6" noValidate role="form" aria-label="Contact form">
        <div className="form-grid">
          <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.2em] text-gray-azure-subtle">
            Name
            <Input
              type="text"
              name="name"
              value={formState.name}
              onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
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
              onChange={(event) => setFormState((prev) => ({ ...prev, organization: event.target.value }))}
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
              onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
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
            onChange={(event) => setFormState((prev) => ({ ...prev, message: event.target.value }))}
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
          <Button type="submit">
            Submit Inquiry
          </Button>
        </div>
      </form>
    </div>
  );
}
