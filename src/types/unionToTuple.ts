/**
 * trick to combine multiple unions of objects into a single object
 * only works with objects not primitives
 * @param union - Union of objects
 * @returns Intersection of objects
 */
type UnionToIntersection<union> = (
  union extends any ? (k: union) => void : never
) extends (k: infer intersection) => void
  ? intersection
  : never;
/**
 * get last element of union
 * @param Union - Union of any types
 * @returns Last element of union
 */
type GetUnionLast<Union> =
  UnionToIntersection<
    Union extends any ? () => Union : never
  > extends () => infer Last
    ? Last
    : never;
/**
 * Convert union to tuple
 * @param Union - Union of any types, can be union of complex, composed or primitive types
 * @returns Tuple of each elements in the union
 */
export type TuplifyUnion<Union, Tuple extends unknown[] = []> = [
  Union,
] extends [never]
  ? Tuple
  : TuplifyUnion<
      Exclude<Union, GetUnionLast<Union>>,
      [GetUnionLast<Union>, ...Tuple]
    >;
