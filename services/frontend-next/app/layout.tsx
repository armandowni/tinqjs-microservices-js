import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} flex h-screen`}>
        <div className="w-48"></div>
        <div className="flex-1 bg-white text-black my-5 rounded-xl overflow-hidden">
          <div className="w-full flex items-center border-b-2 border-opacity-50 p-3">
            <div className="flex gap-3 items-center w-96">
              <div className="rounded-full w-10 h-10">
                <div className="bg-red-500 rounded-full w-10 h-10"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm"> Welcome,</span>
                <span className="font-semibold text-lg"> This Username</span>
              </div>
            </div>
            {/* <Searchbox /> */}
          </div>
          <div
            className=" overflow-y-scroll overflow-x-hidden p-7"
            style={{ height: "86vh" }}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
