import { Hex } from "../types/Hex";

export type HumanodeChainInfo = {
  addresses: {
    biomapper: Hex;
    biomapperLog: Hex;
  };
  uiUrl: string;
};

export type BridgedChainInfo = {
  displayName: string;
  addresses: {
    bridgedBiomapper: Hex;
  };
};

export type Stage<BridgedChainIds extends string> = {
  displayName: string;
  humanode: HumanodeChainInfo;
  bridged: Record<BridgedChainIds, BridgedChainInfo | null>;
};

export type GeneralBridgedChainInfo = {
  generalDisplayName: string;
};
