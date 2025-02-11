import { BridgedChainIdsOrder, StageId, StageIdsOrder } from "./stages.derived";
import { BridgedChainsShape, StagesShape } from "./stages.internal";

// Wait for announcements!
export const bridgedChains = {} as const satisfies BridgedChainsShape;

export const stages = {
  mainnet: {
    displayName: "Mainnet",
    humanode: {
      addresses: {
        biomapper: "0x45E7F628eFd31774De8299EABC80D73Be3E751B3",
        biomapperLog: "0x877Bb6c2d22918563c4688e68b62c2F678Cc0BFD",
      },
      uiUrl: "https://mainnet.biomapper.hmnd.app/",
    },
    bridged: {},
  },
  testnet5: {
    displayName: "Testnet 5",
    humanode: {
      addresses: {
        biomapper: "0x82309C161eD219A0f36C5915A4a3e710B1141C7C",
        biomapperLog: "0x3f2B3E471b207475519989369d5E4F2cAbd0A39F",
      },
      uiUrl: "https://testnet5.biomapper.hmnd.app/",
    },
    bridged: {},
  },
} as const satisfies StagesShape;

export const mainStageId = "mainnet" as const satisfies StageId;

export const stagesDisplayOrder = [
  "mainnet",
  "testnet5",
] as const satisfies StageIdsOrder;

export const bridgedChainsDisplayOrder =
  [] as const satisfies BridgedChainIdsOrder;
