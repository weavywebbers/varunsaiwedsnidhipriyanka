import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://varunsaiwedsnidhipriyanka.in'),
  title: 'Varun Sai & Nidhi Priyanka | Wedding Invitation',
  description:
    'We cordially invite you and your family to celebrate the wedding ceremony of Chi. Varun Sai with Chi. La. Sow. Nidhi Priyanka on Saturday, 28th November 2026 at SV Convention Hall, Hanamkonda.',
  icons: {
    icon: '/assets/img/228f8895621f2970.webp',
  },
  openGraph: {
    title: 'Varun Sai & Nidhi Priyanka | Wedding Invitation',
    description:
      'Auspicious Wedding Muhurtham on Saturday, 28th November 2026 at SV Convention Hall, Hanamkonda.',
    url: 'https://varunsaiwedsnidhipriyanka.in',
    siteName: 'Varun Sai & Nidhi Priyanka Wedding',
    images: [
      {
        url: '/assets/img/wedding-card-preview.jpg',
        width: 975,
        height: 2110,
        alt: 'Varun Sai & Nidhi Priyanka Wedding Invitation Card with Full Text',
      },
      {
        url: '/assets/img/twitter-card-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Varun Sai & Nidhi Priyanka Wedding Invitation Banner',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varun Sai & Nidhi Priyanka | Wedding Invitation',
    description:
      'Auspicious Wedding Muhurtham on Saturday, 28th November 2026 at SV Convention Hall, Hanamkonda.',
    images: ['/assets/img/wedding-card-preview.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#120104',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
