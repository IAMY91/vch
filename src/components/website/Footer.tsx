export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="footer-name" href="/#home">
          Verena Claudia Haage<span>, PhD</span>
        </a>
        <p>
          Understanding the brain.
          <br />
          Reimagining the culture of science.
        </p>
      </div>
      <div className="footer-links">
        <a href="/sources/">Sources & credits</a>
        <a href="/privacy/">Privacy</a>
        <a
          href="https://orcid.org/0000-0001-7569-8421"
          target="_blank"
          rel="noreferrer"
        >
          ORCID ↗
        </a>
        <a
          href="https://de.linkedin.com/in/verenaclaudiahaage"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Verena Claudia Haage</small>
        <span>Berlin, Germany · Content reviewed 12 November 2026</span>
        <a href="/#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
