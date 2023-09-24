import React from "react";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

console.log("%c \uD83E\uDD19 Developed by crysosancher- https://www.linkedin.com/in/crysosancher/", "font-size: 12px;font-family: monospace;background: black;display: inline-block;color: white;padding: 15px;border: 2px solid white");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Shiva Community is an active community of friends and easy going people enthusiastically engaged in mutual transaction of ideas spanning over a spectrum of headers ranging from your typical Bakchodi to some serious Crypto and Technology..."
        />
        <meta
          name="keywords"
          content="Shiva,Shiva family,Shiva birthday,stats,donate,gdrive,Shiva website,Shiva webpage,Shiva community,Shiva bot,whatsapp group,whatsapp bot,insta downloader,youtube downloader,movies,series,technology,news,programming,crypto,stocks,anime,sports,sticker,bot,study,meme,gaming,automobile,astronomy,space,bgmi,coc,status,Shiva whatsapp group,Shiva telegram group,Shiva telegram channel,Shiva facebook group,Shiva discord channel"
        />
        <meta
          property="og:image"
          content="Shiva"
        />
        <meta property="og:title" content="Shiva" />
        <meta
          property="og:description"
          content="Shiva is an active community of friends and easy going people enthusiastically engaged in mutual transaction of ideas spanning over a spectrum of headers ranging from your typical Bakchodi to some serious Crypto and Technology..."
        />
        <meta property="og:URL" content="Shiva" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="sJN2MPzgDpzPOlooLsyGEpQUDoaPdXM9OYMBoCGuzHU"
        />
        <title>Shiva</title>
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VN9V7K8V4P"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag("config", "G-VN9V7K8V4P");
        `}
      </Script>
      <Nav />
      {/* <p className="left-0 bottom-0 text-left fixed z-20 text-sm">
        website is under maintainence...
        <br />
        if you&apos;ve any suggestions about website,
        <br />
        feel free to discuss in any Shiva group.
      </p> */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
