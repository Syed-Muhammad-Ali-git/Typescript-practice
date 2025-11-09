// in typescript (ts) first we compile it and then run on terminal,
// first we make a file with typescript and also make a javascript file with same name,
// because the compiler read the typescript file and change into traditional or basic javascript
// and automatic paste in to javascript file, for causing typescript compiler use below commands.
// for compilation of typescript use command ( tsc file name with extension  ) eg.
// ( tsc app.ts ) is command sa typescript compile hojaigi or javascript ki us file ma jis
// ka name same hai us ma paste kardagi javascript ma convert kar ka, phir node ki command
// chalani hai taka js ki file terminal ma chal jai command ( node file name of javascript ) eg.
// ( node app.js )

// Typescript basic code with comments explaining types and where to write them

// Variables: string type - type ko variable name ke baad colon (:) ke saath likhte hain
let str: string = "Hello world";
str = "Hello ALi";
console.log(str);

// Variables: number type - type ko variable name ke baad colon (:) ke saath likhte hain
let num: number = 20;
num = 25;
console.log(num);

// Variables: boolean type - type ko variable name ke baad colon (:) ke saath likhte hain
let isActive: boolean = true;
console.log(isActive);

// Arrays: string array - type ko square brackets [] ke saath likhte hain, jaise string[]
let names: string[] = ["Ali", "Ahmed", "Sara"];
console.log(names);

// Arrays: number array - type ko square brackets [] ke saath likhte hain, jaise number[]
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

// Tuples: fixed length array with specific types - type ko square brackets [] ke andar specific types ke saath likhte hain
let person: [string, number] = ["Ali", 25];
console.log(person);

// Union types: variable can be one of several types - type ko pipe (|) ke saath likhte hain
let id: string | number = "abc123";
id = 123;
console.log(id);

// Any type: can be any type - type ko 'any' likhte hain, lekin use karne se avoid karo
let data: any = "hello";
data = 42;
console.log(data);

// Unknown type: safer than any - type ko 'unknown' likhte hain
let value: unknown = "hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// Never type: function that never returns - return type ko 'never' likhte hain
function throwError(message: string): never {
  throw new Error(message);
}

// Functions: basic function with void return - return type ko function name ke baad colon (:) ke saath likhte hain
const greetUser = (user: string) => {
  console.log(`Hello ${user}`);
};
greetUser("Function");

// Functions: with string return - return type ko function name ke baad colon (:) ke saath likhte hain
function retFunction(): string {
  const abc = "abc123";
  return abc;
}
const func = retFunction();
console.log(func);

// Objects: using interface - interface ko pehle define karte hain, phir object ma use karte hain
interface company {
  comName: string;
  comPhone: number;
  multyLocations: boolean;
}
const company1: company = {
  comName: "saylani",
  comPhone: 3123456789,
  multyLocations: true,
};
console.log(company1);

// Objects: using type - type ko pehle define karte hain, phir object ma use karte hain
type companyData = {
  comName: string;
  comPhone: number;
  multyLocations: boolean;
};
const company2: companyData = {
  comName: "saylani",
  comPhone: 3123456789,
  multyLocations: true,
};
console.log(company2);

// Enums: predefined constants - enum ko pehle define karte hain, phir use karte hain
enum OrderStatus {
  pending = "pending",
  cancelled = "cancelled",
  delivered = "delivered",
}
const orders: { orderId: string; OrderStatus: string }[] = [
  {
    orderId: "abc123",
    OrderStatus: OrderStatus.pending,
  },
  {
    orderId: "xyz456",
    OrderStatus: OrderStatus.delivered,
  },
  {
    orderId: "mno789",
    OrderStatus: OrderStatus.cancelled,
  },
];
console.log(orders);

// Classes: basic class - class ma properties ko type ke saath define karte hain
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const person1 = new Person("Ali", 25);
person1.greet();

// Generics: reusable components - generic type ko angle brackets <> ke andar likhte hain
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("myString");
console.log(output);
let output2 = identity<number>(42);
console.log(output2);

// Intersection types: combine multiple types - type ko ampersand (&) ke saath likhte hain
type A = { a: string };
type B = { b: number };
type AB = A & B;
const obj: AB = { a: "hello", b: 42 };
console.log(obj);
