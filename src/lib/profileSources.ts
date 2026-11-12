// Links supplied by the site owner. Page contents and image credits still need
// inspection; these records do not establish roles, dates, or publication claims.
export const profileSources = {
  fallingWalls: {
    title: 'Verena Claudia Haage',
    publisher: 'Falling Walls Foundation',
    format: 'Profile',
    href: 'https://falling-walls.com/foundation/people/verena-claudia-haage',
  },
  berlinScienceWeek: {
    title: 'Verena Haage',
    publisher: 'Berlin Science Week',
    format: 'Profile · Deutsch',
    href: 'https://berlinscienceweek.com/de/foundation/people/verena-haage',
  },
  circadianMedicine: {
    title: 'Verena Haage',
    publisher: 'Circadian Medicine',
    format: 'Research profile',
    href: 'https://www.circadianmedicine.de/people/verena-haage',
  },
  researchGate: {
    title: 'Research profile & publications',
    publisher: 'ResearchGate',
    format: 'Research',
    href: 'https://www.researchgate.net/profile/Verena-Haage',
  },
  wildWoman: {
    title: 'Verena Claudia Haage · Berlin, Germany',
    publisher: 'The Wild Woman Project',
    format: 'Circle profile',
    href: 'https://thewildwomanproject.com/verena-claudia-haage-berlin-germany/',
  },
  video: {
    title: 'Watch on YouTube',
    publisher: 'YouTube',
    format: 'Video',
    href: 'https://www.youtube.com/watch?v=ZRQzm6BKyqo',
  },
  agile: {
    title: 'Agile Zusammenarbeit in Wissenschaft und Medizin',
    publisher: 'Berlin Institute of Health',
    format: 'Article · Deutsch',
    href: 'https://www.bihealth.org/de/aktuell/agile-zusammenarbeit-in-wissenschaft-und-medizin',
  },
  glassCeiling: {
    title: 'TBH Conference: Glass Ceiling in Academia',
    publisher: 'German Scholars Organization',
    format: 'Conference resource',
    href: 'https://gsonet.org/karrierewissen/tbh-conference-glass-ceiling-in-academia/',
  },
  womenInScience: {
    title: 'Starke Frauen für die Wissenschaft',
    publisher: 'ZEIT für X',
    format: 'Article · Deutsch',
    href: 'https://zeitfuerx.de/forschung/starke-frauen-fuer-die-wissenschaft/',
  },
} as const;

export type ProfileSourceKey = keyof typeof profileSources;
