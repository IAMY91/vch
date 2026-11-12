import type { SVGProps } from "react";
export type ResearchIconName =
  "microglia" | "dna" | "clock" | "flask" | "people" | "book";
const drawings = {
  microglia: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M10 9 7 5 3 4m4 1 1-3m7 8 3-5 3-1m-3 1-1-3M9 13l-5 3-2-1m2 1v4m9-5 3 5 4 1m-4-1-1 3m0-10 5 1 2 3m-2-3 2-2" />
    </>
  ),
  dna: (
    <>
      <path d="M6 2c0 7 12 13 12 20M18 2C18 9 6 15 6 22M7 5h10M9 8h6M9 16h6M7 19h10M10 11h4M10 13h4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v6l4 2M12 1v2m0 18v2M1 12h2m18 0h2" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6m-5 0v6l-6 10a1.5 1.5 0 0 0 1.3 2h13.4a1.5 1.5 0 0 0 1.3-2L14 9V3M7 15h10" />
      <circle cx="10" cy="18" r=".5" />
      <circle cx="14" cy="17" r=".5" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 5a5 5 0 0 1 3 5v1" />
    </>
  ),
  book: (
    <>
      <path d="M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1Zm0 0v15" />
    </>
  ),
};
export default function ResearchIcon({
  name,
  ...props
}: { name: ResearchIconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {drawings[name]}
    </svg>
  );
}
