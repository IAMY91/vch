import ContactForm from '@/components/website/ContactForm';
import Footer from '@/components/website/Footer';
import Header from '@/components/website/Header';
import OrbitMark from '@/components/website/OrbitMark';

const perspectives = [
  ['01', 'Speaking', 'Ideas that open a room', 'Keynotes, panels, interviews, and moderated conversations that make complexity accessible and leave space for genuine exchange.', '#speaking'],
  ['02', 'Science', 'Evidence with a wider horizon', 'Scientific work, research communication, and interdisciplinary inquiry—ideas tested in the world, then translated with care.', '#science'],
  ['03', 'Circles', 'Conversation with depth', 'Facilitated spaces built around attention, trust, and participation, because attention changes the quality of a room.', '#circles'],
  ['04', 'Field notes', 'Learning across borders', 'Observations shaped by people, places, and unfamiliar perspectives—held as questions rather than easy conclusions.', '#field-notes'],
] as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Scientist · Speaker · Circle Leader · Traveler</p>
            <h1 id="hero-title">Where science meets <em>human connection.</em></h1>
            <p className="hero-lede">Verena Claudia Haage brings research, courageous conversation, and a global perspective into rooms where people are ready to think deeply—and move forward together.</p>
            <div className="button-row">
              <a className="button button-primary" href="#contact">Invite Verena to speak <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#about">Explore her work <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <OrbitMark />
            <p className="visual-note"><span>Observation 01</span> Inquiry becomes meaningful<br />when it is shared.</p>
          </div>
          <p className="hero-index" aria-hidden="true">01 — 08</p>
        </section>

        <section className="intro ruled-section" id="about" aria-labelledby="about-title">
          <p className="section-label">01 / About</p>
          <div className="intro-copy">
            <h2 id="about-title">Rigorous thinking.<br /><em>Human spaces.</em></h2>
            <p className="large-copy">Trained as a scientist and shaped by encounters across disciplines, communities, and borders, Verena works at the intersection of knowledge and lived experience. On stage, in institutions, and in circles, she makes complexity accessible without making it small.</p>
            <p>Her practice begins with a simple premise: meaningful questions deserve both evidence and attention. She gathers different perspectives without smoothing away what makes them distinct.</p>
            <div className="resource-row" aria-label="Biography downloads">
              <span>Verified biography files</span>
              <span className="status">Unpublished pending source approval</span>
            </div>
          </div>
        </section>

        <section className="perspectives" aria-labelledby="expertise-title">
          <div className="section-heading">
            <p className="section-label">02 / Practice</p>
            <h2 id="expertise-title">One practice, <em>four perspectives</em></h2>
          </div>
          <div className="card-grid">
            {perspectives.map(([number, label, title, copy, href]) => (
              <a className="perspective-card" href={href} key={number}>
                <span className="card-number">{number}</span>
                <span className="card-label">{label}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="speaking dark-section" id="speaking" aria-labelledby="speaking-title">
          <div>
            <p className="section-label light">03 / Speaking and Keynotes</p>
            <h2 id="speaking-title">Bring depth, clarity, and <em>genuine presence</em> to the conversation.</h2>
          </div>
          <div className="speaking-copy">
            <p>Verena designs contributions for the people in the room—not a generic performance delivered at them. Formats may include keynotes, fireside conversations, workshops, panels, circle-based sessions, interviews, and advisory exchanges.</p>
            <ul className="format-list" aria-label="Speaking formats">
              <li><span>01</span> Keynotes &amp; talks</li><li><span>02</span> Panels &amp; interviews</li>
              <li><span>03</span> Moderated conversations</li><li><span>04</span> Participatory workshops</li>
            </ul>
            <a className="button button-light" href="#contact">Discuss an event <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="split-section" id="science" aria-labelledby="science-title">
          <p className="section-label">04 / Scientific Research and Publications</p>
          <div>
            <h2 id="science-title">Evidence, translated <em>with care.</em></h2>
            <p className="large-copy">Research summaries, specialist topics, selected publications, and projects will be published only after each claim has been checked against primary records.</p>
            <div className="proof-panel">
              <p className="eyebrow">Selected work and recognition</p>
              <h3>Proof belongs in the open.</h3>
              <p>Verified institutions, publications, talks, media appearances, and collaborations will appear here.</p>
              <span className="status">Currently unpublished</span>
            </div>
          </div>
        </section>

        <section className="circles sand-section" id="circles" aria-labelledby="circles-title">
          <div className="rings-small" aria-hidden="true"><i /><i /><i /></div>
          <p className="section-label">05 / Circle Facilitation and Workshops</p>
          <div className="narrow-copy">
            <h2 id="circles-title">Gather around a <em>meaningful question.</em></h2>
            <p>Circle practice is a structured invitation to listen, contribute, and notice what a faster format misses. It is suited to groups willing to participate with care—not therapy, crisis support, or a substitute for professional clinical care.</p>
            <p>Sessions are shaped around context, purpose, group size, access needs, and clear agreements. Possible formats and boundaries are discussed before any engagement.</p>
            <a className="button button-primary" href="#contact">Plan a circle <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="journal" id="field-notes" aria-labelledby="journal-title">
          <div className="section-heading">
            <p className="section-label">06 / Field Notes</p>
            <h2 id="journal-title"><em>Field Notes</em> from the Future</h2>
            <p>An editorial home for research in plain language, travel observations, post-talk reflections, bounded circle practices, short explainers, reading notes, and conversations.</p>
          </div>
          <div className="journal-empty">
            <span className="observation-mark">+</span>
            <div><p className="eyebrow">Editorial archive</p><h3>The notebook is being prepared.</h3><p>Entries will appear with durable links, dates, authorship, social previews, and related reading. No draft material is presented as published work.</p></div>
          </div>
          <div className="newsletter">
            <div><label htmlFor="newsletter-email">Occasional Field Notes</label><p>Low-frequency dispatches. Your address is used only for this request and is never sold.</p></div>
            <input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="Signup opening soon" disabled />
            <button type="button" disabled>Unpublished</button>
          </div>
        </section>

        <section className="media ruled-section" id="media" aria-labelledby="media-title">
          <p className="section-label">07 / Media and Interview Enquiries</p>
          <div>
            <h2 id="media-title">A clear voice for <em>complex conversations.</em></h2>
            <p className="large-copy">Approved photography, interview topics, press mentions, recordings, biographies, and downloadable press assets will live here once verified and cleared for publication.</p>
            <div className="resource-row"><span>Speaker sheet &amp; press kit</span><span className="status">Unpublished pending approval</span></div>
            <a className="text-link" href="#contact">Request the speaker sheet <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="contact dark-section" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="section-label light">08 / Contact</p>
            <h2 id="contact-title">What conversation <em>could we begin?</em></h2>
            <p>For speaking, facilitation, interviews, collaborations, and advisory work, share a little about your audience, purpose, location, and timing.</p>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
