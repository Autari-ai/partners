"use client";

import { useState, type FormEvent } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { EXPERTISE_OPTIONS, HEARD_ABOUT_OPTIONS } from "@/lib/constants";
import { submitPartnerForm } from "@/lib/submitForm";
import type { PartnerFormData } from "@/types";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-bark/10 bg-cream px-4 py-3 text-sm text-bark placeholder:text-bark/30 transition-colors focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember";

const labelClasses = "block text-xs font-medium uppercase tracking-[0.08em] text-bark/50 mb-2";

export default function PartnerForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const fd = new FormData(e.currentTarget);
    const data: PartnerFormData = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: (fd.get("phone") as string) || undefined,
      company: (fd.get("company") as string) || undefined,
      expertise: fd.get("expertise") as string,
      heardAboutUs: (fd.get("heardAboutUs") as string) || undefined,
      message: (fd.get("message") as string) || undefined,
    };

    try {
      await submitPartnerForm(data);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="apply" className="bg-linen py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <AnimatedSection>
            <div className="text-5xl">&#10003;</div>
            <h2 className="mt-6 text-3xl font-bold tracking-[-0.03em]">
              Application received.
            </h2>
            <p className="mt-4 text-base text-bark/60">
              We will review your details and get back to you within 48 hours.
              In the meantime, keep doing what you do best.
            </p>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="bg-linen py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <AnimatedSection>
          <SectionLabel>APPLY NOW</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
            Ready to start earning?
          </h2>
          <p className="mt-4 text-base text-bark/60">
            Tell us about your expertise. We will get back to you within 48
            hours.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Full name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className={inputClasses}
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={inputClasses}
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={inputClasses}
                  placeholder="+44 7000 000000"
                />
              </div>
              <div>
                <label htmlFor="company" className={labelClasses}>
                  Company / Business name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className={inputClasses}
                  placeholder="Acme Ltd"
                />
              </div>
            </div>

            <div>
              <label htmlFor="expertise" className={labelClasses}>
                Area of expertise *
              </label>
              <select
                id="expertise"
                name="expertise"
                required
                className={inputClasses}
                defaultValue=""
              >
                <option value="" disabled>
                  Select your field
                </option>
                {EXPERTISE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="heardAboutUs" className={labelClasses}>
                How did you hear about us?
              </label>
              <select
                id="heardAboutUs"
                name="heardAboutUs"
                className={inputClasses}
                defaultValue=""
              >
                <option value="">Prefer not to say</option>
                {HEARD_ABOUT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className={labelClasses}>
                Anything else you would like to share?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={inputClasses}
                placeholder="Tell us about your process, your clients, or what excites you about partnering..."
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again or email us at{" "}
                <a
                  href="mailto:noor@autari.co.uk"
                  className="underline"
                >
                  noor@autari.co.uk
                </a>
                .
              </p>
            )}

            <Button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto"
            >
              {status === "submitting" ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
