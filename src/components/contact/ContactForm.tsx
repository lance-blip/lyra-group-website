"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      setMessage(
        "Thanks — your consultation request was received. We'll be in touch during business hours.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try WhatsApp or email.");
    }
  }

  const field =
    "mt-1 w-full rounded-lg border border-lyra-border bg-white px-3 py-2.5 text-sm text-lyra-text outline-none ring-lyra-accent focus:ring-2";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-lyra-primary">
          Name *
          <input className={field} name="name" required autoComplete="name" />
        </label>
        <label className="block text-sm font-medium text-lyra-primary">
          Company name *
          <input
            className={field}
            name="company"
            required
            autoComplete="organization"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-lyra-primary">
          Email *
          <input
            className={field}
            type="email"
            name="email"
            required
            autoComplete="email"
          />
        </label>
        <label className="block text-sm font-medium text-lyra-primary">
          Phone *
          <input
            className={field}
            type="tel"
            name="phone"
            required
            autoComplete="tel"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-lyra-primary">
          Type of debt *
          <select className={field} name="debtType" required defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option value="commercial">Commercial</option>
            <option value="consumer">Consumer</option>
            <option value="legal">Legal</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-lyra-primary">
          Estimated value of debt
          <input className={field} name="debtValue" placeholder="e.g. R120,000" />
        </label>
      </div>

      <label className="block text-sm font-medium text-lyra-primary">
        Brief description *
        <textarea
          className={field}
          name="description"
          required
          rows={4}
          placeholder="Age of debt, number of debtors, what you've tried so far…"
        />
      </label>

      <button
        type="submit"
        className="btn-primary w-full sm:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Get a Free Consultation"}
      </button>

      {message && (
        <p
          className={`text-sm ${
            status === "ok" ? "text-lyra-success" : "text-red-700"
          }`}
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}
