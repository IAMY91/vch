import Image from "next/image";
import Header from "@/components/website/Header";
import Footer from "@/components/website/Footer";
import ContactForm from "@/components/website/ContactForm";
import PublicationLibrary from "@/components/website/PublicationLibrary";
import AppearanceArchive from "@/components/website/AppearanceArchive";
import VideoFeature from "@/components/website/VideoFeature";
import { profileSources as s, shortBio } from "@/lib/profileSources";
const External = ({
  href,
  children,
  className = "inline-link",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <a className={className} href={href} target="_blank" rel="noreferrer">
    {children} <span aria-hidden="true">↗</span>
  </a>
);
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> Neuroimmunologist · Academic
              leadership · Berlin
            </p>
            <h1 id="hero-title">
              Better science.
              <br />
              <em>More human.</em>
            </h1>
            <p className="hero-name">
              Verena Claudia Haage<span>, PhD</span>
            </p>
            <p className="hero-lede">
              Understanding the brain. Reimagining how we work together.
              Building a culture of science where people and ideas can thrive.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="#leadership">
                Explore her work <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href="#contact">
                Invite a conversation ↗
              </a>
            </div>
            <div className="hero-footnote">
              <span>Researcher at ECRC–Charité</span>
              <span>Co-founder of SciLead</span>
            </div>
          </div>
          <figure className="hero-portrait">
            <div className="portrait-frame">
              <Image
                src="/images/verena-portrait.webp"
                alt="Verena Claudia Haage, neuroimmunologist and SciLead co-founder"
                width={1200}
                height={1200}
                priority
                sizes="(max-width: 760px) 100vw, 45vw"
              />
              <span className="portrait-corner" aria-hidden="true">
                A curious mind.
                <br />A collective future.
              </span>
            </div>
            <figcaption>
              Verena Claudia Haage ·{" "}
              <a
                href={s.circadianMedicine.href}
                target="_blank"
                rel="noreferrer"
              >
                Portrait via TRR 418
              </a>
            </figcaption>
          </figure>
          <div className="hero-bottom">
            <span>Science with depth. Leadership with humanity.</span>
            <a href="#about">Discover the connections ↓</a>
          </div>
        </section>
        <div className="context-strip">
          <span>Across research & public dialogue</span>
          <a href={s.circadianMedicine.href}>
            Charité <small>Current research</small>
          </a>
          <a href={s.scilead.href}>
            SciLead <small>Co-founder</small>
          </a>
          <a href={s.berlinScienceWeek.href}>
            Berlin Science Week <small>2026 speaker</small>
          </a>
          <a href={s.fallingWalls.href}>
            Falling Walls <small>2023 Press Fellow</small>
          </a>
          <a href={s.elifeAmbassador.href}>
            eLife <small>Community Ambassador</small>
          </a>
        </div>
        <section className="section intro" id="about">
          <div className="section-kicker">
            <span>01 / The connection</span>
            <span>Research ↔ People ↔ Culture</span>
          </div>
          <div className="intro-grid">
            <h2>
              The science matters.
              <br />
              <em>
                So do the people
                <br />
                who make it.
              </em>
            </h2>
            <div className="intro-text">
              <p className="large-copy">
                Verena is a neuroimmunologist who brings the same curiosity to
                the culture of science that she brings to the brain.
              </p>
              <p>
                As a senior postdoctoral scientist at ECRC–Charité in Berlin,
                she studies how circadian rhythms shape immune-cell dynamics in
                multiple sclerosis. Her work builds on research into human
                microglia and neurodegeneration, including a postdoctoral
                appointment at Columbia University.
              </p>
              <p>
                Alongside her research, she co-founded SciLead to advance
                sustainable leadership in academia. Through research, workshops
                and public dialogue, she connects scientific evidence with the
                everyday realities of collaboration, mentorship and mental
                health.
              </p>
              <div className="inline-links">
                <External href={s.circadianMedicine.href}>
                  Current research profile
                </External>
                <External href={s.berlinScienceWeek.href}>
                  Speaker profile
                </External>
              </div>
            </div>
          </div>
          <div className="journey">
            <div>
              <span>2019</span>
              <h3>Doctorate in Berlin</h3>
              <p>
                PhD in Medical Neurosciences, Charité. Research on microglial
                gene signatures.
              </p>
              <External href={s.dissertation.href}>Doctoral record</External>
            </div>
            <div>
              <span>Columbia University</span>
              <h3>A human perspective</h3>
              <p>
                Postdoctoral research on human microglia and neurodegenerative
                disease in New York.
              </p>
              <External href={s.fallingWalls.href}>2023 profile</External>
            </div>
            <div>
              <span>Today · Berlin</span>
              <h3>Rhythms & research culture</h3>
              <p>
                Circadian neuroimmunology at ECRC–Charité, alongside leadership
                and facilitation with SciLead.
              </p>
              <External href={s.circadianMedicine.href}>Current work</External>
            </div>
          </div>
        </section>
        <section className="leadership section dark-section" id="leadership">
          <div className="section-kicker">
            <span>02 / Academic leadership</span>
            <span>From evidence to everyday practice</span>
          </div>
          <div className="leadership-heading">
            <h2>
              Good science needs
              <br />
              <em>good conditions.</em>
            </h2>
            <div>
              <p className="large-copy">
                Leadership is part of the research environment. It deserves the
                same attention as the research itself.
              </p>
              <p>
                Verena’s first-author study in <i>EMBO Reports</i> examined
                leadership training in German academia. As a SciLead co-founder,
                she translates this concern into participatory spaces for
                learning and collaboration.
              </p>
              <External href="https://doi.org/10.15252/embr.202153592">
                Read the leadership study
              </External>
            </div>
          </div>
          <div className="leadership-pillars">
            <article>
              <span className="line-icon" aria-hidden="true">
                ↗
              </span>
              <h3>
                Leadership
                <br />
                that can be learned.
              </h3>
              <p>
                Self-leadership, mentorship and shared responsibility as
                foundations for a sustainable research culture.
              </p>
            </article>
            <article>
              <span className="line-icon" aria-hidden="true">
                ◎
              </span>
              <h3>
                Collaboration
                <br />
                that makes room.
              </h3>
              <p>
                Agile ways of working, open communication and peer learning for
                the complexity of science and medicine.
              </p>
            </article>
            <article>
              <span className="line-icon" aria-hidden="true">
                ✳
              </span>
              <h3>
                People
                <br />
                who can thrive.
              </h3>
              <p>
                Mental health, resilience and more inclusive communities across
                academic career stages.
              </p>
            </article>
          </div>
          <div className="scilead-panel">
            <div>
              <p className="eyebrow">Co-founder / SciLead</p>
              <h3>
                Shape a better
                <br />
                future of work in science.
              </h3>
            </div>
            <div>
              <p>
                The Sustainable Leadership for Science Initiative brings
                together research, workshops and community exchange on the way
                science is organized and led.
              </p>
              <External href={s.scilead.href}>Discover SciLead</External>
            </div>
          </div>
          <div className="leadership-evidence">
            <External href={s.agile.href}>
              Agile collaboration · BIH workshop
            </External>
            <External href={s.glassCeiling.href}>
              Glass ceilings · GSO panel
            </External>
            <External href={s.elifeSurvey.href}>
              Postdoc departures · eLife survey
            </External>
          </div>
        </section>
        <section className="section research-section" id="science">
          <div className="section-kicker">
            <span>03 / Research & publications</span>
            <span>Brain immunity. Human evidence.</span>
          </div>
          <div className="research-heading">
            <div>
              <h2>
                A closer look at
                <br />
                <em>the brain’s guardians.</em>
              </h2>
              <p className="large-copy">
                Microglia are the brain’s resident immune cells. Verena
                investigates their diversity, how they change in disease, and
                how we can study their function.
              </p>
            </div>
            <div className="project-card">
              <p className="eyebrow">Current project / TRR 418 · B01</p>
              <div className="circadian-mark" aria-hidden="true">
                <span />
              </div>
              <h3>
                When timing
                <br />
                changes immunity.
              </h3>
              <p>
                Circadian rhythms and chronotherapy in multiple sclerosis:
                investigating daily patterns in immunity, sleep and metabolism,
                and their relationship to disease.
              </p>
              <External href={s.circadianMedicine.href}>
                Explore the research project
              </External>
            </div>
          </div>
          <div className="publications-heading">
            <h3>Selected publications</h3>
            <div>
              <a href="/resources/selected-publications.bib" download>
                Download BibTeX ↓
              </a>
              <External href={s.orcid.href}>ORCID record</External>
            </div>
          </div>
          <PublicationLibrary />
          <p className="research-note">
            A curated selection of published work, distinct from preprints and
            conference abstracts. For the wider record, visit{" "}
            <a href={s.researchGate.href} target="_blank" rel="noreferrer">
              ResearchGate ↗
            </a>
            . Experimental findings are presented in their research context.
          </p>
        </section>
        <section
          className="section speaking-section dark-section"
          id="speaking"
        >
          <div className="section-kicker">
            <span>04 / Speaking & facilitation</span>
            <span>
              Ideas are a starting point. Dialogue takes them further.
            </span>
          </div>
          <div className="speaking-heading">
            <h2>
              Conversations
              <br />
              <em>
                that move science
                <br />
                forward.
              </em>
            </h2>
            <div>
              <p className="large-copy">
                Bringing research, lived academic experience and a facilitator’s
                attention into the same room.
              </p>
              <p>
                Explore documented workshops, panels and interviews, or start a
                conversation about a keynote, research talk or participatory
                session for your audience.
              </p>
              <a className="button button-light" href="#contact">
                Discuss an invitation ↗
              </a>
            </div>
          </div>
          <div className="topic-list">
            <span>Academic leadership & mentorship</span>
            <span>Mental health & research culture</span>
            <span>Agile collaboration in science</span>
            <span>Microglia & neuroimmunology</span>
          </div>
          <div className="archive-heading">
            <h3>Selected appearances</h3>
            <span>Programmes, recordings & resources</span>
          </div>
          <AppearanceArchive />
        </section>
        <section className="section media-section" id="media">
          <div className="section-kicker">
            <span>05 / Science in conversation</span>
            <span>Listen. Read. Connect.</span>
          </div>
          <div className="media-heading">
            <h2>
              Beyond
              <br />
              <em>the lab.</em>
            </h2>
            <p className="large-copy">
              Making space for the science—and for the questions about how we do
              it.
            </p>
          </div>
          <div className="media-grid">
            <VideoFeature />
            <div className="media-stories">
              <External href={s.podcast.href} className="media-story">
                <span className="eyebrow">
                  Podcast / Neuroscience and Beyond · 2025
                </span>
                <h3>The Brain’s Hidden Guardians</h3>
                <p>Microglia in health and disease, in conversation.</p>
                <span>Listen to the episode</span>
              </External>
              <External href={s.culturePodcast.href} className="media-story">
                <span className="eyebrow">
                  Podcast / Neuroscience and Beyond · Episode 6
                </span>
                <h3>Rethinking the Research Culture</h3>
                <p>
                  The challenges of academia and the conditions researchers
                  need.
                </p>
                <span>Listen to the conversation</span>
              </External>
              <External href={s.womenInScience.href} className="media-story">
                <span className="eyebrow">
                  Feature / ZEIT für X · 25 January 2024
                </span>
                <h3>Starke Frauen für die Wissenschaft</h3>
                <p>
                  Visibility, networks and women in science through the Zia
                  fellowship.
                </p>
                <span>Read the German feature</span>
              </External>
            </div>
          </div>
        </section>
        <section className="section community-section" id="circles">
          <div className="community-photo">
            <Image
              src="/images/verena-outdoors.webp"
              alt="Verena outdoors by the water in warm evening light"
              width={1000}
              height={1256}
              sizes="(max-width: 760px) 100vw, 38vw"
            />
            <p>
              Portrait:{" "}
              <a href={s.wildWoman.href} target="_blank" rel="noreferrer">
                The Wild Woman Project
              </a>
            </p>
          </div>
          <div className="community-copy">
            <p className="eyebrow">06 / Community & connection</p>
            <h2>
              Room to listen.
              <br />
              <em>Space to belong.</em>
            </h2>
            <p className="large-copy">
              Beyond the lab and the conference stage, Verena creates spaces for
              connection.
            </p>
            <p>
              A trained Wild Woman Project circle facilitator in Berlin, she
              brings together her love of nature, community and exploration.
              This community practice sits alongside her scientific work and her
              commitment to more human ways of coming together.
            </p>
            <div className="inline-links">
              <External href={s.wildWoman.href}>
                Circle facilitator profile
              </External>
              <External href={s.wildWomanInterview.href}>
                Read the circle leader interview
              </External>
            </div>
          </div>
        </section>
        <section className="section resources-section" id="resources">
          <div className="section-kicker">
            <span>07 / For hosts & collaborators</span>
            <span>A useful starting point</span>
          </div>
          <div className="resources-grid">
            <div>
              <h2>
                Make the
                <br />
                <em>introduction.</em>
              </h2>
              <p>Biography, publications and source material in one place.</p>
            </div>
            <div>
              <details open>
                <summary>
                  Short biography <span aria-hidden="true">+</span>
                </summary>
                <p>{shortBio}</p>
                <a
                  className="inline-link"
                  href="/resources/verena-haage-bio.txt"
                  download
                >
                  Download biography · TXT ↓
                </a>
              </details>
              <details>
                <summary>
                  Research papers & doctoral thesis{" "}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Read the selected papers above, export citations, or explore
                  the original doctoral dissertation.
                </p>
                <div className="inline-links">
                  <a href="/resources/selected-publications.bib" download>
                    Selected citations · BibTeX ↓
                  </a>
                  <External href="https://refubium.fu-berlin.de/bitstream/handle/fub188/26233/Diss_V.Haage.pdf">
                    Doctoral dissertation · PDF
                  </External>
                </div>
              </details>
              <details>
                <summary>
                  Slides & presentation resources{" "}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Event programmes and related reading are linked in the
                  speaking archive. For presentation slides or materials for a
                  specific session, please contact Verena.
                </p>
                <a className="inline-link" href="#contact">
                  Ask about presentation materials ↗
                </a>
              </details>
              <details>
                <summary>
                  Profiles, photography & source notes{" "}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Find the original profiles and image credits, including
                  current and historical affiliations.
                </p>
                <a className="inline-link" href="/sources/">
                  Browse sources & credits ↗
                </a>
              </details>
            </div>
          </div>
        </section>
        <section className="section contact-section dark-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">08 / Let’s connect</p>
            <h2>
              A good question
              <br />
              can start
              <br />
              <em>something.</em>
            </h2>
            <p className="large-copy">
              A workshop. A research collaboration. A conversation your audience
              needs to have.
            </p>
            <p>Based in Berlin. Connected across disciplines.</p>
            <External href={s.linkedin.href}>Connect on LinkedIn</External>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
