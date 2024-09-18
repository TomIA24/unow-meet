import '../styles/globals.css';
import '@livekit/components-styles';
import '@livekit/components-styles/prefabs';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'UNOW Meet',
    template: '%s',
  },
  description:
    'UNOW is an e-learning plateform.',
  twitter: {
    creator: 'TOMIA',
    site: 'TOMIA',
    card: 'summary_large_image',
  },
  openGraph: {
    url: 'https://meet.unow.tn',
    images: [
      {
        url: 'https://meet.unow.tn/images/logoblanc.svg',
        width: 2000,
        height: 1000,
        type: 'image/png',
      },
    ],
    siteName: 'UNOW Meet',
  },
  icons: {
    icon: {
      rel: 'icon',
      url: '/favicon.ico',
    },
    apple: [
      {
        rel: 'apple-touch-icon',
        url: '/images/logoblanc.svg',
        sizes: '180x180',
      },
      { rel: 'mask-icon', url: '/images/logoblanc.svg', color: '#04293A' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#04293A',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
