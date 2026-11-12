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
    const body = `Name: ${d.get("name")}\nOrganization: ${d.get("organization") || "—"}\nReply to: ${d.get("email")}\n\n${d.get("message")}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Your email app will open a draft addressed to me. Please review and send it there; this website has not sent your message.",
    );
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <p className="form-note">
        Tell me about your event, collaboration or question. I’m looking forward
        to hearing from you.
      </p>
      <p className="form-note">Fields marked * are required.</p>
      <div className="form-grid">
        <label>
          Your name *<input name="name" autoComplete="name" required />
        </label>
        <label>
          Your email *
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Organization
          <input name="organization" autoComplete="organization" />
        </label>
        <label>
          Your enquiry
          <select name="opportunity">
            <option>Speaking or keynote</option>
            <option>Workshop or facilitation</option>
            <option>Interview or media</option>
            <option>Research collaboration</option>
            <option>Something else</option>
          </select>
        </label>
        <label className="full">
          Tell me a little more *
          <textarea
            name="message"
            rows={5}
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
        Open email draft <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">
        Opens a draft in your email app. You review and send it there.
      </p>
      <p className="form-status" role="status">
        {status}
      </p>
    </form>
  );
}
