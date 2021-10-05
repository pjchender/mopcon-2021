type Conference = {
  name: string;
  year: number;
  isAddToCalendar: boolean;
  price: number;
};

const mopcon = {
  name: 'MOPCON',
  year: 2021,
  isAddToCalendar: true,
  price: 1000,
};

type ConferenceName = 'MOPCON' | 'ModernWeb' | 'JSDC' | 'Laravel';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  interest: string[];
};

export {};
