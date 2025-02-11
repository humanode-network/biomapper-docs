import { BridgedChainId, BridgedChains } from "../../../../data/stages.derived";

export type Props<Id extends BridgedChainId> = {
  bridgedChainId: Id;
  bridgedChain: BridgedChains[Id];
};
