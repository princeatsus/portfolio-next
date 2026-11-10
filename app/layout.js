import { Montserrat, Poppins } from "next/font/google";
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

export const metadata = {
  metadataBase: new URL("https://princeelesi.vercel.app"),
  title: "Elesi Prince Atsu | Aspiring Software Engineer",
  description:
    "HND Information Technology student building reliable systems. See my projects, including a live dues management platform with Paystack payments.",
  openGraph: {
    title: "Elesi Prince Atsu | Aspiring Software Engineer",
    description:
      "HND Information Technology student building reliable systems. See my projects, including a live dues management platform with Paystack payments.",
    type: "website",
    siteName: "Elesi Prince Atsu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elesi Prince Atsu | Aspiring Software Engineer",
    description:
      "HND Information Technology student building reliable systems. See my projects, including a live dues management platform with Paystack payments.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}