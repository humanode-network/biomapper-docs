import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import logoUrl from "./assets/logo.png";
import faviconUrl from "./assets/favicon.png";
import { useRouter } from "next/router";

const logo = (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "8px",
    }}
  >
    <Image src={logoUrl} width={42} height={42} alt="Humanode" />
    <div>Humanode Biomapper Documentation</div>
  </div>
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
  useNextSeoProps() {
    const { asPath } = useRouter();
    const title = "Humanode Biomapper Docs";
    return {
      titleTemplate: asPath === "/" ? title : `%s - ${title}`,
    };
  },
  footer: {
    text: "Humanode Biomapper Documentation",
  },
};

export default config;
