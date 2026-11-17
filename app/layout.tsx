import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Varun Sai & Nidhi Priyanka | Wedding Invitation',
  description: 'We cordially invite you and your family to celebrate the wedding ceremony of Chi. Varun Sai with Chi. La. Sow. Nidhi Priyanka on 28th November 2026.',
  icons: {
    icon: '/assets/img/228f8895621f2970.webp',
  },
  openGraph: {
    title: 'Varun Sai & Nidhi Priyanka | Wedding Invitation',
    description: 'Auspicious Wedding Muhurtham on Saturday, 28th November 2026 at SV Convention Hall, Hanamkonda.',
    images: ['/assets/img/64f51b8ebc4f1bc5.webp'],
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
