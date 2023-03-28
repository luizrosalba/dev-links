# Pitfalls

from : [https://javascript.plainenglish.io/5-react-usestate-mistakes-that-will-get-you-fired-b342289debfe](https://javascript.plainenglish.io/5-react-usestate-mistakes-that-will-get-you-fired-b342289debfe)

## Getting previous value incorrectly

```jsx title='Not using it previous state can cause unexpected state updates'
import { useCallback, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  /// Instant increment works
  //   const handleIncrement = useCallback(() => {
  //     setCounter(counter + 1);
  //   }, [counter]);
  /// Instant increment works better without dependency
  const handleIncrement = useCallback(() => {
    setCounter((prev) => prev + 1);
    // Dependency removed!
  }, []);

  //   const handleDelayedIncrement = useCallback(() => {
  //     // counter + 1 is the problem,
  //     // because the counter can be already different, when callback invokes
  //     setTimeout(() => setCounter(counter + 1), 1000);
  //   }, [counter]);

  const handleDelayedIncrement = useCallback(() => {
    // Using prev state helps us to avoid unexpected behaviour
    setTimeout(() => setCounter((prev) => prev + 1), 1000);
    // Dependency removed!
  }, []);

  return (
    <div>
      <h1>{`Counter is ${counter}`}</h1>
      {/* This handler works just fine */}
      <button onClick={handleIncrement}>Instant increment</button>
      {/* Multi-clicking that handler causes unexpected states updates */}
      <button onClick={handleDelayedIncrement}>Delayed increment</button>
    </div>
  );
}
```

## Storing global state in useState

We can access our global state easily from every part of our app. It’s much more convenient and clear than using pure useState .

```jsx title='Use React Context.'
import React, { createContext, useContext, useMemo, useState } from "react";

// Created context
const UserContext = createContext();

// That component separates user context from app, so we don't pollute it
function UserContextProvider({ children }) {
  const [name, setName] = useState("Pavel");
  const [surname, setSurname] = useState("Pogosov");

  // We want to remember value reference, otherwise we will have unnecessary rerenders
  const value = useMemo(() => {
    return {
      name,
      surname,
      setName,
      setSurname,
    };
  }, [name, surname]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function PageFirst() {
  const { name } = useContext(UserContext);

  return name;
}

function PageSecond() {
  const { surname } = useContext(UserContext);

  return surname;
}

export default function App() {
  return (
    <UserContextProvider>
      <PageFirst />
      <PageSecond />
    </UserContextProvider>
  );
}
```

## Forgetting to initialize the state

```jsx title='Always initialize states'
import React, { useEffect, useState } from "react";

async function fetchUsers() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  return users;
}

export default function App() {
  // If it doesn't cause errors in your case, it's still a good tone to always initialize it (even with null)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  // You can also add that check
  // if (users.length === 0) return <Loading />

  return (
    <div>
      {users.map(({ id, name, email }) => (
        <div key={id}>
          <h4>{name}</h4>
          <h6>{email}</h6>
        </div>
      ))}
    </div>
  );
}
```

## Avoid mutate state !

You mustn’t mutate React state ever in your life! React does a lot of smart and important stuff when the state changes, and it does that according to shallow comparison

```jsx title='Never mutate state ! '
import { useCallback, useState } from "react";

export default function App() {
  const [userInfo, setUserInfo] = useState({
    name: "Pavel",
    surname: "Pogosov",
  });

  const handleChangeInfo = useCallback((field) => {
    return (e) => {
      /// wrong
      // setUserInfo((prev) => {
      // // Here we are mutating prev state.
      // // That simply won't work as React doesn't recognise the change
      // prev[field] = e.target.value;

      return prev;
      // Now it works!
      setUserInfo((prev) => ({
        // So when we update name, surname stays in state and vice versa
        ...prev,
        [field]: e.target.value,
      }));
    };
  }, []);

  return (
    <div>
      <h2>{`Name = ${userInfo.name}`}</h2>
      <h2>{`Surname = ${userInfo.surname}`}</h2>

      <input value={userInfo.name} onChange={handleChangeInfo("name")} />
      <input value={userInfo.surname} onChange={handleChangeInfo("surname")} />
    </div>
  );
}
```

## Compose Hooks

```jsx title='Useinput will avoid using two hooks for name and surname'
import React, { useCallback, useState } from "react";

function useInput(defaultValue = "") {
  // We declare this state only once!
  const [value, setValue] = useState(defaultValue);

  // We write this handler only once!
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // Cases when we need setValue are also possible
  return [value, handleChange, setValue];
}

export default function App() {
  const [name, onChangeName] = useInput("Pavel");
  const [surname, onChangeSurname] = useInput("Pogosov");

  return (
    <div>
      <input value={name} onChange={onChangeName} />
      <input value={surname} onChange={onChangeSurname} />
    </div>
  );
}
```
