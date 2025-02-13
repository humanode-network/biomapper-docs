import type { MetaRecord } from "nextra";
import { bridgedChains, bridgedChainsDisplayOrder } from "../../../data/stages";
import anyForNever from "../../../utils/anyForNever";

const items = bridgedChainsDisplayOrder.reduce((links, bridgedChainId) => {
  const bridgedChain = anyForNever(bridgedChains[bridgedChainId]);
  return {
    ...links,
    [bridgedChainId]: {
      title: bridgedChain.generalDisplayName,
      href: `/integration/chains/${bridgedChainId}`,
    },
  };
}, {} as MetaRecord) satisfies MetaRecord;

export default items;
