import type { MetaRecord } from "nextra";
import links from "../../data/links";

export default {
  "general-information": "General Information",

  interfaces: {
    title: "Solidity API",
    href: links.biomapperSdkDocs,
  },

  chains: {
    // This is not really a separator, it get overwritten by our hacks
    // at `pageMap.ts`.
    type: "separator",
  },

  showcase: "Showcase",
} as const satisfies MetaRecord;
