// Editorial evidence record. Checked 12 November 2026. Historic roles are dated.
export const reviewedOn = "12 November 2026";
export const contactEmail = "verena-claudia.haage@charite.de";
export const profileSources = {
  circadianMedicine: {
    title: "Verena Haage · TRR 418",
    publisher: "Circadian Medicine",
    format: "Current role & project",
    href: "https://www.circadianmedicine.de/people/verena-haage",
  },
  berlinScienceWeek: {
    title: "Verena Haage",
    publisher: "Berlin Science Week",
    format: "2026 speaker profile",
    href: "https://berlinscienceweek.com/de/foundation/people/verena-haage",
  },
  scilead: {
    title: "Sustainable Leadership for Science",
    publisher: "SciLead",
    format: "Initiative · Co-founder",
    href: "https://www.scilead.de/",
  },
  fallingWalls: {
    title: "Verena Claudia Haage",
    publisher: "Falling Walls Foundation",
    format: "2023 Press Fellow · Historic profile",
    href: "https://falling-walls.com/foundation/people/verena-claudia-haage",
  },
  agile: {
    title: "Agile Zusammenarbeit in Wissenschaft und Medizin",
    publisher: "Berlin Institute of Health",
    format: "8 October 2026 · Workshop",
    href: "https://www.bihealth.org/de/aktuell/agile-zusammenarbeit-in-wissenschaft-und-medizin",
  },
  postdocDay: {
    title: "Berlin Postdoc Day 2026 · Day 2",
    publisher: "Berlin Science Week",
    format: "6 November 2026 · Interactive session",
    href: "https://berlinscienceweek.com/de/programme/berlin-postdoc-day-2026-day-2",
  },
  glassCeiling: {
    title:
      "Glass Ceilings in Academia: Strategies for Overcoming Systemic Barriers",
    publisher: "German Scholars Organization",
    format: "Panel & takeaways · Date not listed",
    href: "https://gsonet.org/karrierewissen/tbh-conference-glass-ceiling-in-academia/",
  },
  womenInScience: {
    title: "Starke Frauen für die Wissenschaft",
    publisher: "ZEIT für X",
    format: "25 January 2024 · Zia feature",
    href: "https://zeitfuerx.de/forschung/starke-frauen-fuer-die-wissenschaft/",
  },
  elifeSurvey: {
    title: "Why do postdocs leave labs?",
    publisher: "eLife",
    format: "30 January 2024 · Survey initiative, now closed",
    href: "https://elifesciences.org/inside-elife/015caaa0/elife-ambassadors-survey-why-do-postdocs-leave-labs",
  },
  elifeAmbassador: {
    title: "2022 eLife Community Ambassadors: First months of activity",
    publisher: "eLife",
    format: "Community & research culture",
    href: "https://elifesciences.org/inside-elife/3869c996/2022-elife-community-ambassadors-first-months-of-activity",
  },
  orcid: {
    title: "0000-0001-7569-8421",
    publisher: "ORCID",
    format: "Researcher identifier",
    href: "https://orcid.org/0000-0001-7569-8421",
  },
  researchGate: {
    title: "Research profile & outputs",
    publisher: "ResearchGate",
    format: "Articles, abstracts & preprints",
    href: "https://www.researchgate.net/profile/Verena-Haage",
  },
  researchStory: {
    title: "Advocating for a more accessible and sustainable academia",
    publisher: "ResearchGate",
    format: "Historic researcher story",
    href: "https://www.researchgate.net/researcher-stories/verena-haage",
  },
  dissertation: {
    title: "Doctoral dissertation · Medical Neurosciences",
    publisher: "Charité / Refubium",
    format: "2019 · Thesis & degree record",
    href: "https://refubium.fu-berlin.de/handle/fub188/26233?show=full",
  },
  heidelberg: {
    title: "4EU+ Career Development & Leadership",
    publisher: "Heidelberg University",
    format: "16 November 2022 · Panel",
    href: "https://www.graduateacademy.uni-heidelberg.de/en/support/events/panel-discussion-and-workshop-4eu-career-development-leadership",
  },
  columbiaPanel: {
    title: "Creating a More Sustainable Future at Every Level",
    publisher: "Columbia University",
    format: "4 November 2021 · Panel",
    href: "https://undergrad.climate.columbia.edu/events/creating-more-sustainable-future-every-level",
  },
  podcast: {
    title: "The Brain’s Hidden Guardians: Microglia in Health and Disease",
    publisher: "Neuroscience and Beyond",
    format: "30 June 2025 · Podcast",
    href: "https://open.spotify.com/episode/0l1VX9XWxy4D6FohEbREpn",
  },
  culturePodcast: {
    title: "Rethinking the Research Culture · Challenges in Academia",
    publisher: "Neuroscience and Beyond",
    format: "Podcast · Episode 6",
    href: "https://music.amazon.de/podcasts/a1165e23-7104-41cb-90c2-3957c2492c41/episodes/713901b2-e42d-4ee4-a856-1099e0d4ec99/neuroscience-and-beyond-rethinking-the-research-culture-challenges-in-academia-with-dr-haage-6",
  },
  video: {
    title: "The Brain’s Hidden Guardians: Microglia in Health and Disease",
    publisher: "YouTube",
    format: "Neuroscience and Beyond · Video interview",
    href: "https://www.youtube.com/watch?v=ZRQzm6BKyqo",
  },
  wildWoman: {
    title: "Verena Claudia Haage · Berlin, Germany",
    publisher: "The Wild Woman Project",
    format: "Circle facilitator profile",
    href: "https://thewildwomanproject.com/verena-claudia-haage-berlin-germany/",
  },
  wildWomanInterview: {
    title: "It’s Own Kind of Magic · Circle Leader Spotlight",
    publisher: "The Wild Woman Project",
    format: "December 2025 · Interview",
    href: "https://thewildwomanproject.com/2025/12/its-own-kind-of-magic-circle-leader-spotlight-interview-with-berlin-circle-leader-verena-claudia-haage/",
  },
  linkedin: {
    title: "Verena Claudia Haage",
    publisher: "LinkedIn",
    format: "Professional network",
    href: "https://de.linkedin.com/in/verenaclaudiahaage",
  },
} as const;
export type ProfileSourceKey = keyof typeof profileSources;
export const publications = [
  {
    year: 2026,
    category: "Neuroimmunology",
    journal: "Cell Reports",
    role: "Haage et al. · Shared first authorship",
    title:
      "Topoisomerase I inhibition yields a CD74high/MHChigh human microglial subtype with enhanced Aβ uptake",
    doi: "10.1016/j.celrep.2026.118031",
    summary:
      "A pharmacological approach to recreate and study a human microglial state with increased amyloid-β uptake. Laboratory and model-system research.",
    fullText: "https://edoc.mdc-berlin.de/id/eprint/26975/",
  },
  {
    year: 2025,
    category: "Neuroimmunology",
    journal: "Brain, Behavior, and Immunity",
    role: "Haage et al. · First author",
    title:
      "HDAC inhibitors engage MITF and the disease-associated microglia signature to enhance amyloid β uptake",
    doi: "10.1016/j.bbi.2025.05.027",
    summary:
      "Investigating how changes in gene regulation alter human microglia-like cells and their uptake of amyloid-β.",
    fullText: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12286591/",
  },
  {
    year: 2024,
    category: "Neuroimmunology",
    journal: "Nature Neuroscience",
    role: "Tuddenham, Taga, Haage et al. · Shared first authorship",
    title:
      "A cross-disease resource of living human microglia identifies disease-enriched subsets and tool compounds recapitulating microglial states",
    doi: "10.1038/s41593-024-01764-7",
    summary:
      "A single-cell resource connecting the diversity of human brain immune cells with neurological disease and experimental models.",
    fullText: "https://www.nature.com/articles/s41593-024-01764-7",
  },
  {
    year: 2022,
    category: "Neuroimmunology",
    journal: "Molecular Psychiatry",
    role: "Haage & De Jager · Review",
    title:
      "Neuroimmune contributions to Alzheimer’s disease: a focus on human data",
    doi: "10.1038/s41380-022-01637-0",
    summary:
      "A review of human evidence on the immune system’s involvement in Alzheimer’s disease.",
    fullText: "https://www.nature.com/articles/s41380-022-01637-0",
  },
  {
    year: 2021,
    category: "Research culture",
    journal: "EMBO Reports",
    role: "Haage, Voss, Nguyen & Eggert · First author",
    title:
      "The need for sustainable leadership in academia: A survey of German researchers reveals a widespread lack of training for leadership skills",
    doi: "10.15252/embr.202153592",
    summary:
      "Examining leadership training and the conditions that support people doing research.",
    fullText: "https://www.embopress.org/doi/full/10.15252/embr.202153592",
  },
  {
    year: 2021,
    category: "Diagnostics",
    journal: "Journal of Clinical Virology",
    role: "Haage et al. · First author",
    title:
      "Impaired performance of SARS-CoV-2 antigen-detecting rapid diagnostic tests at elevated and low temperatures",
    doi: "10.1016/j.jcv.2021.104796",
    summary:
      "Testing how environmental temperature affects the performance of rapid antigen diagnostics.",
    fullText: "https://pubmed.ncbi.nlm.nih.gov/33773413/",
  },
  {
    year: 2020,
    category: "Research culture",
    journal: "eLife",
    role: "Verena Haage · Sole author",
    title:
      "A survey of travel behaviour among scientists in Germany and the potential for change",
    doi: "10.7554/eLife.56765",
    summary:
      "Exploring scientific travel and opportunities to reduce the environmental footprint of research.",
    fullText: "https://elifesciences.org/articles/56765",
  },
  {
    year: 2019,
    category: "Neuroimmunology",
    journal: "Acta Neuropathologica Communications",
    role: "Haage et al. · Shared first authorship",
    title:
      "Comprehensive gene expression meta-analysis identifies signature genes that distinguish microglia from peripheral monocytes/macrophages in health and glioma",
    doi: "10.1186/s40478-019-0665-y",
    summary:
      "Identifying gene signatures that distinguish brain-resident microglia from other immune cells.",
    fullText:
      "https://actaneurocomms.biomedcentral.com/articles/10.1186/s40478-019-0665-y",
  },
] as const;
export const appearances = [
  {
    date: "6 November 2026",
    year: "2026",
    kind: "Workshop",
    title: "Stress management & resilience",
    venue: "Berlin Postdoc Day · Berlin Science Week",
    description:
      "An interactive mental health session with Dr. Jelena Brasanac, representing SciLead and Dragonfly Mental Health.",
    source: "postdocDay",
  },
  {
    date: "8 October 2026",
    year: "2026",
    kind: "Workshop",
    title: "Agile Collaboration in Science & Medicine",
    venue: "Berlin Institute of Health at Charité",
    description:
      "Co-facilitated with Daniela Nguyen: self-organization, communication, iterative work and peer case clinics.",
    source: "agile",
  },
  {
    date: "30 June 2025",
    year: "2025",
    kind: "Interview",
    title: "The Brain’s Hidden Guardians",
    venue: "Neuroscience and Beyond · Podcast",
    description:
      "A conversation about microglia in health and disease, and the questions driving neuroimmunology.",
    source: "podcast",
  },
  {
    date: "Date not listed",
    year: "Archive",
    kind: "Panel",
    title: "Glass Ceilings in Academia",
    venue: "German Scholars Organization · To Be Honest Conference",
    description:
      "With Saumya Pant and Taiwo Fagbemigun, moderated by Birte Seffert. Systemic barriers, mentorship and inclusive institutions.",
    source: "glassCeiling",
  },
  {
    date: "16 November 2022",
    year: "2022",
    kind: "Panel",
    title: "Career Development & Leadership",
    venue: "4EU+ · Heidelberg University",
    description:
      "A panel discussion on academic careers and leadership development.",
    source: "heidelberg",
  },
  {
    date: "4 November 2021",
    year: "2021",
    kind: "Panel",
    title: "Creating a More Sustainable Future at Every Level",
    venue: "Columbia University",
    description:
      "A discussion connecting individual and institutional approaches to sustainability.",
    source: "columbiaPanel",
  },
] as const;
export const shortBio =
  "Verena Claudia Haage, PhD, is a neuroimmunologist, senior postdoctoral scientist at ECRC–Charité in Berlin, and co-founder of SciLead, the Sustainable Leadership for Science Initiative. Her research explores brain immune cells and neurodegenerative disease; her current work investigates circadian rhythms in multiple sclerosis. Alongside her research, she facilitates conversations and workshops on leadership, collaboration, mental health and sustainable research culture.";
