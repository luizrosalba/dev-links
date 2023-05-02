# Array Methods

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/)

```js title='Array methods'
[4, 5, 6, 7].at(1); // 5
[4, 5, 6, 7].push(8); // [4,5,6,7,8]
[4, 5, 6, 7].pop(); // [4,5,6]
[4, 5, 6, 7].fill(1); // [1,1,1,1]
[4, 5, 6, 7].join(","); // '4,5,6,7' concat using , as separator
[4, 5, 6, 7].shift(); // [5,6,7] removes first entry
[4, 5, 6, 7].reverse(); // [7,6,5,4]
[4, 5, 6, 7].unshift(3); // [3,4,5,6,7] insert 3 in the beginning
[4, 5, 6, 7].includes(6); // true since array includes the number 6
[4, 5, 6, 7].map((item) => 2 * item); // [8,10,12,14] - gets each item and multiply by 2 .Always returns an array with same length as input
[4, 5, 6, 7].filter((item) => item > 5); // [6,7] pass only ones who fill the condition
[4, 5, 6, 7].find((item) => item > 5); // 6 six is the first item greater than 5
[4, 5, 6, 7].every((item) => item > 0); // true all items are greater than zero
[4, 5, 6, 7].some((item) => item > 6); // true at least one item is greater than six
[4, 5, 6, 7].findIndex((item) => item === 5); // 1 is the index of item === 5
[4, 5, 6, 7].reduce((prev, curr) => prev + curr, 0); // 22
///////////////////////////
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2); // Expected output: Array ["a", "b", "c", "d", "e", "f"]
///////////////////////////
const array1 = ["a", "b", "c", "d", "e"];
// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]
// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]
///////////////////////////
const iterator1 = ["a", "b", "c"].entries();
console.log(iterator1.next().value);
// Expected output: Array [0, "a"]
console.log(iterator1.next().value);
// Expected output: Array [1, "b"]
///////////////////////////
console.log(Array.isArray([1, 3, 5])); // Expected output: true
console.log(Array.isArray("[]")); // Expected output: false
console.log(Array.isArray(new Array(5))); // Expected output: true
console.log(Array.isArray(new Int16Array([15, 33]))); // Expected output: false
///////////////////////////
const array1 = ["a", "b", "c"];
const iterator = array1.keys();
for (const key of iterator) {
  console.log(key); //  0 , 1 , 2
}
//////////////////////////////
console.log(Array.of("foo", 2, "bar", true));
// Expected output: Array ["foo", 2, "bar", true]

console.log(Array.of());
// Expected output: Array []

////////////////
const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array1.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);

console.log(result);
// Expected output: Array [4, 5, 2, 3, 0, 1]
/////////////////////////////////////
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// Expected output: Array [0, 1, 2, Array [3, 4]]
//////////////////////////////
const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap((num) => num);

console.log(flattened);
// Expected output: Array [1, 2, 3, 4, 5, 6]
//////////////////////////////
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
////////////////////////////////////
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

/////////////////////////////////
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

///////////////////////

const array1 = ["a", "b", "c"];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```
