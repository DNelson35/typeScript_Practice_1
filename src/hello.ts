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

// though again typescript can usually infer the type based on the return
// it can also infer the type based on the context
// so if i called a foreach on an array and passed the values into a function typescript would look at the type of the array and know what type of values are passed into the function. 

// for async functions that return a promise you can use the expected type as the return for the function
// lets say i had a function that submits a request to my backend api and i new that i was requesting data that would be a number I would want to use Promise<number> because typescript cant infer the return type of something it doesn't know what to expect so we need to tell it what to expect


//OBJECT TYPES

// function printThing(thing: { x: number, y?: number}){
//     console.log(` this the spot ${thing.x}, ${thing.y}`)
// }

// function printEither(thing: string | number){
//     if (typeof thing !== 'number'){
//         console.log(thing.toUpperCase())
//     }else{
//         console.log(thing)
//     }
// }

// type Ball = {
//     weight: number,
//     brand: string,
//     type: string,
//     circumference: ( radius: number) => number,
//     used: boolean,
// }

// const radius = 10
// const ball: Ball = {
//     weight: 1,
//     brand: 'wilson',
//     type: 'baseball',
//     circumference: (radius) => {
//         return 2 * Math.PI * radius
//     },
//     used: false
// }


// console.log(ball.circumference(10))
// console.log(ball)

// class Ball {
//     weight: number
//     brand: string
//     type: string
//     radius: number
//     circumference: number
//     used: boolean

//     constructor(weight: number, brand: string, type: string, radius: number, used: boolean){
//         this.weight = weight
//         this.brand = brand
//         this.type = type
//         this.radius = radius
//         this.circumference = 2 * Math.PI * radius
//         this.used = used
//     }
// }

// const ball = new Ball(1, "wilson", "baseball", 10, false)

// console.log(ball)
// interface Car {
//     model: string
// }
// interface Details extends Car {
//     color: string,
// }
  
 
// const firebird: Details =  {
//     model: "Pontiac",
//     color: "red",
// }

// console.log(firebird)

function printString(strs: string | string[] | null) {
    if(strs !== null){
        if(typeof strs === "object"){
            for(const s of strs){
                console.log(s) 
            }
        } else if (typeof strs === "string"){
            console.log(strs)
        }
    } 
}
printString(["hello", "world"])
printString("hello sam")
