# Nullish coalescence, &&, OR

```jsx title='Nullish coalescence, &&, OR'
const number = 0;
//OR return right side value if left is falsy
console.log(number || 10); // 10
console.log("0" || 10); // 0
console.log([""] || 10); // [""]
console.log("" || 10); // 10

//NC return right side value if left is null or undefined
console.log(number ?? 10); // 0
console.log(undefined ?? 10); // 10
console.log(null ?? 10); // 10

//&& return left side value if left is falsy if not returns rigth
console.log(number && 10); // 0
console.log(undefined && 10); // undefined
console.log(null && 10); // null
```
