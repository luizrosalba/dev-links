# Rendering Lists 

[https://beta.reactjs.org/learn/rendering-lists](https://beta.reactjs.org/learn/rendering-lists)

## Keeping list items in order with key

You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array:

Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.

Rather than generating keys on the fly, you should include them in your data. 

## Using keys with Fragments

```jsx title='Using keys with Fragments'
import { Fragment } from 'react';

// ...

const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);
```

## Where to get your key

Different sources of data provide different sources of keys:

Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.

Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.

## Rules of keys 

Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.

Keys must not change or that defeats their purpose! Don’t generate them while rendering.

:::caution

You might be tempted to use an item’s index in the array as its key. In fact, that’s what React will use if you don’t specify a key at all. But the order in which you render items will change over time if an item is inserted, deleted, or if the array gets reordered. Index as a key often leads to subtle and confusing bugs.

Similarly, do not generate keys on the fly, e.g. with key={Math.random()}. This will cause keys to never match up between renders, leading to all your components and DOM being recreated every time. Not only is this slow, but it will also lose any user input inside the list items. Instead, use a stable ID based on the data.

Note that your components won’t receive key as a prop. It’s only used as a hint by React itself. If your component needs an ID, you have to pass it as a separate prop like 'id'

:::


