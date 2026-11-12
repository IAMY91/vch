'use client';

import { useState } from 'react';

const links = ['About', 'Speaking', 'Science', 'Leadership', 'Media', 'Contact'];

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a className="wordmark" href="#home" aria-label="Verena Claudia Haage, home"><strong>VERENA</strong><span>CLAUDIA HAAGE</span></a>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}><span className="sr-only">{open ? 'Close' : 'Open'} menu</span><i /><i /></button>
    <nav id="site-nav" className={open ? 'nav-open' : ''} aria-label="Primary navigation">
      <a href="#home" onClick={() => setOpen(false)}>Home</a>
      {links.map(link => <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} onClick={() => setOpen(false)}>{link}</a>)}
    </nav>
    <a className="header-cta" href="#contact">Invite Verena <span aria-hidden="true">↗</span></a>
  </header>;
}
