[https://builtin.com/software-engineering-perspectives/currying-javascript](https://builtin.com/software-engineering-perspectives/currying-javascript)

Currying in JavaScript is a process that allows you to transform a function with multiple arguments into a sequence of nesting functions.

In other words, instead of a function taking all arguments at one time, it takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, and so on, until all arguments have been fulfilled.

```jsx title='Example'
function sum(a, b, c) {
  return a + b + c;
}
sum(1, 2, 3); // 6
```

As you can see, this is a function with full arguments. Let’s create a curried version of the function and see how we would call the same function (and get the same result) in a series of calls:

```jsx title='currying example'
function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
console.log(sum(1)(2)(3)); // 6
```

We could even separate this sum(1)(2)(3) to understand it better:

```jsx title='Separating'
const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6
```

## Improve Lot's of states updates

No need to have a handler for every state

```jsx title='currying lots of states updates'

functions component() {
  const [state1, setState1] = useState('')
  const [state2, setState2] = useState('')
  const [state3, setState3] = useState('')
  const handleChange = (setState) => (event) => {
    setState(event.target.value)
  }
  return
  <>
    <input value={state1} onChange={handleChange(setState1)} />
    <input value={state2} onChange={handleChange(setState2)} />
    <input value={state3} onChange={handleChange(setState3)} />
  </>
}
```
