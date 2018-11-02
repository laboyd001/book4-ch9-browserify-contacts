/*
    Author: your name here
    Name: garage.js
    Purpose: To store car instances
*/

/*
    This array only exists within the scope of this module.
    Therefore, no other module can access it. However,
    the `garageSupervisor` object you define below allows
    code in other modules to indirectly access it by using
    the methods.
*/
const garage = []

class Garage {
  store(car) {
    garage.push(car)
  }

  retrieve(carToFind) {
    return garage.find(car => car.make === carToFind.make && car.model === carToFind.model)
  }

  /*
       The inventory property is the only way for external code to
       read the value of the garage variable. There is no setter
       either. It is a read only property.
   */
  get inventory() {
    return garage
  }
}

const GarageFactory = () => new Garage()
export default GarageFactory