import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://varunsaiwedsnidhipriyanka.in'),
  title: 'Varun Sai & Nidhi Priyanka | Wedding Invitation',
  description:
    'We cordially invite you and your family to celebrate the wedding ceremony of Chi. Varun Sai with Chi. La. Sow. Nidhi Priyanka on Saturday, 28th November 2026 at SV Convention Hall, Hanamkonda.',
  icons: {
    icon: '/twitter-image.jpg',
    shortcut: '/twitter-image.jpg',
    apple: '/twitter-image.jpg',
  },
  openGraph: {
    title: 'Varun Sai & Nidhi Priyanka | Wedding Invitation',
    description:
      'Auspicious Wedding Muhurtham on Saturday, 28th November 2026 at SV Convention Hall, Hanamkonda.',
    url: 'https://varunsaiwedsnidhipriyanka.in',
    siteName: 'Varun Sai & Nidhi Priyanka Wedding',
    images: [
      {
        url: 'https://varunsaiwedsnidhipriyanka.in/twitter-image.jpg',
        width: 390,
        height: 690,
        alt: 'Varun Sai & Nidhi Priyanka Wedding Invitation Card',
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
    images: ['https://varunsaiwedsnidhipriyanka.in/twitter-image.jpg'],
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
        {/* Primary Social & Chat Preview Meta Tags (WhatsApp, Twitter/X, Telegram, iMessage) */}
        <meta property="og:image" content="https://varunsaiwedsnidhipriyanka.in/twitter-image.jpg" />
        <meta property="og:image:secure_url" content="https://varunsaiwedsnidhipriyanka.in/twitter-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="390" />
        <meta property="og:image:height" content="690" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://varunsaiwedsnidhipriyanka.in/twitter-image.jpg" />
        <meta name="twitter:image:src" content="https://varunsaiwedsnidhipriyanka.in/twitter-image.jpg" />
        <link rel="image_src" href="https://varunsaiwedsnidhipriyanka.in/twitter-image.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
