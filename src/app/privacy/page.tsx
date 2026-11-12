import type { Metadata } from "next";
import Header from "@/components/website/Header";
import Footer from "@/components/website/Footer";
export const metadata: Metadata = {
  title: "Privacy | Verena Claudia Haage",
  alternates: { canonical: "/privacy/" },
};
export default function Privacy() {
  return (
    <>
      <Header />
      <main id="main" className="document-page">
        <p className="eyebrow">About your visit</p>
        <h1>
          Privacy <em>in practice.</em>
        </h1>
        <h2>Contact</h2>
        <p>
          The enquiry form prepares a draft in your own email application using
          a mailto link. This website does not submit the form to a server,
          store its contents, or add you to a mailing list. You choose whether
          to send the email. For questions about my website, please use{" "}
          <a href="/#contact">the contact form</a>.
        </p>
        <h2>External services</h2>
        <p>
          Portraits and styles are served with this website. No analytics,
          advertising scripts or tracking cookies are added by the site code.
          The hosting provider may process technical connection data to deliver
          and secure the website.
        </p>
        <p>
          The video player connects to YouTube’s privacy-enhanced domain only
          after you select “Load YouTube video”. Loading or playing it shares
          connection information with YouTube, which processes data under its
          own policies. You can instead open the recording directly on YouTube.
        </p>
        <p>
          Links to Spotify, LinkedIn, publishers and other platforms open the
          respective external services. Their own privacy practices apply.
        </p>
        <p>Last updated: 12 November 2026.</p>
        <a className="button button-primary" href="/">
          Return to my work ↗
        </a>
      </main>
      <Footer />
    </>
  );
}
