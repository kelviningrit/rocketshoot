// import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const local = localFont({
  src: '../../public/Gulya.otf',
  weight: '400',
  style: 'normal',
})
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frostproperties Online",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={local.className}>{children}</body>
    </html>
  );
}
