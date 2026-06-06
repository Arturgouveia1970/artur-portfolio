"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/data/content";

type FormStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("FORM SUBMIT CLICKED");

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-[#c7b9a5] p-8 text-[#0f0f10] md:grid-cols-[0.9fr_1.1fr] md:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em]">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Let&apos;s talk about ecommerce, stock systems or developer
            opportunities.
          </h2>

          <p className="mt-6 text-sm leading-6 text-[#1f2328]/80">
            Prefer email? Contact me directly at{" "}
            <a
              href={`mailto:${profile.email}`}
              className="font-semibold underline"
            >
              {profile.email}
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-[#0f0f10]"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-2xl border border-[#0f0f10]/15 bg-[#f5f3ee] px-4 py-3 text-sm text-[#0f0f10] outline-none transition focus:border-[#0f0f10]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-[#0f0f10]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-2xl border border-[#0f0f10]/15 bg-[#f5f3ee] px-4 py-3 text-sm text-[#0f0f10] outline-none transition focus:border-[#0f0f10]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-[#0f0f10]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-2xl border border-[#0f0f10]/15 bg-[#f5f3ee] px-4 py-3 text-sm text-[#0f0f10] outline-none transition focus:border-[#0f0f10]"
              placeholder="Tell me what you would like to discuss..."
            />
          </div>

          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-[#0f0f10] px-6 py-3 text-sm font-semibold text-[#f5f3ee] transition hover:bg-[#1f2328] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "success" ? (
            <p className="text-sm font-semibold text-[#0f0f10]">
              Message sent. I&apos;ll get back to you soon.
            </p>
          ) : null}

          {status === "error" ? (
            <p className="text-sm font-semibold text-[#7a1f1f]">
              Something went wrong. Please email me directly at {profile.email}.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}