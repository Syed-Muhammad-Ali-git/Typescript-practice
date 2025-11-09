// in typescript (ts) first we compile it and then run on terminal,
// first we make a file with typescript and also make a javascript file with same name,
// because the compiler read the typescript file and change into traditional or basic javascript
// and automatic paste in to javascript file, for cusing typescript compiler use below commands.
// for compilation of typescript use command ( tsc file name with extension  ) eg.
// ( tsc app.ts ) is command sa typescript compile hojaigi or javascript ki us file ma jis
// ka name same hai us ma paste kardagi javascript ma convert kar ka, phir node ki command
// chalani hai taka js ki file terminal ma chal jai command ( node file name of javascript ) eg.
// ( node app.js )
// Typescript basic code with comments explaining types and where to write them
// Variables: string type - type ko variable name ke baad colon (:) ke saath likhte hain
var str = "Hello world";
str = "Hello ALi";
console.log(str);
// Variables: number type - type ko variable name ke baad colon (:) ke saath likhte hain
var num = 20;
num = 25;
console.log(num);
// Variables: boolean type - type ko variable name ke baad colon (:) ke saath likhte hain
var isActive = true;
console.log(isActive);
// Arrays: string array - type ko square brackets [] ke saath likhte hain, jaise string[]
var names = ["Ali", "Ahmed", "Sara"];
console.log(names);
// Arrays: number array - type ko square brackets [] ke saath likhte hain, jaise number[]
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// Tuples: fixed length array with specific types - type ko square brackets [] ke andar specific types ke saath likhte hain
var person = ["Ali", 25];
console.log(person);
// Union types: variable can be one of several types - type ko pipe (|) ke saath likhte hain
var id = "abc123";
id = 123;
console.log(id);
// Any type: can be any type - type ko 'any' likhte hain, lekin use karne se avoid karo
var data = "hello";
data = 42;
console.log(data);
// Unknown type: safer than any - type ko 'unknown' likhte hain
var value = "hello";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
// Never type: function that never returns - return type ko 'never' likhte hain
function throwError(message) {
    throw new Error(message);
}
// Functions: basic function with void return - return type ko function name ke baad colon (:) ke saath likhte hain
var greetUser = function (user) {
    console.log("Hello ".concat(user));
};
greetUser("Function");
// Functions: with string return - return type ko function name ke baad colon (:) ke saath likhte hain
function retFunction() {
    var abc = "abc123";
    return abc;
}
var func = retFunction();
console.log(func);
var company1 = {
    comName: "saylani",
    comPhone: 3123456789,
    multyLocations: true,
};
console.log(company1);
var company2 = {
    comName: "saylani",
    comPhone: 3123456789,
    multyLocations: true,
};
console.log(company2);
// Enums: predefined constants - enum ko pehle define karte hain, phir use karte hain
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["pending"] = "pending";
    OrderStatus["cancelled"] = "cancelled";
    OrderStatus["delivered"] = "delivered";
})(OrderStatus || (OrderStatus = {}));
var orders = [
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
var person1 = new Person("Ali", 25);
person1.greet();
// Generics: reusable components - generic type ko angle brackets <> ke andar likhte hain
function identity(arg) {
    return arg;
}
var output = identity("myString");
console.log(output);
var output2 = identity(42);
console.log(output2);
var obj = { a: "hello", b: 42 };
console.log(obj);
