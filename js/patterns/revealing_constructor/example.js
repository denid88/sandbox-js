'use strict';

/*
* This code demonstrates the Revealing Constructor Pattern using modern
* JavaScript ES6 classes.
* The pattern is particularly useful for encapsulating private details and
* exposing only necessary methods and functionalities.
* Here’s an explanation of how the pattern is applied in this code:
*/

class Car {
  #brand;
  #model;
 
  constructor(brand, model, callback) {
      this.#brand = brand;
      this.#model = model;

      if (typeof callback === 'function') {
        callback(this.#brand, this.#model);
      }
  }

  // Private method
  #getCarDetails() {
    return `Car details: ${this.#brand} ${this.#model}`;
  }

  // Public method
  getCarInfo() {
    return this.#getCarDetails();
  }
}

const myCar = new Car('Toyota', 'Corolla', (brand, model) => {
  console.log(`Car created: ${brand} ${model}`);
});

console.log(myCar.getCarInfo()); // Output: Car details: Toyota Corolla