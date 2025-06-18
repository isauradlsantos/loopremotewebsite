import { Inter, Inter_Tight } from 'next/font/google';

import type { Metadata } from 'next';

import { Footer } from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: 'Close The Loop | Remote Coworking Community',
    template: '%s | Close The Loop',
  },
  description:
    'Close The Loop is a neurodivergent-friendly, membership-based virtual coworking community that boosts your productivity, pairs you with inspiring cohorts, and helps you beat remote work isolation.',
  keywords: [
    'virtual cowork',
    'remote work community',
    'ADHD remote work',
    'neurodivergent professionals',
    'body doubling',
    'focus sessions',
    'executive function coaching',
    'remote work isolation',
    'virtual coworking space',
    'ADHD community',
    'productivity coaching',
    'remote accountability',
    'remote cowork',
    'remote coworking',
    'remote community',
    'work with me',
    'study with me',
  ],
  authors: [{ name: 'Close The Loop Team' }],
  creator: 'Close The Loop Team',
  publisher: 'Close The Loop',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon-96x96.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon/favicon-96x96.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-96x96.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/favicon-96x96.png', sizes: '180x180', type: 'image/png' },
      { url: '/favicon/favicon-96x96.png', sizes: '152x152', type: 'image/png' },
      { url: '/favicon/favicon-96x96.png', sizes: '120x120', type: 'image/png' },
    ],
    shortcut: [{ url: '/favicon/favicon-96x96.png' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/11.png',
      },
    ],
  },
  openGraph: {
    title: 'Close The Loop - Virtual Cowork for Remote Professionals',
    description:
      'Join a curated community of neurodivergent remote professionals. Get focus sessions, peer matching, and systems coaching in one membership. Beat remote work isolation.',
    siteName: 'Close The Loop',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Close The Loop - Membership-Based Virtual Cowork Community',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Close The Loop - Virtual Cowork for Remote Professionals',
    description:
      'Beat remote work isolation. Membership-based virtual cowork with focus sessions, curated community, and ADHD-friendly structure for remote professionals.',
    images: ['/og-image.jpg'],
    creator: '@closetheloop',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon/11.png" />
        <link rel="apple-touch-icon" href="/favicon/11.png" />
      </head>
      <body
        className={`h-screen ${inter.variable} ${interTight.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
