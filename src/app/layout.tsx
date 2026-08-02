import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Verena Claudia Haage, PhD | Scientist, Speaker & Circle Facilitator',
  description: 'Verena Claudia Haage is a scientist, speaker, and facilitator connecting rigorous inquiry with human connection. Explore her research, talks, circles, and field notes.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile', url: '/', title: 'Verena Claudia Haage, PhD | Scientist, Speaker & Circle Facilitator',
    description: 'A scientist, speaker, and facilitator connecting rigorous inquiry with human connection.',
    siteName: 'Verena Claudia Haage',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Verena Claudia Haage — where science meets human connection' }],
  },
  twitter: { card: 'summary_large_image', title: 'Verena Claudia Haage | Scientist, Speaker & Circle Facilitator', description: 'Where science meets human connection.', images: ['/opengraph-image'] },
  keywords: ['Verena Claudia Haage', 'scientist and speaker', 'science speaker Germany', 'circle facilitator Berlin', 'research communication speaker', 'scientific leadership facilitator'],
};

const personSchema = {
  '@context': 'https://schema.org', '@type': 'Person', name: 'Verena Claudia Haage', honorificSuffix: 'PhD',
  description: 'Scientist, speaker, and circle facilitator exploring how knowledge, courage, and human connection create meaningful change.',
  url: siteUrl,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, '\\u003c') }} />{children}</body></html>;
}
