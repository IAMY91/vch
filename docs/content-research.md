# Personal website: research and editorial record

## Repository foundation

The working checkout is `/workspace/VCH` with origin `https://github.com/IAMY91/VCH.git`.
On 2026-11-12, `git ls-remote https://github.com/IAMY91/circle-app.git HEAD`
returned `760d9d675663bde1b28f3318c3ee4efebcf2bb8f` (also the initial local HEAD).
The existing personal website, typography, responsive navigation, contact form,
and visual identity are retained as the foundation. Circle-room application
components are not mounted on the personal home page.

## Scope and verification

The owner requested a representative website for Verena Claudia Haage, PhD,
with emphasis on academic leadership and science communication. The request's
third positioning area was incomplete and remains to be clarified.

Leadership section topics describe editorial interests and conversation themes;
they do not assert employment, management appointments, awards, or event credits.
No external biographical records, publications, talk recordings, portraits,
slides, or initiatives have yet been verified in this task.

## Research access blocker

On 2026-11-12 the environment proxy denied requests to Google search and
Wikipedia with HTTP 403. Search/publication/media domain additions were saved
to the environment configuration draft. They require saving in environment
settings before research can resume. Additional institutional domains may be
needed once relevant primary sources are identified. Do not route around the
network policy or mistake a denied request for evidence that no records exist.

## Evidence to collect before publishing

For each claim or work, record:

- Exact name and identity match (institution, field, author identifier).
- Primary source URL, publisher, page title, access date, and supporting text.
- Title, actual date, venue/institution, role, collaborators, and format.
- Original publication/DOI, video, slides, project, or initiative URL.
- For images and files: original URL, photographer/creator, licence or permission,
  attribution wording, and local asset path. Public visibility is not permission
  to republish. Link to the original when reuse permission is unknown.

Prefer institutional biographies and event programmes for roles and talks,
ORCID/publisher records for papers, and the creator's original channel for
recordings and slides. Cross-check short-name author matches before attribution.
Avoid scraped contact details and private or unrelated personal information.
Do not fill gaps with inferred titles, dates, accomplishments, or stock portraits.

## Remaining content work

1. Resolve official identity/profile and the third positioning area.
2. Build an evidence inventory from accessible primary sources.
3. Replace existing unpublished sections with verified content and visible source links.
4. Add permitted photography, captions, credits, and accessible descriptions.
5. Configure the owner-approved public contact address and deployment URL.
6. Check links, responsive rendering, form behaviour, metadata, and social image.

`NEXT_PUBLIC_CONTACT_EMAIL` is optional: without it the existing form explains
that enquiries are not open and does not send or store submissions.
`NEXT_PUBLIC_SITE_URL` defaults to localhost for development; set the actual
public URL before building for deployment. These public settings contain no secrets.

## Owner-supplied sources

The owner supplied these nine URLs and requested their use, including portraits.
All nine page requests were denied by the environment proxy (CONNECT HTTP 403).
Their domains have been added to the existing configuration draft, preserving
previous custom rules. The live policy still requires the settings change.

The website now links to these resources in the relevant sections. Link labels
are based on publisher names and the supplied URL paths. They are not quotations
of verified page titles, evidence of a current affiliation, or confirmation of
Verena's exact role in the linked event/article. No event dates, appointments,
publication titles, image credits, or video title have been inferred.

| Section | Publisher | URL | Inspection |
| --- | --- | --- | --- |
| About | Falling Walls Foundation | https://falling-walls.com/foundation/people/verena-claudia-haage | Blocked |
| About | Berlin Science Week | https://berlinscienceweek.com/de/foundation/people/verena-haage | Blocked |
| Research | Circadian Medicine | https://www.circadianmedicine.de/people/verena-haage | Blocked |
| Research | ResearchGate | https://www.researchgate.net/profile/Verena-Haage | Blocked |
| Circles | The Wild Woman Project | https://thewildwomanproject.com/verena-claudia-haage-berlin-germany/ | Blocked |
| Speaking | YouTube | https://www.youtube.com/watch?v=ZRQzm6BKyqo | Blocked |
| Leadership | Berlin Institute of Health | https://www.bihealth.org/de/aktuell/agile-zusammenarbeit-in-wissenschaft-und-medizin | Blocked |
| Leadership | German Scholars Organization | https://gsonet.org/karrierewissen/tbh-conference-glass-ceiling-in-academia/ | Blocked |
| Leadership | ZEIT für X | https://zeitfuerx.de/forschung/starke-frauen-fuer-die-wissenschaft/ | Blocked |

Source URLs and display labels are centralized in `src/lib/profileSources.ts`.
After access is applied, inspect each original, record supported facts and dates,
identify portrait files and credits, and replace the provisional labels with
actual page titles where different. Do not embed a guessed image URL or use
an unrelated/generated person as a portrait. The image work remains outstanding.

Validation of the linked-source integration: production build and lint passed
(with the inherited cleanup-ref warning). Chromium checks confirmed all nine
unique source links render, page anchors and mobile navigation work, there is
no horizontal overflow at 1440px/390px, contact fallback works, no page exceptions
occur, and the social image returns PNG. External destinations could not be
validated because of the network policy; these checks establish local rendering,
not successful access to the original sources.
