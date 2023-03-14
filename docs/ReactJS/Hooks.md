# Hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

Hooks allow you to reuse stateful logic without changing your component hierarchy.

Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods

[https://usehooks-ts.com/](https://usehooks-ts.com/)

## State Management - useState

[UseState](https://codepen.io/luizrosalba/pen/zYLqjZR)

```jsx title='UseState Example'
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

## State Management - useReducer

useReducer is a React Hook that lets you add a reducer to your component.

[More details](https://beta.reactjs.org/reference/react/useReducer)

const [state, dispatch] = useReducer(reducer, initialArg, init?)

[useReducer](https://codepen.io/luizrosalba/pen/eYjZKKo)

```jsx title="useReducer"
function reducer(state, action) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action.");
}

export default function Counter() {
  const [state, dispatch] = React.useReducer(reducer, { age: 42 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
```

## Handle side effects - useEffect

[UseEffect](https://codepen.io/luizrosalba/pen/JjBXZoq?editors=1111)

What does useEffect do?

By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

Why is useEffect called inside a component?

Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

Does useEffect run after every render?

Yes! By default, it runs both after the first render and after every update. (We will later talk about how to customize this.) Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.

Every time we re-render, we schedule a different effect, replacing the previous one. In a way, this makes the effects behave more like a part of the render result — each effect “belongs” to a particular render.

```jsx title='UseEffect Example'
function Example() {
  const [count, setCount] = React.useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    // Update the document title using the browser API
    window.alert(`You clicked ${count} times`);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

Why did we return a function from our effect?

This is the optional cleanup mechanism for effects. Every effect may return a function that cleans up after it. This lets us keep the logic for adding and removing subscriptions close to each other. They’re part of the same effect!

When exactly does React clean up an effect?

React performs the cleanup when the component unmounts. However, as we learned earlier, effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time. We’ll discuss why this helps avoid bugs and how to opt out of this behavior in case it creates performance issues later below.

:::info

If your effect returns a function, React will run it when it is time to clean up:

:::

You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument to useEffect:

:::caution

If you use this optimization, make sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect. Otherwise, your code will reference stale values from previous renders.

:::

```
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```

[Use Effect Pitfalls](https://beta.reactjs.org/learn/removing-effect-dependencies)

## Handle side effects - useLayoutEffect

Almost the same as useEffect, but fires synchronously after the render phase. Use this to safely read from or write to the DOM

## Context Management - Context API

## Optimization - useMemo

useMemo is a React Hook that lets you <strong>cache the result </strong> of a calculation between re-renders.

[useMemo Example](https://codepen.io/luizrosalba/pen/LYBZGwv?editors=1111)

const cachedValue = useMemo(calculateValue, dependencies)

[https://beta.reactjs.org/reference/react/useMemo](https://beta.reactjs.org/reference/react/useMemo)

calculateValue: The function calculating the value that you want to cache. It should be pure (A React component is considered pure if it renders the same output for the same state and props), should take no arguments, and should return a value of any type. React will call your function during the initial render. On subsequent renders, React will return the same value again if the dependencies have not changed since the last render. Otherwise, it will call calculateValue, return its result, and store it in case it can be reused later.

:::info

In Strict Mode, React will call your calculation function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. If your calculation function is pure (as it should be), this should not affect the logic of your component. The result from one of the calls will be ignored.

:::

:::caution

You should only rely on useMemo as a performance optimization. If your code doesn’t work without it, find the underlying problem and fix it first. Then you may add useMemo to improve performance.

:::

:::info
This can help to check if its expensive

```javascript
console.time("filter array");
const visibleTodos = filterTodos(todos, tab);
console.timeEnd("filter array");
```

:::

## Optimization - useCallback

useCallback is a React Hook that lets you cache a <strong>function definition </strong>between re-renders.

const cachedFn = useCallback(fn, dependencies)

Call useCallback at the top level of your component to cache a function definition between re-renders:

```jsx title='UseCallback Example'
import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
```

## useCallback vs useMemo

[https://medium.com/credera-engineering/when-should-usememo-and-usecallback-be-used-and-when-not-complete-with-examples-df13cd7a6cf4](https://medium.com/credera-engineering/when-should-usememo-and-usecallback-be-used-and-when-not-complete-with-examples-df13cd7a6cf4)

You will often see useMemo alongside useCallback. They are both useful when you’re trying to optimize a child component. They let you memoize (or, in other words, cache) something you’re passing down:

```jsx title='UseEffect vc useCallback Example'
import { useMemo, useCallback } from "react";

function ProductPage({ productId, referrer }) {
  const product = useData("/product/" + productId);

  const requirements = useMemo(() => {
    // Calls your function and caches its result
    return computeRequirements(product);
  }, [product]);

  const handleSubmit = useCallback(
    (orderDetails) => {
      // Caches your function itself
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer]
  );

  return (
    <div className={theme}>
      <ShippingForm requirements={requirements} onSubmit={handleSubmit} />
    </div>
  );
}
```

## Use refs
