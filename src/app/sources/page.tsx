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
        <p className="eyebrow">The evidence behind the profile</p>
        <h1>
          Sources <em>& credits.</em>
        </h1>
        <p>
          This platform brings Verena’s public work together with links to
          original profiles, programmes and publications. Last editorial review:{" "}
          {reviewedOn}.
        </p>
        <h2>Current & historical context</h2>
        <p>
          The TRR 418 profile documents Verena’s current role as senior
          postdoctoral scientist at ECRC–Charité Berlin. The 2026 Berlin Science
          Week and BIH profiles corroborate her Charité affiliation. The Falling
          Walls 2023 profile and some initiative and panel pages describe her
          earlier Columbia University appointment.
        </p>
        <p>
          Event entries identify her documented role: workshop facilitator,
          panelist or interview guest. Keynotes are an invitation format, not an
          assertion about an unverified past engagement. SciLead’s wider event
          archive describes collective initiative activity and is not treated as
          Verena’s individual speaking record.
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
            further press use should be cleared with Verena.
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
        <h2>Presentation material</h2>
        <p>
          No standalone slide deck was verified in the public sources reviewed.
          The resources section links to original papers, the doctoral thesis
          and event programmes. The YouTube recording’s title and channel were verified through YouTube’s public oEmbed metadata: The Brain’s Hidden Guardians: Microglia in Health and Disease, by Neuroscience and Beyond.</p>
        <p>
          For updates, corrections or presentation material, contact{" "}
          <a href="mailto:verena-claudia.haage@charite.de">
            verena-claudia.haage@charite.de
          </a>
          .
        </p>
        <a className="button button-primary" href="/">
          Return to the profile ↗
        </a>
      </main>
      <Footer />
    </>
  );
}
