import type { MetaRecord } from "nextra";
import { separator } from "../utils/meta";

const noBreadcrumb = (title: string) =>
  ({
    title,
    theme: {
      breadcrumb: false,
    },
  }) as const;

export default {
  index: noBreadcrumb("Overview"),

  "---getting-started": {
    ...separator,
    title: "Getting started",
  },

  about: noBreadcrumb("About"),
  "user-flow": noBreadcrumb("User Flow"),
  generations: noBreadcrumb("Generations"),
  bridging: noBreadcrumb("Bridging"),

  "---contract-addresses": separator,

  "contract-addresses": noBreadcrumb("Contract Addresses"),

  "---integration": {
    ...separator,
    title: "Integration",
  },

  integration: {
    type: "doc",
    display: "children",
  },
} as const satisfies MetaRecord;
