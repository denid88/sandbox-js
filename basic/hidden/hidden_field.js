'use strict';

class HiddenField {
  #hiddenField = ''

  setHiddenField(value) {
    this.#hiddenField = value;
  }

  toString() {
    return `${this.#hiddenField}`;
  }
}

const hidden = new HiddenField()

hidden.setHiddenField('Abra')

console.log(hidden.toString());