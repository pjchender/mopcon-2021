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

export {};
