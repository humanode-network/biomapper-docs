export type NeverForEmpty<T> = T extends object ? never : T;
