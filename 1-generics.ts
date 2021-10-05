/**
 * 泛型：讓「型別」也變成一個「變數」，可以根據不同的情況套用不同的型別。
 */

type Conference = {
  name: string;
  year: number;
  isAddToCalendar: boolean;
  price: number;
};

// function getName(p) {
//   return p.firstName;
// }
// 改成泛型的寫法，讓它可以帶入參數
type ConferenceWithGenerics<T> = {
  name: string;
  year: number;
  isAddToCalendar: boolean;
  price: T;
};

const mopcon: ConferenceWithGenerics<string> = {
  name: 'MOPCON',
  year: 2021,
  isAddToCalendar: true,
  price: '1000 元',
};

/**
 * 泛型限制（Generic Constraints）：
 * 泛型就像一個型別為 any 的變數一樣，使用者愛帶什麼型別都可以，但可以透過 extends 來為它加上限制。
 */

type ConferenceWithGenericConstrains<T extends string | number> = {
  name: string;
  year: number;
  isAddToCalendar: boolean;
  price: T;
};
// const mopcon: ConferenceWithGenericConstrains<boolean> = {
//   name: 'MOPCON',
//   year: 2021,
//   isAddToCalendar: true,
//   price: true,
// };

/**
 * 泛型參數的預設值（Generic Parameter Defaults）
 */
type ConferenceWithDefault<T extends string | number = number> = {
  name: string;
  year: number;
  isAddToCalendar: boolean;
  price: T;
};

// 沒有帶入型別參數的話，會套用預設值
// const mopcon: ConferenceWithDefault = {
//   name: 'MOPCON',
//   year: 2021,
//   isAddToCalendar: true,
//   price: 1000,
// };

export {};
