Equalility in JS :
[Source](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)
[Source2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

Javascript has 5 data types that are passed by value: Boolean, null, undefined, String, and Number. We’ll call these primitive types.

Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value. Objects are copied by reference instead of by value.

[Equality](https://dorey.github.io/JavaScript-Equality-Table/unified/)

```jsx title='Comparing'
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = { a: 1, b: { c: 1 } };
const obj4 = { a: 1, b: { c: 2 } };

console.log(0 === new String("0")); // false
console.log(0 === "0"); // false
console.log(new String("0") === "0"); // false
console.log(null === undefined); // false
console.log(new String("0") === null); // false
console.log(new String("0") === undefined); // false
console.log({ a: 1 } === { a: 1 }); // true
console.log(obj1 === obj2); // false - compared by reference
console.log(obj1 === obj3); // false
console.log(obj3 === obj4); // false
console.log({ a: { b: 1 } } === { a: { b: 1 } }); // false - shallow comparison - need deep comparison
```
