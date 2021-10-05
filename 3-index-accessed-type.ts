/**
 * Indexed Access Types
 * 像 JavaScript 中使用中括號 [] 一樣，可以取得物件型別中的特定屬性值。
 * 或使用 Union Types 取得多個屬性值的型別。
 */

type Conference = {
  name: string;
  year: number;
  isAddToCalendar: boolean;
  price: number;
};

type T1 = Conference['name'];
type T2 = Conference['name' | 'year'];
type T3 = Conference[keyof Conference];

/**
 * Exercise: 寫一個 Utility Type 可以取得所有物件型別的屬性值
 */
// STEP 1：先透過實際的範例把功能寫成來：取得 Conference 中說用屬性值的型別
// STEP 2：把可以變成參數的地方抽出來
type Values<T extends object> = T[keyof T];
// https://github.com/piotrwitek/utility-types/blob/master/src/utility-types.ts#L25

export {};
