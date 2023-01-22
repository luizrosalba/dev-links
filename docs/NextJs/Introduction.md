# Introduction

[https://dev.to/richkurtzman/advantages-and-disadvantages-of-nextjs-5hg6](https://dev.to/richkurtzman/advantages-and-disadvantages-of-nextjs-5hg6)


Next.js was developed by Guillermo Rauch, the CEO of Vercel, in 2016 and it’s currently in version 12.2, releasing in late June, 2022. And Next.js is actually written on top of Node.js, so it requires you have Node.js to use with Node Package Manager (npm).

One of the features of Next.js is the way it renders on the server side and client side, otherwise known as “universal apps.” That’s crucial for the single page applications (SPAs) it builds, and how it helps those SPAs have much-improved success in terms of SEO (search engine optimization).

“What happens when you use React without server-side rendering is that the crawler halts on the very first page because it can’t see any hyperlinks to follow. It sends the page to the indexer, which then has to render the page and extracts the hyperlinks, which will then be added to the crawler’s queue. Then the crawler will eventually crawl the next set of pages, and again will stop there because all the links are invisible until the JavaScript is rendered. So it has to wait for the indexer to come back with a new set of URLs to crawl,” Adams explained in a [Medium article](https://medium.com/@badams/another-very-late-response-youre-confusing-googlebot-the-crawler-with-caffeine-google-s-b9ef24d81524).

Background / Static Generation Benefits:
Gatsby and Next are focused on generating static pages, which vastly improves performance and SEO in React.js sites. There is a lot of technical overhead to both platforms beyond this simple insight but let's start with this idea of a digital machine pumping out fancy HTML pages for the browser.


## Advantages and disadvantages of Next.js

### Positives with Next.js are:

Excellent performance in terms of load times

Load times helped with “lazy loading” and automatic code splitting

Tons of support for developers

Fantastic user-experience

Faster time to market

Great SEO

### Negatives of Next.js are?

Some developers find it too opinionated

Multiple developers complain about how Next.js does routing, others champion it