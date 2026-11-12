"use client";
import { FormEvent, useState } from "react";
import { contactEmail } from "@/lib/profileSources";
export default function ContactForm() {
  const [status, setStatus] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    if (d.get("website")) return;
    const subject = `${d.get("opportunity")} enquiry — ${d.get("name")}`;
    const body = `Name: ${d.get("name")}\nOrganization: ${d.get("organization") || "—"}\nEmail: ${d.get("email")}\n\n${d.get("message")}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Your email app has been requested. Review the draft there and send it when ready. If no app opens, use the email address below.",
    );
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <p className="form-note">
        Have an event, collaboration or question in mind? Prepare an email
        below.
      </p>
      <div className="form-grid">
        <label>
          Your name *<input name="name" autoComplete="name" required />
        </label>
        <label>
          Email *
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Organization
          <input name="organization" autoComplete="organization" />
        </label>
        <label>
          I’m interested in
          <select name="opportunity">
            <option>Speaking or keynote</option>
            <option>Workshop or facilitation</option>
            <option>Interview or media</option>
            <option>Research collaboration</option>
            <option>Something else</option>
          </select>
        </label>
        <label className="full">
          Tell Verena a little more *
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Topic, audience, date, location…"
          />
        </label>
        <label className="honeypot" aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button className="button button-light" type="submit">
        Prepare email <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">
        Opens your email app. This website does not store or send your message.
      </p>
      <p className="form-status" role="status">
        {status}
      </p>
      <a className="direct-email" href={`mailto:${contactEmail}`}>
        {contactEmail}
      </a>
    </form>
  );
}
