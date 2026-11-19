"use client";

import type { FormEvent } from "react";

export default function NewsletterRequest() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") || "").trim();
    const subject = encodeURIComponent("True Blue Yarn updates request");
    const body = encodeURIComponent(`Please add ${email} to the True Blue Yarn updates list. I would like to hear about new episodes and projects.\n\nI understand I can ask to be removed at any time.`);
    window.location.href = `mailto:natasha@trueblueyarn.com.au?subject=${subject}&body=${body}`;
  }

  return <form className="newsletter-form" onSubmit={handleSubmit}><label htmlFor="newsletter-email">Your email address</label><div><input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /><button type="submit">Request updates <span aria-hidden="true">↗</span></button></div><p>This opens an email for you to send to Natasha. Your address is not stored on this website.</p></form>;
}
