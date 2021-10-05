/**
 * Index Signature
 * Mapped Types 的前身，可以指定屬性 Value 的型別
 * 但無法實質限制屬性 Key，只能很廣泛的用 string 或 symbol 來指定
 */

type ConferenceDict = {
  [Key: string]: string | number;
};

/**
 * Mapped Type
 * 透過 Mapped Types 可以解決 Index Signatures 的 key 太過廣泛的問題。
 * Mapped Types 會搭配關鍵字 in 使用，非常強大，可以跑類似迴圈的功能。
 */
type T = {
  [P in 'MOPCON' | 'ModernWeb' | 'JSDC' | 'Laravel']: string;
};

type Conference = {
  name: string;
  year: number;
  isAddToCalendar: boolean;
  price: number;
};

/**
 * Mapped Type 經常搭配 key 使用，一次修改物件型別中所有屬性 value 的型別。
 * 在 [P in ...] 中建立的變數 P 是可以在 value 被使用的
 */
type CloneConference = {
  [P in keyof Conference]: Conference[P];
};

/**
 * 修改所有物件型別的屬性 Value
 */
type T1 = {
  [K in keyof Conference]: string;
};

/**
 * 修改所有物件型別的屬性 Key
 */
type T2 = {
  [K in keyof Conference as `at${string & K}`]: Conference[K];
};

/**
 * Exercise：寫一個 Utility Type 可以取出物件型別中的部分屬性。
 * 例如，只要取出 Conference 型別中的 name 和 price 屬性
 */
// STEP 1：先透過實際的範例把功能寫成來
// STEP 2：把可以變成參數的地方抽出來

export {};
