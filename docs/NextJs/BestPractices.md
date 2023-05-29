# NextJs Best Practices

[https://reacthustle.com/blog/5-nextjs-routing-best-practices](https://reacthustle.com/blog/5-nextjs-routing-best-practices)

## Encapsulate hooks to the smallest components possible

Placing useRouter inside a large/container component may result in unnecessary re-renders. This doesn't only apply to useRouter but also other hooks that uses React.Context .

Solutions

1. Wrap ExpensiveComponent in React.memo

2. Since only the button uses the router, create another component for the button so that the useRouter will be placed there. This removes Navbar's dependency to the useRouter hook.

## Use prefetch={false} to reduce the number of requests on page load

Let's say a page has a huge number of links and although next.js only prefetches the links when scrolled in viewport, Sometimes it still affects performance. Remember that we want as few requests as possible on first load. So to achieve it's a good practice to create a common Link component with prefetch={false}.

As a best practice, it's best to create a wrapper component to not forget about adding prefetch=false:

```js title='LAzy link'
//LazyLink.tsx

import Link, { LinkProps } from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode,
} & LinkProps;

const LazyLink = ({ children, ...props }: Props) => {
  return (
    <Link {...props} prefetch={false}>
      {children}
    </Link>
  );
};

export default LazyLink;
```

## Know when to use router.query properties

## Use a loader Component when routing to a page using getServerSideProps

## Know when to use next/link vs router.push for SEO
