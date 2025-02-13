import type { MetaRecord } from "nextra";
import { bridgedChains, bridgedChainsDisplayOrder } from "../../../data/stages";

const items = bridgedChainsDisplayOrder.reduce((links, bridgedChainId) => {
  return {
    ...links,
    [bridgedChainId]: {
      title: bridgedChains[bridgedChainId].generalDisplayName,
      href: `/integration/chains/${bridgedChainId}`,
    },
  };
}, {} as MetaRecord) satisfies MetaRecord;

export default items;
