// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.


// push()
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

let arr1 = [1,2,3,4,5]
arr1.push(4)
console.log(arr1)


// pop()
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);
// remove last element from the array


// shift()
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);
// 🔄 shift() - Removes the first element of an array


// unshift()
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);
// 🔁 unshift() - Adds one or more elements to the beginning of an array


// concat()
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);
// concat means add 2 array like Output - [1, 2, 3, 4, 5, 6]
// if arr2.concat(arr1) , Output - [4, 5, 6, 1, 2, 3]


// forEach()
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);
// Output -
// 1 0
// 2 1
// 3 2


// map()
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function(item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);
// After map: [ 2, 4, 6 ]

// 🔁 map() — Transform each element
// Purpose: Creates a new array by applying a function to each element of the original array.
// Length of output: Same as the input array.
// Return value: Transformed elements.


// filter()
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function(item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);
// After filter: [ 4, 5 ]

// 🔍 filter() — Filter elements based on condition
// Purpose: Creates a new array with only elements that pass a condition.
// Length of output: Can be less than the input array.
// Return value: Original elements that meet the condition.


// find()
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function(item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);
// 🔍 find() — Returns first matching value
// Does not change the original array.


// sort()
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function(a, b) {
    return b - a;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);
// After sort: [ 1, 2, 3, 4, 5 ]

// 🔀 sort() — Sorts array in place
// return a - b; // arrange array in ascending order
// return b - a; // arrange array in descending order
// Sorts the elements of the array in place (modifies the original array).