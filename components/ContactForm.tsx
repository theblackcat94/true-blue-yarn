"use client";

import type { FormEvent } from "react";

const reasons = [
  { value: "Guest enquiry", label: "I want to be a guest", detail: "Join Natasha for a conversation on the podcast." },
  { value: "Story idea", label: "I have a story idea", detail: "Share a perspective, person or topic worth exploring." },
  { value: "Project collaboration", label: "Let's collaborate", detail: "Talk about documentary, production or community work." },
  { value: "Sponsorship", label: "Support the work", detail: "Discuss sponsorship or another way to get involved." },
  { value: "General enquiry", label: "Something else", detail: "Ask a question or simply start a conversation." },
];

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const reason = String(data.get("reason") || "General enquiry");
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const organisation = String(data.get("organisation") || "").trim();
    const message = String(data.get("message") || "").trim();
    const body = [
      `Enquiry type: ${reason}`,
      `Name: ${name}`,
      `Email: ${email}`,
      organisation ? `Organisation: ${organisation}` : "",
      "",
      message,
    ].filter((line, index) => line || index === 4).join("\n");
    window.location.href = `mailto:natasha@trueblueyarn.com.au?subject=${encodeURIComponent(`True Blue Yarn — ${reason}`)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <fieldset className="contact-reasons"><legend>What would you like to talk about? <span>*</span></legend><div className="reason-grid">{reasons.map(reason=><label className="reason-card" key={reason.value}><input type="radio" name="reason" value={reason.value} required /><span className="reason-indicator" aria-hidden="true" /><strong>{reason.label}</strong><small>{reason.detail}</small></label>)}</div></fieldset>
    <div className="contact-fields"><label>Your name *<input name="name" type="text" autoComplete="name" required /></label><label>Email address *<input name="email" type="email" autoComplete="email" required /></label><label className="field-wide">Organisation <small>Optional</small><input name="organisation" type="text" autoComplete="organization" /></label><label className="field-wide">Your message *<textarea name="message" rows={6} required placeholder="Tell us a little about what you have in mind…" /></label></div>
    <div className="contact-submit"><p>Submitting opens your email app with this message ready to send. Nothing is stored on this website.</p><button className="button button-dark" type="submit">Prepare email <span aria-hidden="true">↗</span></button></div>
  </form>;
}
