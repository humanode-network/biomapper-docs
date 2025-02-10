// This file is not supposed to be edited when the data is edited.
// It contains mainly the support types and values that are derived from
// the manually entered values.

import { TuplifyUnionAnyOrder } from "../types/unionToTuple";
import { bridgedChainIds, stages } from "./stages";

export type Stages = typeof stages;

export type StageId = keyof Stages;

export type StageIdsOrder = TuplifyUnionAnyOrder<StageId>;

export type BridgedChainId = (typeof bridgedChainIds)[number];

export type BridgedChainIdsOrder = TuplifyUnionAnyOrder<BridgedChainId>;
