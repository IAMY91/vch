import type { Metadata } from "next";
import "./globals.css";
// Set this environment variable when deploying to a custom domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://verena-claudia-haage.iamy.chatgpt.site";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Verena Claudia Haage, PhD | Academic Leadership & Neuroimmunology",
  description:
    "Neuroimmunologist at ECRC–Charité Berlin and SciLead co-founder. Research, academic leadership, science communication, workshops and public dialogue.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title: "Verena Claudia Haage, PhD",
    description:
      "Better science. More human. Neuroimmunology, academic leadership and science communication.",
    siteName: "Verena Claudia Haage",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Verena Claudia Haage — science with depth, leadership with humanity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verena Claudia Haage, PhD",
    description: "Science with depth. Leadership with humanity.",
    images: ["/opengraph-image"],
  },
  keywords: [
    "Verena Claudia Haage",
    "Verena Haage",
    "academic leadership",
    "neuroimmunology",
    "microglia",
    "science communication",
    "SciLead",
    "research culture",
  ],
};
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Verena Claudia Haage",
  alternateName: "Verena Haage",
  honorificSuffix: "PhD",
  jobTitle: "Senior Postdoctoral Scientist",
  description:
    "Neuroimmunologist and co-founder of SciLead, the Sustainable Leadership for Science Initiative.",
  url: siteUrl,
  image: `${siteUrl}/images/verena-portrait.webp`,
  worksFor: {
    "@type": "Organization",
    name: "Experimental and Clinical Research Center, Charité – Universitätsmedizin Berlin",
  },
  sameAs: [
    "https://orcid.org/0000-0001-7569-8421",
    "https://www.researchgate.net/profile/Verena-Haage",
    "https://www.circadianmedicine.de/people/verena-haage",
    "https://de.linkedin.com/in/verenaclaudiahaage",
  ],
  knowsAbout: [
    "Neuroimmunology",
    "Microglia",
    "Academic leadership",
    "Research culture",
    "Science communication",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
