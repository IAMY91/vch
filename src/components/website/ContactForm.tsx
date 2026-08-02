'use client';

import { FormEvent, useState } from 'react';

const intents = ['Speaking', 'Facilitation', 'Interview', 'Collaboration', 'Advisory'];
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export default function ContactForm() {
  const [intent, setIntent] = useState('Speaking');
  const [status, setStatus] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); setStatus('Please complete the required fields.'); return; }
    const data = new FormData(form);
    const body = Array.from(data.entries()).filter(([key]) => key !== 'website').map(([key, value]) => `${key}: ${value}`).join('\n');
    if (!contactEmail) {
      setStatus('The verified contact address is not published yet. Please return when enquiries open.');
      return;
    }
    setStatus('Your email application will open with the enquiry details.');
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(`${intent} enquiry`)}&body=${encodeURIComponent(body)}`;
  }
  return <form className="contact-form" onSubmit={submit} noValidate>
    <fieldset><legend>I’m interested in…</legend><div className="intent-grid">{intents.map(item => <label key={item}><input type="radio" name="opportunity" value={item} checked={intent === item} onChange={() => setIntent(item)} /><span>{item}</span></label>)}</div></fieldset>
    <div className="form-grid">
      <label>Name *<input name="name" autoComplete="name" required /></label>
      <label>Organization<input name="organization" autoComplete="organization" /></label>
      <label>Email *<input name="email" type="email" autoComplete="email" required /></label>
      <label>Date<input name="date" type="date" /></label>
      <label>Location or virtual format<input name="location" /></label>
      <label>Audience<input name="audience" /></label>
      <label>Budget range<select name="budget"><option value="">Select a range</option><option>To be discussed</option><option>Under €2,500</option><option>€2,500–€5,000</option><option>€5,000+</option></select></label>
      <label className="full">Message *<textarea name="message" rows={5} required /></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <label className="consent full"><input type="checkbox" name="consent" required /> <span>I consent to my details being used to respond to this enquiry. They will not be added to a mailing list. *</span></label>
    </div>
    <div className="form-actions"><button className="button button-terracotta" type="submit">Start a conversation <span aria-hidden="true">↗</span></button>{contactEmail ? <p>Prefer email? <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p> : <p>Direct contact details are unpublished pending verification.</p>}</div>
    <p className="form-status" aria-live="polite">{status}</p>
  </form>;
}
