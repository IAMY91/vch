import Image from "next/image";
import BrandBand from "@/components/website/BrandBand";
import ResearchIcon from "@/components/website/ResearchIcon";
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
              I study the brain’s immune cells and help shape a culture of
              science where people and ideas can thrive. As a researcher and
              SciLead co-founder, I connect scientific curiosity with more human
              ways of working.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="#contact">
                Invite me to speak <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#science">
                Explore my research ↓
              </a>
            </div>
            <div className="hero-affiliations">
              <p className="affiliation-label">My research journey</p>
              <p className="affiliation-lede">
                Researcher at ECRC–Charité Berlin
                <br />
                <span>and Columbia University, New York</span>
              </p>
              <div className="affiliation-context">
                <span>ECRC–Charité · Current</span>
                <span>Columbia · Previous appointment</span>
              </div>
              <p className="affiliation-scilead">Co-founder of SciLead</p>
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
        <BrandBand />
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
                I bring the same curiosity to the culture of science that I
                bring to the brain. How can we understand complex systems—and
                create the conditions for people to do meaningful work together?
              </p>
              <p>
                I am a senior postdoctoral scientist at ECRC–Charité in Berlin,
                studying how circadian rhythms shape immune-cell dynamics in
                multiple sclerosis. My work builds on research into human
                microglia and neurodegeneration, including my postdoctoral
                appointment at Columbia University.
              </p>
              <p>
                I co-founded SciLead to advance sustainable leadership in
                academia. Through research, workshops and public dialogue, I
                connect scientific evidence with the everyday realities of
                collaboration, mentorship and mental health.
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
                I completed my PhD in Medical Neurosciences at Charité,
                researching the gene signatures of microglia.
              </p>
              <External href={s.dissertation.href}>Doctoral record</External>
            </div>
            <div>
              <span>Columbia University</span>
              <h3>A human perspective</h3>
              <p>
                At Columbia University in New York, I investigated human
                microglia and their role in neurodegenerative disease.
              </p>
              <External href={s.fallingWalls.href}>2023 profile</External>
            </div>
            <div>
              <span>Today · Berlin</span>
              <h3>Rhythms & research culture</h3>
              <p>
                Today, I combine circadian neuroimmunology at ECRC–Charité with
                leadership and facilitation through SciLead.
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
                In our study published in <i>EMBO Reports</i>, my co-authors and
                I examined leadership training in German academia. Through
                SciLead, I turn this question into opportunities to learn,
                reflect and practise better ways of working together.
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
                I work with self-leadership, mentorship and shared
                responsibility as foundations for a sustainable research
                culture.
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
                I facilitate agile ways of working, open communication and peer
                learning for the complexity of science and medicine.
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
                I create space to talk about mental health, resilience and
                inclusion across academic career stages.
              </p>
            </article>
          </div>
          <div className="scilead-panel">
            <div>
              <a
                className="scilead-signature"
                href={s.scilead.href}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit SciLead"
              >
                <Image
                  src="/logos/scilead.png"
                  alt="SciLead"
                  width={220}
                  height={69}
                />
              </a>
              <p className="eyebrow">Co-founder / SciLead</p>
              <h3>
                Shape a better
                <br />
                future of work in science.
              </h3>
            </div>
            <div>
              <p>
                With my colleagues at the Sustainable Leadership for Science
                Initiative, I bring together research, workshops and community
                exchange to rethink how science is organized and led.
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
          <div className="research-symbols">
            <span>
              <ResearchIcon name="microglia" />
              Human microglia
            </span>
            <span>
              <ResearchIcon name="dna" />
              Gene expression
            </span>
            <span>
              <ResearchIcon name="clock" />
              Circadian rhythms
            </span>
          </div>
          <div className="research-heading">
            <div>
              <h2>
                A closer look at
                <br />
                <em>the brain’s guardians.</em>
              </h2>
              <p className="large-copy">
                Microglia are the brain’s resident immune cells. I investigate
                their diversity, how they change in disease, and how we can
                understand their function through human data and experimental
                models.
              </p>
            </div>
            <div className="project-card">
              <p className="eyebrow">Current project / TRR 418 · B01</p>
              <div className="project-symbol">
                <ResearchIcon name="clock" />
              </div>
              <h3>
                When timing
                <br />
                changes immunity.
              </h3>
              <p>
                In TRR 418’s B01 project, I investigate circadian rhythms in
                multiple sclerosis: how daily patterns in immunity, sleep and
                metabolism relate to disease and potential approaches to
                treatment.
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
            These are selected publications from my research. You can find my
            wider record, including preprints and conference contributions, on{" "}
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
                I bring research, lived academic experience and a facilitator’s
                attention into the same room.
              </p>
              <p>
                I contribute to workshops, panels and interviews on science and
                the way we work. If you are planning a keynote, research talk or
                participatory session, let’s explore what would be useful for
                your audience.
              </p>
              <a className="button button-light" href="#contact">
                Invite me to your event ↗
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
              I share the science behind my work and ask what it takes to build
              a research culture we want to be part of.
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
                <p>
                  I explore what the brain’s immune cells do in health and
                  disease.
                </p>
                <span>Listen to the episode</span>
              </External>
              <External href={s.culturePodcast.href} className="media-story">
                <span className="eyebrow">
                  Podcast / Neuroscience and Beyond · Episode 6
                </span>
                <h3>Rethinking the Research Culture</h3>
                <p>
                  I discuss the challenges of academic life and the conditions
                  researchers need to thrive.
                </p>
                <span>Listen to the conversation</span>
              </External>
              <External href={s.womenInScience.href} className="media-story">
                <span className="eyebrow">
                  Feature / ZEIT für X · 25 January 2024
                </span>
                <h3>Starke Frauen für die Wissenschaft</h3>
                <p>
                  I share my perspective on connection and women’s networks as
                  part of the Zia fellowship community.
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
              Beyond the lab and the conference stage, I create spaces for
              connection.
            </p>
            <p>
              As a trained Wild Woman Project circle facilitator in Berlin, I
              bring together my love of nature, community and exploration.
              Alongside my scientific work, this is another way I practise
              listening and create room for people to meet as they are.
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
              <p>
                My biography, publications and source material in one place.
              </p>
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
                  Read my selected papers, export citations, or explore my
                  doctoral dissertation.
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
                  speaking archive. For slides or materials from a specific
                  session, please get in touch with me.
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
                  Explore my original profiles and image credits, with context
                  on my current and earlier affiliations.
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
              If you have a workshop, research collaboration or conversation in
              mind, I’d love to hear what you are working on.
            </p>
            <p>I’m based in Berlin and work across disciplines.</p>
            <External href={s.linkedin.href}>Connect on LinkedIn</External>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
