import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap, normalizePageMap } from "nextra/page-map";

import "./globals.css";

import Image from "next/image";
import FaviconImage from "../assets/favicon.png";
import LogoImage from "../assets/logo.png";
import { Metadata } from "next";
import links from "../data/links";
import { injectPageMap as injectChainsPageMap } from "./integration/chains/pageMap";

const logo = (
  <div className="flex flex-row items-center gap-2">
    <Image src={LogoImage} width={42} height={42} alt="Humanode" />
    <span className="font-bold">Humanode Biomapper</span>
  </div>
);

export const metadata: Metadata = {
  title: {
    default: "Humanode Biomapper Docs",
    template: "%s - Humanode Biomapper Docs",
  },
};

const navbar = (
  <Navbar
    logo={logo}
    projectLink={links.biomapperDocsRepo}
    chatLink={links.chat}
  />
);

const footer = (
  <Footer>
    &copy; 2023 - {new Date().getFullYear()} by Humanode Biomapper Documentation
    contributors.
  </Footer>
);

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap();

  const extendedPageMap = injectChainsPageMap(pageMap);

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href={FaviconImage.src} type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={extendedPageMap}
          docsRepositoryBase={links.biomapperDocsRepoMaster}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
