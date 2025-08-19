import Head from "next/head";
import Script from "next/script";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function DashboardLayout({ children, pageTitle = "Star Admin2" }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>

      <main>
        <div className="container-scroller">
          <Navbar />
          <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">
              <div className="content-wrapper">
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </main>

      {/* JS vendors */}
      <Script
        src="/vendors/js/vendor.bundle.base.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/vendors/chart.js/chart.umd.js"
        strategy="afterInteractive"
      />
      <Script
        src="/vendors/progressbar.js/progressbar.min.js"
        strategy="afterInteractive"
      />
      <Script src="/js/off-canvas.js" strategy="afterInteractive" />
      <Script src="/js/template.js" strategy="afterInteractive" />
      <Script src="/js/settings.js" strategy="afterInteractive" />
      <Script src="/js/hoverable-collapse.js" strategy="afterInteractive" />
      <Script src="/js/todolist.js" strategy="afterInteractive" />
      <Script src="/js/jquery.cookie.js" strategy="afterInteractive" />
      <Script src="/js/dashboard.js" strategy="afterInteractive" />
    </>
  );
}