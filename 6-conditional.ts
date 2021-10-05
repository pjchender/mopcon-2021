/**
 * Conditional Types
 * X extends Y ? T : F
 */

type T1 = 3 extends number ? 'yes' : 'no';
type T2 = number extends 3 ? 'yes' : 'no';

type T3 = 'MOPCON' extends string ? true : false;
type T4 = 'MOPCON' extends any ? true : false;

type T5 = 3 extends string ? 'T' : 'F';

type T6 = never extends 'MOPCON' ? true : false;
type T7 = never extends true ? true : false;

/**
 * Distributive Conditional Types
 */
type DistributeUnion<T> = T extends any ? T : never;
type DistributeUnionReturn = DistributeUnion<'a' | 'b' | 'c'>; // "a" | "b" | "c"
//  type DistributeUnionReturn =
//   | DistributeUnion<'a'>
//   | DistributeUnion<'b'>
//   | DistributeUnion<'c'>;

/**
 * Exercise：寫一個 Utility Type 過濾掉不想要的型別
 */

// STEP 1：先透過實際的範例把功能寫成來：改寫 DistributeUnion 讓它只能滿足特定型別
// STEP 2：把可以變成參數的地方抽出來

export {};
