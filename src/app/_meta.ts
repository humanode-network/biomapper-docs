import type { MetaRecord } from "nextra";
import { separator } from "../utils/meta";
import { stages, stagesDisplayOrder } from "../data/stages";
import type { MetaRecordItems } from "../types/MetaRecordItems";

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

  biomapper: {
    title: "Biomapper App",
    type: "menu",
    items: stagesDisplayOrder.reduce(
      (items, stageId) => ({
        ...items,
        [stageId]: {
          title: stages[stageId].displayName,
          href: stages[stageId].humanode.uiUrl,
        } as const,
      }),
      {} as MetaRecordItems,
    ),
  },
} as const satisfies MetaRecord;
