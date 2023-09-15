import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice App",
  description: "App for testing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
