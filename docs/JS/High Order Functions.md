[Reference1]
(https://www.sitepoint.com/higher-order-functions-javascript/)

[Reference2]
(https://eloquentjavascript.net/05_higher_order.html)

Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

```jsx title='Passing console.log as function arg'
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
// → 0
// → 1
// → 2
```

Higher-order functions allow us to abstract over actions, not just values. They come in several forms. For example, we can have functions that create new functions.

```jsx title='Creating a example from a base function'
function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
```

```jsx title='functions that change other functions'
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1
```
