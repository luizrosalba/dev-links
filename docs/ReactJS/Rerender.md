[https://www.developerway.com/posts/react-re-renders-guide#part1](https://www.developerway.com/posts/react-re-renders-guide#part1)

## What is re-render in React?

When talking about React performance, there are two major stages that we need to care about:

- initial render: happens when a component first appears on the screen

- re-render: second and any consecutive render of a component that is already on the screen
  Re-render happens when React needs to update the app with some new data. Usually, this happens as a result of a user interacting with the app or some external data coming through via an asynchronous request or some subscription model.

Non-interactive apps that don’t have any asynchronous data updates will never re-render, and therefore don’t need to care about re-renders performance optimization.

## What is a necessary and unnecessary re-render?

Necessary re-render - re-render of a component that is the source of the changes, or a component that directly uses the new information. For example, if a user types in an input field, the component that manages its state needs to update itself on every keystroke, i.e. re-render.

Unnecessary re-render - re-render of a component that is propagated through the app via different re-renders mechanisms due to either mistake or inefficient app architecture. For example, if a user types in an input field, and the entire page re-renders on every keystroke, the page has been re-rendered unnecessarily.

Unnecessary re-renders by themselves are not a problem: React is very fast and usually able to deal with them without users noticing anything.

However, if re-renders happen too often and/or on very heavy components, this could lead to user experience appearing “laggy”, visible delays on every interaction, or even the app becoming completely unresponsive.

## When React component re-renders itself?

There are four reasons why a component would re-render itself:

1. state changes,
2. parent (or children) re-renders,
3. context changes
4. hooks changes.

There is also a big myth: that re-renders happen when the component’s props change. By itself, it’s not true (see the explanation below).

### 1. state changes

When a component’s state changes, it will re-render itself. Usually, it happens either in a callback or in useEffect hook.

State changes are the “root” source of all re-renders.

```jsx title='1. state changes'
const Component = () => {
  const [state, setState] = useState();
  return {
    /// will rerender when state changes
  };
};
```

### 2. parent (or children) re-renders

A component will re-render itself if its parent re-renders. Or, if we look at this from the opposite direction: when a component re-renders, it also re-renders all its children.

It always goes “down” the tree: the re-render of a child doesn’t trigger the re-render of a parent. (There are a few caveats and edge cases here, see the full guide for more details: The mystery of React Element, children, parents and re-renders).

```jsx title='2. parent (or children) re-renders'
const Parent = () => {
  return (
    <Child /> /// will rerender when Parent rerenders
  );
};
```

### 3. context changes

When the value in Context Provider changes, all components that use this Context will re-render, even if they don’t use the changed portion of the data directly. Those re-renders can not be prevented with memoization directly, but there are a few workarounds that can simulate it (see preventing re-renders caused by Context).

```jsx title='3. context changes'
const useValue = useContext(context) /// when value changes

const Component1 = () => {
  const value = useValue()
  return (
    /// will rerender when Parent rerenders
  );
};
const Component2 = () => {
  const value = useValue()
  return (
    /// will rerender when Parent rerenders
  );
};
```

### 4. hooks changes.

Everything that is happening inside a hook “belongs” to the component that uses it. The same rules regarding Context and State changes apply here:

- State change inside the hook will trigger an unpreventable re-rerender of the “host” component

- If the hook uses Context and Context’s value changes, it will trigger an unpreventable re-rerender of the “host” component

Hooks can be chained. Every single hook inside the chain still “belongs” to the “host” component, and the same rules apply to any of them.

```jsx title='4. hooks changes'
const useSomething = useContext(context) /// when value changes

const useValue = () => {
  useSomething()  /// chain reaction
};
const Component = () => {
  const value = useValue()
  return (
    /// will rerender due to value change
  );
};
```

## Big myth - props change

It doesn’t matter whether the component’s props change or not when talking about re-renders of not memoized components.

In order for props to change, they need to be updated by the parent component. This means the parent would have to re-render, which will trigger re-render of the child component regardless of its props.

Only when memoization techniques are used (React.memo, useMemo), then props change becomes important.

```jsx title='props change'
const Parent = () => {
  return (
    <Child value={value} /> /// will rerender when Parent rerenders props doesn't matter
  );
};
```

## Avoid Creating components in render function !

On every re-render React will re-mount this component (i.e. destroy it and re-create it from scratch), which is going to be much slower than a normal re-render. On top of that, this will lead to such bugs as:

- “flashes” of content during re-renders
- state being reset in the component with every re-render
- useEffect with no dependencies triggered on every re-render
- if a component was focused, focus will be lost

```jsx title='props change'
/// AVOID
const Component = () => {
  const SlowComponent = () => <Something />;
  return (
    <SlowComponent /> /// will remount when Component Rerender
  );
};

/// DO

const SlowComponent = () => <Something />;

const Component = () => {
  return (
    <SlowComponent /> /// will only rerender when Component Rerender not remount
  );
};
```

## Encapsulate state in smaller components

The bigger component won’t re-render on smaller component state changes.

```jsx title='Prevent rerender with composition'
/// AVOID
const Component = () => {
  const [open, setOpen] = useState(false)
  return (
    <Something>
        <Button onClick={() => setOpen(true)} /> /// when setOpen
        {isOpen && <ModalDialog />}
        <SlowComponent /> /// will rerender when open changes
    <Something />
  )
}

/// DO
const ButtonWithDialog = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
        <Button onClick={() => setOpen(true)}> /// when setOpen
        {isOpen && <ModalDialog />}
    </>
  )
}

const Component = () => {
  return (
    <Something >
    <ButtonWithDialog />
    <SlowComponent /> /// won't rerender when Dialog is opened
    <Something />
  );
};
```

## Encapsulate state in smaller components - children as props

This can also be called “wrap state around children”.

- state is used on an element that wraps a slow portion of the render tree, so it can’t be extracted that easily

- state management and components that use that state can be extracted into a smaller component, and the slow component can be passed to it as children

```jsx title='Prevent rerender with composition - children as props'
/// AVOID
const Component = () => {
    const [value, setValue] = useState({})
  return (
    <div onScroll ={(e) => setValue(e)} > /// when triggered
        <SlowComponent /> /// will rerender
    <div />
  );
};

/// DO
const ComponentWithScroll = ({children}) => {
    const [value, setValue] = useState({})
  return (
    <div onScroll ={(e) => setValue(e)} > /// when triggered
        {children}  /// just props not affected
    <div />
  );
}
const Component = () => {
  return (
    <ComponentWithScroll >
        <SlowComponent /> /// won't rerender when Dialog is opened
    <Something />
  );
};
```

## Encapsulate state in smaller components - components as props

Same as before but with components as props

```jsx title='Prevent rerender with composition - components as props'
/// AVOID
const Component = () => {
    const [value, setValue] = useState({})
  return (
    <div onScroll ={(e) => setValue(e)} > /// when triggered
        <SlowComponent1 /> /// will rerender
        <Something /> /// will rerender
        <SlowComponent1 /> /// will rerender
    <div />
  );
};
```

```jsx title='Prevent rerender with composition - components as props'
/// DO
const ComponentWithScroll = ({left, right}) => {
    const [value, setValue] = useState({})
  return (
    <div onScroll ={(e) => setValue(e)} > /// when triggered
        {left}  /// just props not affected
        <Something />
        {right}  /// just props not affected
    <div />
  );
}
const Component = () => {
  return (
    <ComponentWithScroll
      left={<SlowComponent1 />}
      right={<SlowComponent2 />}
    />
  );
};
```

## React.memo

Wrapping a component in React.memo will stop the downstream chain of re-renders that is triggered somewhere up the render tree, unless this component’s props have changed.

```jsx title='React.memo'
/// AVOID
const Parent = () => {
  /// when parent rerender
  return (
    <Child /> /// child rerender
  );
};
```

```jsx title='React.memo'
/// Do
const ChildMemo = React.memo(Child);
const Parent = () => {
  /// when parent rerender
  return (
    <ChildMemo /> /// child wont rerender
  );
};
```

## React.memo - component with props

All props that are not primitive values have to be memoized for React.memo to work

```jsx title='React.memo'
/// AVOID
const Parent = () => {
  /// when parent rerender
  return (
    <Child
      value={{ value }} /// value changes , rerenders
    />
  );
};
```

```jsx title='React.memo'
/// Do
const ChildMemo = React.memo(Child);
const Parent = () => {
  const value = useMemo(() => ({ vaue }, []));
  /// when parent rerender stay the same value
  return (
    <ChildMemo value={value} /> /// child wont rerender
  );
};
```

## React.memo - component as props or children

React.memo has to be applied to the elements passed as children/props. Memoizing the parent component will not work: children and props will be objects, so they will change with every re-render.

```jsx title='React.memo as props or children'
/// AVOID
const Parent = () => {
  /// when parent rerender
  return (
    /// all rerenders
    <ChildMemo left={<Something />}>
      <GranChild>
    <ChildMemo/>
  );
};
```

```jsx title='React.memo'
/// Do
const SomethingMemo = React.memo(Something);
const GranChildMemo = React.memo(GranChild);
const Parent = () => {
  /// when parent rerender stay the same value
  return (
    /// all wont rerender
    <Child left={<SomethingMemo />}>
      <GranChildMemo>
    <Child/>
  );
};
```

## useMemo/ useCallback

Memoizing props by themselves will not prevent re-renders of a child component. If a parent component re-renders, it will trigger re-render of a child component regardless of its props.

If a component uses non-primitive value as a dependency in hooks like useEffect, useMemo, useCallback, it should be memoized. (see React.memo - component with props)

```jsx title='non-primitive value as a dependency in hooks'
/// Do
const Parent = () => { /// when parent rerenders
  const value = useMemo (() => ({value}))
  useEffect (() => {

  }, [value]) /// value should be memoized
  return (

  );
};
```

## useMemo for expensive calculations

The typical use case for useMemo would be to memoize React elements. Usually parts of an existing render tree or results of generated render tree, like a map function that returns new elements.

```jsx title='useMemo for expensive calculations'
/// Dont
const Component = () => {
  /// when parent rerenders
  return (
    <>
      <Something />
      <SlowComponent /> /// will rerender
      <SomethingElse />
    </>
  );
};
```

```jsx title='useMemo for expensive calculations'
/// Do
const Component = () => {
  /// when parent rerenders
  const slowComponent = useMemo(() => {
    return <SlowCompoennt />;
  }, []);
  return (
    <>
      <Something />
      {slowComponent}> /// wont rerender
      <SomethingElse />
    </>
  );
};
```

## improve re-render performance of lists

In addition to the regular re-renders rules and patterns, the key attribute can affect the performance of lists in React.

Important: just providing key attribute will not improve lists' performance. To prevent re-renders of list elements you need to wrap them in React.memo and follow all of its best practices.

Value in key should be a string, that is consistent between re-renders for every element in the list. Typically, item’s id or array’s index is used for that.

It is okay to use array’s index as key, if the list is static, i.e. elements are not added/removed/inserted/re-ordered.

Using array’s index on dynamic lists can lead to:

- bugs if items have state or any uncontrolled elements (like form inputs)
- degraded performance if items are wrapped in React.memo

```jsx title='React.memo for improve list performances'
/// Dont
const Component = () => {
  /// when parent rerenders
  return (
    <>
      {items.map (() => (
        <Child item ={item} key={item.id}> /// will rerender independent of index
      ))}
    </>
  );
};
```

```jsx title='React.memo for improve list performances'
/// Do
const ChildMemo = React.memo(Child)

const Component = () => {
  /// when parent rerenders
  return (
    <>
      {items.map (() => (
        <ChildMemo item ={item} key={item.id}> /// won't rerender independent of index unless its random
      ))}
    </>
  );
};
```

## Prevent re-renders caused by context - memoize provider

If Context Provider is placed not at the very root of the app, and there is a possibility it can re-render itself because of changes in its ancestors, its value should be memoized.

```jsx title='useMemo for improve context rerender - memoize provider'
/// Dont
const Component = () => {
  /// when parent rerenders
  return (
    <Context.Provider = {{value}}>
      {children}
    <Context.Provider/>
  );
};
```

```jsx title='useMemo for improve context rerender - memoize provider'
/// Do


const Component = () => {
  const memoValue =useMemo({value}, [])

  /// when parent rerenders
  return (
    <Context.Provider = {{memoValue}}>
      {children}
    <Context.Provider/>
  );
};
```

## Prevent re-renders caused by context -split data and API

## Prevent re-renders caused by context -split data into chunks

## Prevent re-renders caused by context - context selectors

There is no way to prevent a component that uses a portion of Context value from re-rendering, even if the used piece of data hasn’t changed, even with useMemo hook.

Context selectors, however, could be faked with the use of higher-order components and React.memo.

```jsx title='context selectors'
/// Dont
const useSomething = () => {
  const {something} = useContext(context)
  return useMemo(() => something, [something]) ///useMemo wont help
}

const Component = () => {
  const {something} = useSomething() /// will rerender even if something hasn't changed
  return (
  );
};
```

```jsx title='context selectors'
/// Do
const withSomething = (Component) => {
  const MemoComponent = React.memo(Component)
  return () => {
    const {something } = useSomething()
    return <MemoComponent something= {something}> /// rerenders only if something changed
  }
}

const Component = withSomething(({ something })) => {
   /// will rerender even if something has changed
  return (
  );
};

```
