// This file is not supposed to be edited when the data is edited.
// This file not supposed to be imported from the outside of the data dir.
// It contains mainly the support types and values needed for strict type
// definitions of the data.

import { BridgedChainId } from "./stages.derived";
import { GeneralBridgedChainInfo, Stage } from "./stages.types";

// Any stages, but each must have same bridged chains.
export type StagesShape = Record<string, Stage<BridgedChainId>>;

// Any shape of a list of global bridged chain info.
export type BridgedChainsShape = Record<string, GeneralBridgedChainInfo>;
