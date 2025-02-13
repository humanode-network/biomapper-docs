import type { MetaRecord } from "nextra";
import { bridgedChains, bridgedChainsDisplayOrder } from "../../../data/stages";

const items = bridgedChainsDisplayOrder.reduce((links, bridgedChainId) => {
  const bridgedChain = bridgedChains[bridgedChainId];
  return {
    ...links,
    [bridgedChainId]: {
      title: bridgedChain.generalDisplayName,
      href: `/integration/chains/${bridgedChainId}`,
    },
  };
}, {} as MetaRecord) satisfies MetaRecord;

export default items;
