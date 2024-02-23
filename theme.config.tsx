import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import logoUrl from "./assets/logo.png";
import faviconUrl from "./assets/favicon.png";

const logo = (
  <>
    <Image src={logoUrl} height={36} width={36} alt="Humanode" />
    <span>
      Humanode Biomapper <br /> Documentation
    </span>
  </>
);

const head = (
  <>
    <link rel="icon" href={faviconUrl.src} type="image/png" />
  </>
);

const config: DocsThemeConfig = {
  logo,
  head,
  project: {
    link: "https://github.com/humanode-network/biomapper-docs",
  },
  chat: {
    link: "https://link.humanode.io/chat",
  },
  docsRepositoryBase:
    "https://github.com/humanode-network/biomapper-docs/tree/master",
  footer: {
    text: "Humanode Biomapper Documentation",
  },
};

export default config;
