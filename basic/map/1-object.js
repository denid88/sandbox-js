'use strict';

/// Map is a key-value pair data structure
class Dictionary {
  constructor() {
    /// We use Object.create(null) to avoid the prototype chain
    this.map = Object.create(null);
  }

  set(key, value) {
    this.map[key] = value;
  }

  get(key) {
    return this.map[key];
  }

  has(key) {
    /// Handle the case where the value is undefined, null, or false, '', 0
    return !!this.map[key];
  }

  delete(key) {
    delete this.map[key];
  }

  get size() {
    return Object.keys(this.map).length;
  }

  keys() {
    return Object.keys(this.map);
  }

  values() {
    return Object.values(this.map);
  }

  entries() {
    return Object.entries(this.map);
  }

  clear() {
    this.map = Object.create(null);
  }

  static from(hash) {
    const dictionary = new Dictionary();
    for (const key in hash) {
      dictionary.set(key, hash[key]);
    }
    return dictionary;
  }
}

const main = (() => {
  let cities = {
    'CA': 'San Francisco',
    'NY': 'New York',
    'TX': 'Austin'
  }

  const dictionary = Dictionary.from(cities);
  console.dir({dictionary});
})();