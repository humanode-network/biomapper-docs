import { BridgedChainIdsOrder, StageId, StageIdsOrder } from "./stages.derived";
import { BridgedChainsShape, StagesShape } from "./stages.internal";

// Wait for announcements!
export const bridgedChains = {
  avalanche: {
    generalDisplayName: "Avalanche",
  },
  base: {
    generalDisplayName: "Base",
  },
  filecoin: {
    generalDisplayName: "Filecoin",
  },
  sonic: {
    generalDisplayName: "Sonic",
  },
  sei: {
    generalDisplayName: "Sei",
  },
  hyperliquid: {
    generalDisplayName: "Hyperliquid EVM",
  },
  story: {
    generalDisplayName: "Story",
  },
} as const satisfies BridgedChainsShape;

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
    bridged: {
      avalanche: {
        displayName: "Avalanche C-Chain",
        addresses: {
          bridgedBiomapper: "0x5787AB5aa6ee0b20569B9b3680eC4bb4A90663F4",
        },
      },
      base: {
        displayName: "Base",
        addresses: {
          bridgedBiomapper: "0x31e98F489ad65dF5Ee43CBe06e4f35557Cd0abb2",
        },
      },
      filecoin: {
        displayName: "Filecoin",
        addresses: {
          bridgedBiomapper: "0x1a28DacdF9F5b49A32D4f671df9407FAD0f873d4",
        },
      },
      sonic: {
        displayName: "Sonic",
        addresses: {
          bridgedBiomapper: "0xD613303dC22BBC11B97E6fBcB7fB72A7d2132A87",
        },
      },
      sei: {
        displayName: "Sei",
        addresses: {
          bridgedBiomapper: "0xB263042d1CdE06630aeF5FaC6b2efDdB0A6D5F78",
        },
      },
      hyperliquid: {
        displayName: "Hyperliquid EVM",
        addresses: {
          bridgedBiomapper: "0xf8F9C2F35816bC0581D5e2223ad88D51CaF5954e",
        },
      },
      story: {
        displayName: "Story",
        addresses: {
          bridgedBiomapper: "0xd89C46e71FC82eb297344a73edF5F54dD9E8e952",
        },
      },
    },
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
    bridged: {
      avalanche: {
        displayName: "Avalanche Testnet Fuji C-Chain",
        addresses: {
          bridgedBiomapper: "0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2",
        },
      },
      base: {
        displayName: "Base Testnet Sepolia",
        addresses: {
          bridgedBiomapper: "0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2",
        },
      },
      filecoin: {
        displayName: "Filecoin Testnet Calibration",
        addresses: {
          bridgedBiomapper: "0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2",
        },
      },
      sonic: {
        displayName: "Sonic Testnet Blaze",
        addresses: {
          bridgedBiomapper: "0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2",
        },
      },
      sei: {
        displayName: "Sei Testnet Atlantic-2",
        addresses: {
          bridgedBiomapper: "0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2",
        },
      },
      hyperliquid: {
        displayName: "Hyperliquid EVM Testnet",
        addresses: {
          bridgedBiomapper: "0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2",
        },
      },
      story: {
        displayName: "Story Testnet Aeneid",
        addresses: {
          bridgedBiomapper: "0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2",
        },
      },
    },
  },
} as const satisfies StagesShape;

export const mainStageId = "mainnet" as const satisfies StageId;

export const stagesDisplayOrder = [
  "mainnet",
  "testnet5",
] as const satisfies StageIdsOrder;

export const bridgedChainsDisplayOrder = [
  "avalanche",
  "base",
  "filecoin",
  "sonic",
  "sei",
  "hyperliquid",
  "story",
] as const satisfies BridgedChainIdsOrder;
