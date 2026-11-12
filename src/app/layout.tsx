import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Verena Claudia Haage, PhD | Academic Leadership & Science Communication',
  description: 'The personal website of Verena Claudia Haage, PhD. Explore academic leadership, science communication, research, and opportunities for conversation.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile', url: '/', title: 'Verena Claudia Haage, PhD | Academic Leadership & Science Communication',
    description: 'Research, science communication, and conversations about academic leadership.',
    siteName: 'Verena Claudia Haage',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Verena Claudia Haage — science with depth, leadership with humanity' }],
  },
  twitter: { card: 'summary_large_image', title: 'Verena Claudia Haage | Academic Leadership & Science Communication', description: 'Science with depth. Leadership with humanity.', images: ['/opengraph-image'] },
  keywords: ['Verena Claudia Haage', 'scientist and speaker', 'academic leadership', 'research communication speaker', 'scientific leadership facilitator'],
};

const personSchema = {
  '@context': 'https://schema.org', '@type': 'Person', name: 'Verena Claudia Haage', honorificSuffix: 'PhD',
  description: 'A personal platform for academic leadership, science communication, and research.',
  url: siteUrl,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, '\\u003c') }} />{children}</body></html>;
}
