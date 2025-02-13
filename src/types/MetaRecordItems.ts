import { MetaRecord } from "nextra";

type MetaItem = MetaRecord[string];

export type MetaRecordItems = MetaItem extends { items: infer T } | infer _
  ? T
  : never;
