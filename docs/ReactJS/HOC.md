# High Order Components (HOC)

[https://codesandbox.io/s/hocs-intro-6jqmju?file=/src/App.tsx](https://codesandbox.io/s/hocs-intro-6jqmju?file=/src/App.tsx)

[https://www.developerway.com/posts/higher-order-components-in-react-hooks-era](https://www.developerway.com/posts/higher-order-components-in-react-hooks-era)

[https://react-typescript-cheatsheet.netlify.app/docs/hoc/](https://react-typescript-cheatsheet.netlify.app/docs/hoc/)
Higher-order components are still useful even in modern apps for certain types of tasks.

## What is a higher-order component?

it’s just a function, that accepts a component as one of its arguments, messes with it, and then returns back its changed version. The simplest variant of it, that does nothing, is this:

```jsx title='HOC'
// accept a Component as an argument
const withSomeLogic = (Component) => {
  // do something

  // return a component that renders the component from the argument
  return (props) => <Component {...props} />;
};
```

The key here is the return part of the function - it’s just a component, like any other component. And similar to the render props pattern, we need to pass props to the returned component, otherwise, they will be swallowed.

```jsx title='UseEffect vc useCallback Example'
const Button = ({ onClick }) => <button onClick={func}>Button</button>;
const ButtonWithSomeLogic = withSomeLogic(Button);
```

## Enhancing callbacks and React lifecycle events

Imagine you need to send some sort of analytics on some callbacks. What if you want your logging events to be consistently fired across your entire app, whenever the button is clicked?
We probably can bake it into the Button component itself.
Button is usually not the only thing people can click on in our apps. What if I want to add the same logging to a ListItem component? Copy-paste exactly the same logic there? NO !

What I want, essentially, is to encapsulate the logic of “something triggered onClick callback - send some logging events” somewhere, and then just re-used it in any component I want, without changing the code of those components in any way.

I can just create a withLoggingOnClick function, that:

1. accepts a component as an argument
2. intercepts its onClick callback
3. sends the data that I need to the whatever external framework is used for logging
4. returns the component with onClick callback intact for further use

```jsx title='HOC callback'
type Base = { onClick: () => void };

// just a function that accepts Component as an argument
export const withLoggingOnClick = <TProps extends Base>(Component: ComponentType<TProps>) => {
  return (props: TProps) => {
    const onClick = () => {
      console.log('Log on click something');
      // don't forget to call onClick that is coming from props!
      // we're overriding it below
      props.onClick();
    };

    // return original component with all the props
    // and overriding onClick with our own callback
    return <Component {...props} onClick={onClick} />;
  };
};
```

And now I can just add it to any component that I want. I can have a Button with logging baked in:

```jsx title='HOC callback button'
export const ButtonWithLoggingOnClick = withLoggingOnClick(SimpleButton);
```

[https://codesandbox.io/s/hocs-buttons-m45hm4?file=/src/hocs/with-logging-on-click.tsx](https://codesandbox.io/s/hocs-buttons-m45hm4?file=/src/hocs/with-logging-on-click.tsx)
