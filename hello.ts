// Type script can infer a large number of types without additional help form the developer test out what type script can infer before declaring a specific type


function greet(person: string, date: Date){
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("brandon", new Date())

let msg = "Hey everyone!" // No type is really needed if typescript can infer the type it will such as this case

console.log(msg)

const stringArray = ["hello", "not", "2"] // this case a normal array could hold any value but now this array can only hold strings but typescript can still infer the type string[] as well as if i add 2 it would be (string | number)[] so inference still works.

stringArray.push("2") // this will work
// stringArray.push(2) wont because 2 is not a string and the array is a string array. this is the same idea in static typed languages such as c#
// console.log(stringArray)


// this function has a return type of number so below when we call the function and assign it to a variable typescript knows that the variable should be of type number
function generateRandomNumberInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
}

const randomNumber = generateRandomNumberInRange(1, 20)

console.log(randomNumber)
