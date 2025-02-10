// Fixed order.

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;

type LastOf<T> =
  UnionToIntersection<T extends any ? () => T : never> extends () => infer R
    ? R
    : never;

type Push<T extends any[], V> = [...T, V];

export type TuplifyUnionFixedOrder<
  T,
  L = LastOf<T>,
  N = [T] extends [never] ? true : false,
> = true extends N ? [] : Push<TuplifyUnionFixedOrder<Exclude<T, L>>, L>;

// Any order.

type TuplifyUnionAnyOrderRecurse<U extends string> = {
  [S in U]: Exclude<U, S> extends never
    ? [S]
    : [...TuplifyUnionAnyOrderRecurse<Exclude<U, S>>, S];
}[U];

export type TuplifyUnionAnyOrder<U extends string | never> = [U] extends [never]
  ? []
  : TuplifyUnionAnyOrderRecurse<U>;
