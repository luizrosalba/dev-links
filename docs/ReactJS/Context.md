[context](https://react.dev/learn/passing-data-deeply-with-context)

Context lets a parent component provide data to the entire tree below it. There are many uses for context. Here is one example. Consider this Heading component that accepts a level for its size:

```jsx title='Step 1: Create the context => LevelContext.js'
import { createContext } from "react";

export const LevelContext = createContext(0);
```

```jsx title='Step 2: Import useContext and LevelContext and add context Logic => Heading.js'
import { useContext } from "react";
import { LevelContext } from "./LevelContext.js";

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error("Unknown level: " + level);
  }
}
```

```jsx title='Step 2.1: Use the context => App.js'
import Heading from "./Heading.js";
import Section from "./Section.js";

export default function Page() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
```

```jsx title='Step 3: Provide the context => Section.js'
import { useContext } from "react";
import { LevelContext } from "./LevelContext.js";

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
```

Use cases for context

Theming: If your app lets the user change its appearance (e.g. dark mode), you can put a context provider at the top of your app, and use that context in components that need to adjust their visual look.
Current account: Many components might need to know the currently logged in user. Putting it in context makes it convenient to read it anywhere in the tree. Some apps also let you operate multiple accounts at the same time (e.g. to leave a comment as a different user). In those cases, it can be convenient to wrap a part of the UI into a nested provider with a different current account value.
Routing: Most routing solutions use context internally to hold the current route. This is how every link “knows” whether it’s active or not. If you build your own router, you might want to do it too.
Managing state: As your app grows, you might end up with a lot of state closer to the top of your app. Many distant components below may want to change it. It is common to use a reducer together with context to manage complex state and pass it down to distant components without too much hassle.

## Another Example :

```jsx title='Create Context Example'
interface ABCContextType {
  value1: number;
  value2: number;
  value3: number;
}

const ABCContext = React.createContext < ABCContextType > null;

export const useABCContext = (): ABCContextType => {
  const abcContext = useContext(ABCContext);

  if (!abcContext) {
    throw new Error(
      "useABCContext has to be used within <ABCContext.Provider>"
    );
  }
  return abcContext;
};
```

```jsx title='Another Context Example'
const Wrapper = () => {
  const contextValues = useMemo(
    () => ({
      value1,
      value2,
      value3,
    }),
    [value1, value2, value3]
  );
  return (
    <>
      <ABCContext.Provider value={contextValues}>
        <MainPage />
      </ABCContext.Provider>
    </>
  );
};

export default Wrapper;
```

After that import useABCContext anywhere inside ABCContext.Provider tree and you will be able to use its values
