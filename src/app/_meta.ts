import type { MetaRecord } from "nextra";
import { separator } from "../utils/meta";

export default {
  index: {
    title: "Overview",
    theme: {
      breadcrumb: false,
    },
  },

  "---getting-started": {
    ...separator,
    title: "Getting started",
  },

  about: "About",
  "user-flow": "User Flow",
  generations: "Generations",
  bridging: "Bridging",

  "---contract-addresses": separator,

  "contract-addresses": "Contract Addresses",

  "---integration": {
    ...separator,
    title: "Integration",
  },

  integration: {
    type: "doc",
    display: "children",
  },

  "---showcase": separator,

  showcase: "Showcase",
} as const satisfies MetaRecord;
