import "./globals.css";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex justify-center items-center w-full">{children}</body>
    </html>
  );
}
