/**
 * Mapped Modifiers
 */

type Conference = {
  name: string;
  year?: number;
  isAddToCalendar?: boolean;
  price: number;
};

type AllConferenceOptional = {
  [P in keyof Conference]?: Conference[P];
};

type AllConferenceRequired = {
  [P in keyof Conference]-?: Conference[P];
};

type AllConferenceReadonly = {
  readonly [P in keyof Conference]: Conference[P];
};

type AllConferenceWritable = {
  -readonly [P in keyof Conference]: Conference[P];
};

// 實作 Utility Type
// required, partial, readonly

export {};
