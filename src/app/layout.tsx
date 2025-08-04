import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "印度支付-全行业原生通道服务商",
  description: "印度支付全行业原生通道服务商，专业提供印度UPI原生接口、卢比支付通道等一站式解决方案。与印度顶级金融机构深度合作，为电商、游戏、贸易等全行业客户定制支付场景。支持D0实时结算、卢比回U、超低费率，安全稳定快捷。实时账户管理，多种资金操作方式，助力企业轻松拓展印度市场，抓住商业机遇！",
  authors: [{ name: "塔塔印度支付" }],
  creator: "塔塔印度支付 TATA INDIA PAY",
  publisher: "塔塔印度支付",
  robots: "index, follow",
  alternates: {
    canonical: "https://indiapayment.org",
  },
  openGraph: {
    title: "印度支付-全行业原生通道服务商",
    description: "印度支付全行业原生通道服务商，专业提供印度UPI原生接口、卢比支付通道等一站式解决方案。与印度顶级金融机构深度合作，为电商、游戏、贸易等全行业客户定制支付场景。支持D0实时结算、卢比回U、超低费率，安全稳定快捷。",
    url: "https://indiapayment.org",
    siteName: "塔塔印度支付",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "印度支付-全行业原生通道服务商",
    description: "印度支付全行业原生通道服务商，专业提供印度UPI原生接口、卢比支付通道等一站式解决方案",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
