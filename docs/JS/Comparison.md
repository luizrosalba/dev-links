Equalility in JS :
[Source](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)
[Source2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/
Equality_comparisons_and_sameness)
[Code](https://github.com/luizrosalba/js-playground/blob/main/comparison.js)

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

function Comparison(first, second) {
    this.first = first;
    this.second = second;
    this.comparison= first === second
}

console.table([
    new Comparison(0, new String(0)),//0
    new Comparison(0, '0'),//1
    new Comparison('0', new String(0)),//2
    new Comparison(null, undefined),//3
    new Comparison(new String("0"), null),//4
    new Comparison(new String("0"), undefined),//5
    new Comparison({ a: 1 }, { a: 1 }),//6
    new Comparison(obj1, obj1),//7
    new Comparison(obj1, obj2),//8
    new Comparison(obj1, obj3),//9
    new Comparison(obj3, obj4),//10
    new Comparison({ a: { b: 1 } }, { a: { b: 1 } }),//11,
]);


const a = {name: 'foo'}
const b = a 
b.age = 30 /// will change a AND b 
console.log(a, b)
```
