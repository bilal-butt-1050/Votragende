import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/animations.css";
import "./styles/hero.css";
import "./styles/sections.css";
import "./styles/footer.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://azeemtoofani.com"),
  title: "Azeem Toofani | Singer, Guitarist & Performing Artist",
  description:
    "Official website of Azeem Toofani, a singer, guitarist, and performing artist. Explore his music, performances, portfolio, and artistic journey.",
  keywords: [
    "Azeem Toofani",
    "Azeem",
    "Toofani",
    "Singer",
    "Guitarist",
    "Musician",
    "Artist",
    "Performer",
    "Music Portfolio",
    "Live Performances"
  ],

  openGraph: {
    title: "Azeem Toofani | Singer & Guitarist",
    description:
      "Discover the music and performances of Azeem Toofani, a singer and guitarist known for expressive vocals and signature guitar style.",
    url: "https://azeemtoofani.com",
    siteName: "Azeem Toofani",
    images: [
      {
        url: "/images/pic-3.jpeg",
        width: 1200,
        height: 630,
        alt: "Azeem Toofani Singer Guitarist"
      }
    ],
    locale: "en_US",
    type: "website"
  },


  alternates: {
    canonical: "https://azeemtoofani.com"
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grain-overlay"></div>
        {children}
      </body>
    </html>
  );
}