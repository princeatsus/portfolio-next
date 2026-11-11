import { Montserrat, Poppins, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  metadataBase: new URL("https://princeelesi.vercel.app"),
  title: "Prince Elesi | Aspiring Software Engineer",
  description:
    "HND Information Technology student building reliable systems. See my projects, including a live dues management platform with Paystack payments.",
  openGraph: {
    title: "Prince Elesi | Aspiring Software Engineer",
    description:
      "HND Information Technology student building reliable systems. See my projects, including a live dues management platform with Paystack payments.",
    type: "website",
    siteName: "Prince Elesi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Elesi | Aspiring Software Engineer",
    description:
      "HND Information Technology student building reliable systems. See my projects, including a live dues management platform with Paystack payments.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}