import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import logo from "./assets/logo.png";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image src={logo} height={32} width={32} alt="Humanode" />
      <span>Humanode Biomapper</span>
    </>
  ),
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
