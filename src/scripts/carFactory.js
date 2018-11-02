/*
    Author: your name here
    Name: carFactory.js
    Purpose: Produces a new car from a factory
*/
class Car {
  constructor (make, model) {
      this.make = make
      this.model = model
  }

  toString () {
      return `a ${this.make} ${this.model}`
  }

  drive (destination) {
      return `You drive ${this} to ${destination}`
  }
}

const CarFactory = (make, model) => new Car(make, model)

export default CarFactory