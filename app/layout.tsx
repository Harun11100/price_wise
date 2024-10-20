import type { Metadata } from "next";

import "./globals.css";
import { Inter,Space_Grotesk} from 'next/font/google'

const inter =Inter({subsets:['latin']})
const spaceGrotesk =Space_Grotesk({subsets:['latin'],weight:['300','400','500','600','700']})

export const metadata: Metadata = {
  title: "Price_Wise",
  description: "Track product prices effortlessly ans save mony on online shoping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
