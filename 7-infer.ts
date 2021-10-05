/**
 * infer
 * 只能在 Conditional Types 中的 extends 被使用
 * 推導出來的型別 R 只能用在符合 True 的條件使用
 */

/**
 * 範例一
 */
type Flatten<T> = T extends (infer R)[] ? R : T;

type T1 = Flatten<string[]>;
type T2 = Flatten<boolean>;

/**
 * 範例二
 */

type InferResp<T> = T extends { response: infer R; status: number } ? R : T;

const successResp = { response: { data: 'foobar' }, status: 200 };
const errorResp = { status: 400 };

type T3 = InferResp<typeof successResp>; // { data: string }
type T4 = InferResp<typeof errorResp>; // { status: number }

export {};
