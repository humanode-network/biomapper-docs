// Checks whether a tuple T contains only unique items.
type IsUnique<T extends readonly any[]> = T extends readonly [
  infer F,
  ...infer R,
]
  ? F extends R[number]
    ? false
    : IsUnique<R>
  : true;

// Checks that T is an exact permutation of U (i.e. it contains each element of U exactly once).
type IsExactPermutation<T extends readonly any[], U> =
  // First check that the union of T’s elements equals U.
  [T[number]] extends [U]
    ? [U] extends [T[number]]
      ? // Then check that T has no duplicates.
        IsUnique<T> extends true
        ? T
        : never
      : never
    : never;

export default IsExactPermutation;
