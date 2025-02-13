const anyForNever = <const T>(val: T): [T] extends [never] ? any : T => val;

export default anyForNever;
