"use strict";
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("brandon", new Date());
let msg = "Hey everyone!";
console.log(msg);
const stringArray = ["hello", "not", "2"];
stringArray.push("2");
function generateRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const randomNumber = generateRandomNumberInRange(1, 20);
console.log(randomNumber);
function printString(strs) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
printString(["hello", "world"]);
printString("hello sam");
