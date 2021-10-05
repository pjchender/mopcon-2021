type Conference = {
  name: string;
  year: number;
  isAddToCalendar: boolean;
  price: number;
};

type ConferenceName = 'MOPCON' | 'ModernWeb' | 'JSDC' | 'Laravel';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  interest: string[];
};

export {};
