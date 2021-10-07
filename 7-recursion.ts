/**
 * Recursion
 */

// 沒有使用 Recursive Type
type ValueOrArray<T> = T | T[];

// 使用了 Recursive Type Aliases
// type ValueOrNestedArray<T> = T | T[] | T[][] | T[][][] | ...;
type ValueOrNestedArray<T> = T | ValueOrNestedArray<T>[];

type NumberArray = ValueOrArray<number>;
type NestedNumberArray = ValueOrNestedArray<number>;

let numberArray: NumberArray = [0, 1, [2]];
let nestedNumberArray: NestedNumberArray = [0, 1, [2, [3]]];

export {};
