import Image from "next/image";
import { profileSources as s } from "@/lib/profileSources";
const brands = [
  {
    name: "Charité – Universitätsmedizin Berlin",
    src: "/logos/charite.svg",
    className: "charite",
    href: s.circadianMedicine.href,
    context: "Current research",
  },
  {
    name: "SciLead",
    src: "/logos/scilead.png",
    className: "scilead",
    href: s.scilead.href,
    context: "Co-founder",
  },
  {
    name: "Berlin Science Week",
    src: "/logos/berlin-science-week.svg",
    className: "scienceweek",
    href: s.berlinScienceWeek.href,
    context: "2026 speaker",
  },
  {
    name: "Falling Walls Foundation",
    src: "/logos/falling-walls.svg",
    className: "fallingwalls",
    href: s.fallingWalls.href,
    context: "2023 Press Fellow",
  },
  {
    name: "eLife",
    src: "/logos/elife.svg",
    className: "elife",
    href: s.elifeAmbassador.href,
    context: "Community Ambassador",
  },
];
export default function BrandBand() {
  return (
    <div className="brand-band">
      <p className="eyebrow">Across my research & public dialogue</p>
      <div className="brand-grid">
        {brands.map((b) => (
          <a
            className={`brand-card brand-card-${b.className}`}
            href={b.href}
            key={b.name}
            target="_blank"
            rel="noreferrer"
            aria-label={`${b.name} — ${b.context} (opens in a new tab)`}
          >
            <span className="brand-image">
              <Image src={b.src} alt={b.name} width={220} height={80} />
            </span>
            <span className="brand-context">{b.context}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
