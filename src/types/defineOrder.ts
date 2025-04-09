import IsExactPermutation from "./IsExactPermutation";

function defineOrderFor<U extends string>() {
  return <const T extends U[]>(order: IsExactPermutation<T, U>) => order;
}

export default defineOrderFor;
