import type { Metadata } from "next";
import Header from "@/components/website/Header";
import Footer from "@/components/website/Footer";
import { profileSources, publications, reviewedOn } from "@/lib/profileSources";
export const metadata: Metadata = {
  title: "Sources & credits | Verena Claudia Haage",
  alternates: { canonical: "/sources/" },
};
export default function Sources() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className="document-page">
        <p className="eyebrow">The sources behind my work</p>
        <h1>
          Sources <em>& credits.</em>
        </h1>
        <p>
          I bring my public work together here with links to original profiles,
          programmes and publications. Last editorial review: {reviewedOn}.
        </p>
        <h2>Current & historical context</h2>
        <p>
          The TRR 418 profile documents my current role as senior postdoctoral
          scientist at ECRC–Charité Berlin. The 2026 Berlin Science Week and BIH
          profiles corroborate my Charité affiliation. The Falling Walls 2023
          profile and some initiative and panel pages describe my earlier
          Columbia University appointment.
        </p>
        <p>
          My event entries identify my documented role: workshop facilitator,
          panelist or interview guest. Keynotes are an invitation format, not an
          assertion about an unverified past engagement. SciLead’s wider event
          archive describes collective initiative activity and is not treated as
          my individual speaking record.
        </p>
        <h2>Profiles, projects, initiatives & media</h2>
        <ul className="source-list">
          {Object.values(profileSources).map((s) => (
            <li key={s.href}>
              <span className="eyebrow">{s.publisher}</span>
              <div>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.title} ↗
                </a>
                <small>{s.format}</small>
              </div>
            </li>
          ))}
        </ul>
        <h2>Selected publication records</h2>
        <p>
          Publication years refer to the journal version. The 2026 Cell Reports
          paper was published online on 23 September and in the 27 October
          issue. Earlier preprints are not counted as separate publications
          here. ResearchGate output counts include different formats and
          versions; this website does not equate them with a peer-reviewed
          publication count.
        </p>
        <ul className="source-list">
          {publications.map((p) => (
            <li key={p.doi}>
              <span className="eyebrow">
                {p.year} · {p.journal}
              </span>
              <div>
                <a
                  href={`https://doi.org/${p.doi}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.title} ↗
                </a>
                <small>
                  {p.role} · DOI: {p.doi}
                </small>
              </div>
            </li>
          ))}
        </ul>
        <h2>Photography</h2>
        <ul>
          <li>
            Professional portrait:{" "}
            <a href="https://cdn.prod.website-files.com/693af151d1b73134492dd16e/695d67b84944e2efe628db37_Verena_Haage-9324.jpg">
              original image
            </a>
            , published on the{" "}
            <a href={profileSources.circadianMedicine.href}>TRR 418 profile</a>.
            Photographer and reuse licence are not specified on the profile;
            attribution identifies the source, not the rights holder. Any
            further press use should be cleared with me.
          </li>
          <li>
            Outdoor portrait:{" "}
            <a href="https://thewildwomanproject.com/wp-content/uploads/2024/01/Verena-Claudia-Haage-Berlin-Germany-The-Wild-Woman-Project.png">
              original image
            </a>
            , credited to{" "}
            <a href={profileSources.wildWoman.href}>The Wild Woman Project</a>.
            Its published sharing policy requests credit. Photographer not
            identified.
          </li>
          <li>
            Images are resized and compressed for this website. No image or
            institutional name implies endorsement.
          </li>
        </ul>
        <h2>Organization logos & video thumbnail</h2>
        <p>
          I use original organization assets to identify my research, initiative
          and event connections. Their placement describes the relationship
          labelled alongside each logo.
        </p>
        <ul>
          <li>
            Charité: original white logo from{" "}
            <a href="https://www.circadianmedicine.de/people/verena-haage">
              TRR 418’s institutional footer
            </a>
            .
          </li>
          <li>
            SciLead: original logo from{" "}
            <a href="https://www.scilead.de/">SciLead</a>, shown in the
            affiliations band and initiative section.
          </li>
          <li>
            Falling Walls Foundation: original{" "}
            <a href="https://falling-walls.com/themes/custom/falling_walls/logo_fw.svg">
              website logo
            </a>
            .
          </li>
          <li>
            Berlin Science Week: original{" "}
            <a href="https://berlinscienceweek.com/themes/custom/berlinscienceweek/logo.svg">
              website logo
            </a>
            .
          </li>
          <li>
            eLife: original{" "}
            <a href="https://elifesciences.org/assets/patterns/img/patterns/organisms/elife-logo-xs.5a3c8c68.svg">
              website logo
            </a>
            .
          </li>
          <li>
            Video thumbnail:{" "}
            <a href="https://i.ytimg.com/vi/ZRQzm6BKyqo/hqdefault.jpg">
              original YouTube thumbnail
            </a>{" "}
            for the Neuroscience and Beyond interview, hosted locally so the
            preview does not connect to YouTube.
          </li>
        </ul>
        <h2>Presentation material</h2>
        <p>
          No standalone slide deck was verified in the public sources reviewed.
          The resources section links to original papers, the doctoral thesis
          and event programmes. The YouTube recording’s title and channel were
          verified through YouTube’s public oEmbed metadata: The Brain’s Hidden
          Guardians: Microglia in Health and Disease, by Neuroscience and
          Beyond.
        </p>
        <p>
          For updates, corrections or presentation material, please use{" "}
          <a href="/#contact">the contact form</a>.
        </p>
        <a className="button button-primary" href="/">
          Return to my work ↗
        </a>
      </main>
      <Footer />
    </>
  );
}
