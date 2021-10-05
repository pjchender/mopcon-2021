/**
 * Utility Types 是什麼？
 * 把「型別」當成參數一樣，透過 Utility Types 中取得型的型別。
 * TypeScript 中內建許多不同的 Utility Types。
 */
type ConferenceNameWithNull =
  | 'MOPCON'
  | 'ModernWeb'
  | 'JSDC'
  | 'Laravel'
  | null;

type T1 = NonNullable<ConferenceNameWithNull>;

/**
 * keyof 的使用：取得物件型別中屬性的 Key 變成 Union Types。
 */
type Conference = {
  name: string;
  year: number;
  isAddToCalendar: boolean;
  price: number;
};

type KeysOfConference = keyof Conference & string;

/**
 * typeof 的使用：後面接的是 JS 的「值」而不是 TS 的型別。
 */
const mopcon = {
  name: 'MOPCON',
  year: 2021,
  isAddToCalendar: true,
  price: 800,
};

type KeysOfConferenceFromTypeOf = keyof typeof mopcon;

/**
 * Template Literals：TypeScript 會根據所傳入的聯集，自動組成新的聯集
 */
type X = 'left' | 'right';
type Y = 'top' | 'bottom';
type Position = `${X}-${Y}`;

type ConferenceName = 'MOPCON' | 'ModernWeb' | 'JSDC' | 'Laravel';
type AtConference = `at${ConferenceName}Conference`;

/**
 * Exercise：寫一個 Utility Type 可以取得物件型別中所有屬性的 Keys。
 */

// STEP 1：先透過實際的範例把功能寫成來：取得 Conference 中所有屬性的 Keys。

// STEP 2：把可以變成參數的地方抽出來
// https://github.com/piotrwitek/utility-types/blob/master/src/utility-types.ts#L13

export {};
