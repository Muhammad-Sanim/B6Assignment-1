# Q: What is the use of the keyof keyword in TypeScript? Provide an example.

Ans: keyof হলো এমন একটি অপারেটর যা কোনো object type-এর সব key-কে একটি union type আকারে বের করে আনে। যেমন-

type User = {
  name: string;
  age: number;
};

type Keys = keyof User;  ==>  ["name" | "age"]

# Q: Provide an example of using union and intersection types in TypeScript.

Ans: Union type-

type ID = string | number;

Intersection type-

type StudentInfo = {
  name: string;
  age: number;
};

type AcademicInfo = {
  roll: number;
  department: string;
};

type Student = BasicInfo & AcademicInfo;

const student: Student = {
  name: "Sanim",
  age: 25,
  roll: 101,
  department: "CSE",
};