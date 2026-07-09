"use client";

import { useState } from "react";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { site, waLink } from "@/lib/site";

/**
 * Contact form without a backend (TODO: wire to a real form service or
 * API route when available). Submitting opens the visitor's mail app
 * pre-filled, or WhatsApp — then shows a friendly success state.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const composeBody = () =>
    `Hello The Samson Foundation,\n\n${message}\n\nFrom: ${name}${email ? ` (${email})` : ""}`;

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(composeBody());
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const handleWhatsApp = () => {
    if (!name || !message) return;
    window.open(waLink(composeBody()), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-forest-600/10 bg-white p-10 text-center shadow-sm"
      >
        <CheckCircle2 className="h-12 w-12 text-forest-500" aria-hidden />
        <h3 className="mt-4 font-heading text-xl font-bold text-forest-800">
          Thank you, {name.split(" ")[0] || "friend"}!
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-stone">
          Your message has been handed to your mail or WhatsApp app — just press
          send there and we will get back to you as soon as we can.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="btn-outline-dark mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleEmail}
      className="rounded-2xl border border-forest-600/10 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-ink">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-lg border border-stone/30 bg-cream px-4 py-3 text-sm placeholder:text-stone/60"
            placeholder="e.g. Grace Danjuma"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-ink">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-lg border border-stone/30 bg-cream px-4 py-3 text-sm placeholder:text-stone/60"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 w-full rounded-lg border border-stone/30 bg-cream px-4 py-3 text-sm placeholder:text-stone/60"
            placeholder="How would you like to help, or how can we help you?"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="submit" className="btn-forest">
          <Mail className="h-4 w-4" aria-hidden />
          Send by Email
        </button>
        <button
          type="button"
          onClick={handleWhatsApp}
          disabled={!name || !message}
          className="btn-outline-dark disabled:cursor-not-allowed disabled:opacity-50"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          Send via WhatsApp
        </button>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-stone">
        Your message opens in your own mail or WhatsApp app — nothing is stored
        on this website.
      </p>
    </form>
  );
}
