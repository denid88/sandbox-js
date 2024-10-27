'use strict';

/// Set is a collection of unique values
Set.prototype.difference = function(otherSet) {
  return new Set([...this].filter(item => !otherSet.has(item)));
};

/// Intersection is a set of elements that are in both sets
Set.prototype.intersection = function(otherSet) {
  return new Set([...this].filter(item => otherSet.has(item)));
}

/// Union is a set of elements that are in both sets
Set.prototype.union = function(otherSet) {
  return new Set([...this, ...otherSet]);
}

/// Subset is a set of elements that are in both sets
Set.prototype.subset = function(otherSet) {
  return [...this].every(item => otherSet.has(item));
}

let americansCities = new Set();
let ukrainianCities = new Set();
let cities = new Set();

cities.add('San Francisco');
cities.add('New York');
cities.add('Austin');
cities.add('Kyiv');
cities.add('Lviv');
cities.add('Odessa');

americansCities.add('San Francisco');
americansCities.add('New York');
americansCities.add('Austin');

ukrainianCities.add('Kyiv');
ukrainianCities.add('Lviv');
ukrainianCities.add('Odessa');
ukrainianCities.add('Kharkiv');

console.dir({cities, size: cities.size});

/// Difference
console.log(cities.difference(americansCities));

/// Intersection
console.log(cities.intersection(americansCities));

/// Union
console.log(cities.union(ukrainianCities));

/// Subset
console.log(cities.subset(ukrainianCities));