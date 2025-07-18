import {
  StageId,
  defineStageIdsOrder,
  defineBridgedChainIdsOrder,
} from "./stages.derived";
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
  janction: {
    generalDisplayName: "Janction",
  },
  arbitrum: {
    generalDisplayName: "Arbitrum One",
  },
  manta: {
    generalDisplayName: "Manta",
  },
  scroll: {
    generalDisplayName: "Scroll",
  },
  hemi: {
    generalDisplayName: "Hemi",
  },
  nibiru: {
    generalDisplayName: "Nibiru",
  },
  unichain: {
    generalDisplayName: "Unichain",
  },
  linea: {
    generalDisplayName: "Linea",
  },
  metis: {
    generalDisplayName: "Metis",
  },
  soneium: {
    generalDisplayName: "Soneium",
  },
  vanar: {
    generalDisplayName: "Vanar",
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
      janction: null,
      arbitrum: {
        displayName: "Arbitrum One",
        addresses: {
          bridgedBiomapper: "0xd1f316DFf4568F3d78970CeA59a0781d34aA690E",
        },
      },
      manta: {
        displayName: "Manta Pacific Mainnet",
        addresses: {
          bridgedBiomapper: "0x892Eb922dD2795d790a43E1c052A3936D564C7DB",
        },
      },
      scroll: {
        displayName: "Scroll",
        addresses: {
          bridgedBiomapper: "0xD53aE65f17dc16DF84Cf6ff5Ac44cF1d16d534Eb",
        },
      },
      hemi: {
        displayName: "Hemi",
        addresses: {
          bridgedBiomapper: "0x4bC11D5B880AfCF2B817d77dBb73875105CfcE1b",
        },
      },
      nibiru: {
        displayName: "Nibiru Cataclysm-1",
        addresses: {
          bridgedBiomapper: "0x541D5d8162cda504a26084330EBcf9404039e4c1",
        },
      },
      unichain: {
        displayName: "Unichain",
        addresses: {
          bridgedBiomapper: "0x32C96D0BE22b2d705bfc5Bcbeea31358857fD4d9",
        },
      },
      linea: {
        displayName: "Linea",
        addresses: {
          bridgedBiomapper: "0x2F77Cf91D9EB917aA94AC5868b443f524f7523C5",
        },
      },
      metis: {
        displayName: "Metis Andromeda Mainnet",
        addresses: {
          bridgedBiomapper: "0x7Bc956A55ec813447142E1183974bE2e496Ee444",
        },
      },
      soneium: {
        displayName: "Soneium",
        addresses: {
          bridgedBiomapper: "0x5BeC6Db8Aaa8F1Ad3dDD93BDeC910E7Ed8Eb15f0",
        },
      },
      vanar: {
        displayName: "Vanar",
        addresses: {
          bridgedBiomapper: "0xfbE6d17c5c4d8fa92A932A6d269f4e43f0Fc67Dc",
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
      janction: {
        displayName: "Janction Testnet Sepolia",
        addresses: {
          bridgedBiomapper: "0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2",
        },
      },
      arbitrum: {
        displayName: "Arbitrum One Testnet Sepolia",
        addresses: {
          bridgedBiomapper: "0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2",
        },
      },
      manta: {
        displayName: "Manta Pacific Testnet Sepolia",
        addresses: {
          bridgedBiomapper: "0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2",
        },
      },
      scroll: {
        displayName: "Scroll Testnet Sepolia",
        addresses: {
          bridgedBiomapper: "0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2",
        },
      },
      hemi: {
        displayName: "Hemi Testnet Sepolia",
        addresses: {
          bridgedBiomapper: "0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2",
        },
      },
      nibiru: {
        displayName: "Nibiru Testnet Testnet-2",
        addresses: {
          bridgedBiomapper: "0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2",
        },
      },
      unichain: {
        displayName: "Unichain Testnet Sepolia",
        addresses: {
          bridgedBiomapper: "0xa6a8Ad302c5fF23ccA2895eae8BA938CEa338896",
        },
      },
      linea: {
        displayName: "Linea Testnet Sepolia",
        addresses: {
          bridgedBiomapper: "0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2",
        },
      },
      metis: {
        displayName: "Metis Testnet (Sepolia)",
        addresses: {
          bridgedBiomapper: "0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2",
        },
      },
      soneium: {
        displayName: "Soneium Testnet (Minato)",
        addresses: {
          bridgedBiomapper: "0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2",
        },
      },
      vanar: {
        displayName: "Vanar Testnet (Vanguard)",
        addresses: {
          bridgedBiomapper: "0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2",
        },
      },
    },
  },
} as const satisfies StagesShape;

export const mainStageId = "mainnet" as const satisfies StageId;

export const stagesDisplayOrder = defineStageIdsOrder(["mainnet", "testnet5"]);

export const bridgedChainsDisplayOrder = defineBridgedChainIdsOrder([
  "avalanche",
  "base",
  "filecoin",
  "sonic",
  "sei",
  "hyperliquid",
  "story",
  "janction",
  "arbitrum",
  "manta",
  "scroll",
  "hemi",
  "nibiru",
  "unichain",
  "linea",
  "metis",
  "soneium",
  "vanar",
]);
