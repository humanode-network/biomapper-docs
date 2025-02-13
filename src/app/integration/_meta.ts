import type { MetaRecord } from "nextra";
import links from "../../data/links";

export default {
  "general-information": "General Information",

  interfaces: {
    title: "Solidity API",
    href: links.biomapperSdkDocs,
  },

  showcase: "Showcase",
} as const satisfies MetaRecord;
