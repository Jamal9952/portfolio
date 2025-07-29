import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Jamal Ahmed",
  description: "React.js Developer Portfolio - Jamal Ahmed. Experienced in healthcare systems, e-commerce platforms, and modern web applications.",
  keywords: "React.js, Next.js, JavaScript, TypeScript, Web Development, Portfolio, Jamal Ahmed",
  author: "Jamal Ahmed",
  icons: {
    icon: [
      {
        url: '/favicon.svg?v=3',
        type: 'image/svg+xml',
        sizes: 'any',
      },
    ],
    shortcut: '/favicon.svg?v=3',
    apple: [
      {
        url: '/favicon.svg?v=3',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: 'Portfolio - Jamal Ahmed',
    description: 'React.js Developer Portfolio - Jamal Ahmed. Experienced in healthcare systems, e-commerce platforms, and modern web applications.',
    url: 'https://portfolio-jamal9952s-projects.vercel.app',
    siteName: 'Jamal Ahmed Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Portfolio - Jamal Ahmed',
    description: 'React.js Developer Portfolio - Jamal Ahmed. Experienced in healthcare systems, e-commerce platforms, and modern web applications.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6366f1" />
        <link rel="canonical" href="https://portfolio-jamal9952s-projects.vercel.app" />
        <link rel="icon" href="/favicon.svg?v=3" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.svg?v=3" />
        <link rel="shortcut icon" href="/favicon.svg?v=3" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=3" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="msapplication-config" content="/favicon.svg?v=2" />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
