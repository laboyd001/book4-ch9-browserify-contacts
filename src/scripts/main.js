/*
    Author: your name here
    Name: main.js
    Purpose: Entry point of our application
*/
import CarFactory from "./carFactory"
import GarageFactory from "./garage"



// const garage = []

// Create two cars using the function you imported
const mustang = CarFactory("Ford", "Mustang")
const accord = CarFactory("Honda", "Accord")
const santafe = CarFactory("Hyundai", "Santa Fe")
const sierra = CarFactory("GMC", "Sierra")

// Drive the cars for a while
console.log(mustang.drive("the grocery store"))
console.log(accord.drive("Indianapolis"))

// Park the cars in the garage
// garage.push(mustang)
// garage.push(accord)
// garage.push(santafe)
// garage.push(sierra)

// console.table(garage);

// Make a new garage and store cars in it
const garage = GarageFactory() //Remember, this function return a new instance of Garage
garage.store(mustang)
garage.store(accord)
garage.store(santafe)
garage.store(sierra)

console.table(garage.inventory)
console.table(garage.retrieve(sierra))