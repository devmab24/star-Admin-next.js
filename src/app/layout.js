/* eslint-disable @next/next/no-css-tags */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Global CSS

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Next.js Metadata API
export const metadata = {
  title: {
    default: "Star Admin 2",
    template: "%s | Star Admin 2",
  },
  description: "Next.js version of StarAdmin template",
  icons: {
    icon: "/images/favicon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    shrinkToFit: "no",
  },
  charset: "utf-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Vendor CSS */}
        <link rel="stylesheet" href="/vendors/feather/feather.css" />
        <link rel="stylesheet" href="/vendors/mdi/css/materialdesignicons.min.css" />
        <link rel="stylesheet" href="/vendors/ti-icons/css/themify-icons.css" />
        <link rel="stylesheet" href="/vendors/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/vendors/typicons/typicons.css" />
        <link rel="stylesheet" href="/vendors/simple-line-icons/css/simple-line-icons.css" />
        <link rel="stylesheet" href="/vendors/css/vendor.bundle.base.css" />
        <link rel="stylesheet" href="/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css" />

        {/* Page CSS */}
        <link rel="stylesheet" href="/vendors/datatables.net-bs4/dataTables.bootstrap4.css" />
        <link rel="stylesheet" href="/js/select.dataTables.min.css" />
        <link rel="stylesheet" href="/vendors/select2/select2.min.css" />
        <link rel="stylesheet" href="/vendors/select2-bootstrap-theme/select2-bootstrap.min.css" />

        {/* Main style */}
        <link rel="stylesheet" href="/css/style.css" />

        {children}
      </body>
    </html>
  );
}
