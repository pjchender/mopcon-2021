/**
 * SnakeToCamelCase
 * https://github.com/RossWilliams/ts-case-convert/blob/main/src/caseConvert.ts#L100
 */

// 建立適當的斷句
type SnakeToCamelCase<T extends string> =
  T extends `${infer Head}_${infer Tail}`
    ? `${Uncapitalize<Head>}${Capitalize<SnakeToCamelCase<Tail>>}`
    : T;

type T1 = SnakeToCamelCase<'this_is_snake_case'>; // "thisIsSnakeCase"
type T2 = SnakeToCamelCase<'This_Is_Strange_Case'>; // "thisIsStrangeCase"
type T3 = SnakeToCamelCase<'IDontKnowThis'>; // "IDontKnowThis"

/**
 * Optional
 * https://github.com/piotrwitek/utility-types
 */

type Optional<T extends object, K extends keyof T = keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
type Conference = {
  name: string;
  year: number;
  isAddToCalendar: boolean;
  website: string;
};

type ConferenceWithOptional = Optional<Conference, 'year' | 'isAddToCalendar'>;
// 沒有帶入 Optional 的第二個參數
type ConferenceWithAllOptional = Optional<Conference>;

// 帶入實際的型別幫助理解

type A = Omit<Conference, 'year' | 'isAddToCalendar'>;
type B = Pick<Conference, 'year' | 'isAddToCalendar'>;
type C = Partial<Pick<Conference, 'year' | 'isAddToCalendar'>>;
type Result = A & C;

// 不知道為什麼要這樣時，就拿掉試試看會發生什麼事
type OptionalWithoutDefault<T extends object, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

type ConferenceWithAllOptional2 = OptionalWithoutDefault<Conference>;

export {};
