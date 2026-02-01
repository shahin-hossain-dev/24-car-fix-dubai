import { Open_Sans, Roboto, Roboto_Serif } from "next/font/google";

import "antd/dist/reset.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import "./globals.css";
import Navbar from "./(client)/components/Navbar";
import Footer from "./(client)/components/Footer";
import RequestCallback from "./(client)/components/RequestCallback";
import Conversation from "./(client)/components/Conversation";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import "@smastrom/react-rating/style.css";
// const openSans = Open_Sans({
//   variable: "--font-open-sans",
//   subsets: ["latin"],
// });

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Repairs Services in Dubai | Delivered in 20 Mins",
  description:
    "Car Repairs Services in Dubai offering fast, reliable mechanical, electrical, and engine repairs with expert technicians and transparent pricing.",
  keywords: [
    "Car Repair Services in Dubai",
    "Auto Repair Service in Dubai",
    "car mechanic service dubai",
    "best car repair service in dubai",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* search console */}
        <meta
          name="google-site-verification"
          content="ihUEsAqN60keSslagcQN7ngCAfdcsuoQi-rvZJzXOfU"
        />
        {/*  Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17406932785"
          strategy="afterInteractive"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17406932785');
          `}
        </Script>

        <Script
          id="auto-repair-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "Battery Fix Pro Dubai",
              image:
                "https://batteryfixprodubai.com/_next/image?url=%2Fimages%2Fperson%2Fperson-4.jpg&w=1200&q=75",
              "@id": "https://batteryfixprodubai.com/#organization",
              url: "https://batteryfixprodubai.com/",
              telephone: "+971565890629",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "67CP+654 - Sheikh Zayed Rd - Trade Center Second - Dubai - United Arab Emirates",
                addressLocality: "Trade Center Second",
                addressCountry: "AE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.220562393366723,
                longitude: 55.28543800000021,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [
                "https://www.facebook.com/batteryfixprodubai/",
                "https://x.com/BatteryFixProDb",
                "https://www.instagram.com/batteryfixprodubai/",
                "https://www.youtube.com/@BatteryFixProDubai",
                "https://www.pinterest.com/batteryfixprodubai",
              ],
            }),
          }}
        />
      </head>
      <body className={`antialiased `}>
        <GoogleAnalytics />
        <AntdRegistry>
          <Navbar />
          {children}
          <Footer />
          <RequestCallback />
          <Conversation />
          <ToastContainer />
        </AntdRegistry>
      </body>
    </html>
  );
}

function GoogleAnalytics() {
  return (
    <>
      {/* Load GA script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3JXX8XDVBS"
        strategy="afterInteractive"
      />

      {/* Init GA */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3JXX8XDVBS');
        `}
      </Script>
    </>
  );
}
