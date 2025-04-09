// This file is not supposed to be edited when the data is edited.
// It contains mainly the support types and values that are derived from
// the manually entered values.

import defineOrderFor from "../types/defineOrder";
import { NeverForEmpty } from "../types/NeverForEmpty";
import { bridgedChains, stages } from "./stages";

export type Stages = typeof stages;

export type StageId = keyof Stages;

export const defineStageIdsOrder = defineOrderFor<StageId>();

export type BridgedChains = typeof bridgedChains;

export type BridgedChainId = NeverForEmpty<keyof BridgedChains>;

export const defineBridgedChainIdsOrder = defineOrderFor<BridgedChainId>();
