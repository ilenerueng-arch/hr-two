import type { Metadata } from "next";
import { Noto_Sans_Myanmar, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const thai = Noto_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

const myanmar = Noto_Sans_Myanmar({
  variable: "--font-myanmar",
  subsets: ["myanmar"],
  weight: ["400", "600"],
});

const title = "HR WTO — ระบบ HR ใช้ง่าย 2 ภาษา ไทย-พม่า";
const description =
  "เว็บ HR สำหรับพนักงานและ HR admin ใช้ง่ายแม้ไม่คุ้นเทคโนโลยี เลือกได้ทั้งภาษาไทยและภาษาพม่า ภาพสวย ดูเข้าใจทันที";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "HR WTO",
    locale: "th_TH",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${thai.variable} ${myanmar.variable} antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
