import Script from "next/script";

export default function GTag() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZGMQ3DJ114"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZGMQ3DJ114');
        `}
      </Script>
    </>
  );
}
