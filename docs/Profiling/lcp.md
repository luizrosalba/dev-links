[https://web.dev/optimize-lcp/](https://web.dev/optimize-lcp/)

# LCP

Largest Contentful Paint (LCP) is one of the three Core Web Vitals metrics, and it represents how quickly the main content of a web page is loaded. Specifically, LCP measures the time from when the user initiates loading the page until the largest image or text block is rendered within the viewport.

To provide a good user experience, sites should strive to have an LCP of 2.5 seconds or less for at least 75% of page visits.

There are a number of factors that can affect how quickly the browser is able to load and render a web page, and blockage or delays across any of them can have a significant impact on LCP.

It's rare that a quick fix to a single part of a page will result in a meaningful improvement to LCP. To improve LCP you have to look at the entire loading process and make sure every step along the way is optimized.

Optimizing for LCP is a complex task, and with complex tasks it's generally better to break them down into smaller, more manageable tasks and address each separately. This guide will present a methodology for how to break down LCP into its most critical sub-parts and then present specific recommendations and best practices for how to optimize each part.

## How to improve LCP

1. Focus on HTML document
2. Focus on any others resources needed to render the LCP element (could be an imagem, a text node that needed to load a web font...)

## LCP Subparts

1. [Time to First Byte metric (TTFB)](./TTFB.md)

2. Resource load delay : (time to load everything needed to render the page )

3. Resource load time : LCP resource Itself

4. Element Render delay time from finish step 3 until render the screen

- just improving images may not help improve a lot LCP

## Steps to improve LCP :

1. Eliminate lcp resource delay :

- Add priority hints or preload
- Minimize network contention
- Use Same origin resources
- LCP image should be lazy loaded (will result in additional resource load delay)

2. Eliminate unnecessary element render delay

- ensure that lcp element can render immediately after its resource has finished loading ( no matter when that happens)
- Remove ou minimize render blocking stylesheets
- defer render blocking JS
- Use font-display optional
- minification of js
- three shaking
- pre-render pages as static files
- SSR when possible
- Js shouldn't block rendering at all
- LCP image can render ASAP

3. Reduce resource load time

- reduce without lose quality
- compress images
- use modern image formats (avif / webp)
- properly size images
- set fat-future cache expire headers
- use a cdn to reduce network distance
- critical css -> remove unused styles (reduce css in size to be smaller then lcp)

4. reduce TTFB

- Deliver the initial page ASAP
- use a CDN to reduce network distance
- upgrade server hardware
- ensure response bodies can be streamed

## preload high size images

- Next may have a way to do so

- on index.html you can

<link rel='preload' href='path_to_heavy_image' as='image'>

- so it will start loading before JS loads

- profile should show image loading among css portion

we can use a new api to make higher priority :

<link fetchpriority="high" rel="preload" href="path_to_image" as="image" >

## Convert images to avif

```
npx @squoosh/cli --resize '{width:800, height: 500}' --avif '{}' -d ./med ./images/*
```
