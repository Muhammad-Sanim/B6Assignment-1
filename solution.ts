type FormatValueType = string | number | boolean;

const formatValue = (value: FormatValueType): FormatValueType => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

type StringOrArray = string | any[];

const getLength = (value: StringOrArray): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type Item = {
  title: string;
  rating: number;
};

const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => item.rating >= 4);
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  const availability = book.isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
};

type ValueType = string | number;

const getUniqueValues = (arr1: ValueType[], arr2: ValueType[]): ValueType[] => {
  const result: ValueType[] = [];

  const exists = (value: ValueType): boolean => {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) return true;
    }
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    if (!exists(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!exists(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
};