// This file is not supposed to be edited when the data is edited.
// It contains mainly the support types and values that are derived from
// the manually entered values.

import { NeverForEmpty } from "../types/NeverForEmpty";
import { TuplifyUnion } from "../types/unionToTuple";
import { bridgedChains, stages } from "./stages";

export type Stages = typeof stages;

export type StageId = keyof Stages;

export type StageIdsOrder = TuplifyUnion<StageId>;

export type BridgedChains = typeof bridgedChains;

export type BridgedChainId = NeverForEmpty<keyof BridgedChains>;

export type BridgedChainIdsOrder = TuplifyUnion<BridgedChainId>;
