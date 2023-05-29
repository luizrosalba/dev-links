[https://stackoverflow.blog/2022/12/20/best-practices-to-increase-the-speed-for-next-js-apps/](https://stackoverflow.blog/2022/12/20/best-practices-to-increase-the-speed-for-next-js-apps/)

## Use server-side rendering

## Use dynamic imports

## Cache frequently used content

## Remove unused dependencies

## Optimize images

Image optimization involves reducing the size of an image file. Because images are one of the biggest assets weighing down your app’s performance, reducing the size of image files can improve performance. This is a two-step process: 1) resize the image to a smaller size and 2) save it in the correct format (jpeg is better for photos; png is better for graphics).

Next.js provides an inbuilt next/image component that we can use in place of the native <img> component.

```jsx title='Image Optimization'
import Image from "next/image";

function OptimizedImage() {
  return (
    <>
      <h1>Next.js Image</h1>
      <Image
        src={image_url}
        alt="Any Text"
        width={500}
        height={500}
        blurDataURL="URL"
        placeholder="blur"
      />
    </>
  );
}
export default OptimizedImage;
```

Now let’s look at the benefits of the next/image component.

- Lazy loading:

Lazy loading is the process of loading a particular chunk of an app only when it is visible in the client viewport. By default, the next/image component lazy loads images, which will decrease the loading time. If you don’t want to lazy load an image, set priority={true} to turn it off.

- Placeholder images:

Using the next/image component, you can add a blurred placeholder for any image using the placeholder prop.

- Preload images:

If you have multiple images in a page, you can prioritize loading using the next/image component.

## Optimize your scripts

##

FCP has little to no direct relationship with Next.js-hydration or Next.js-before-hydration.

Part of this is a conflation of definitions of the word "render".

It is true that FCP is "TTFB + content load time + render time". But in this context, "render" has nothing to do with the React definitions of "render". In this context, "render" is more about the html rendering stage that happens before paint. And many browsers may try to paint elements to the screen, even before Dom content has finished loading (and perhaps even before domInteractive, I'm not sure about that).

So, sometimes FCP may happen before Next.js-before-hydration is complete, and in other cases, it may not happen until later. In the question's example, the performance measurement is in dev mode, which may be delaying FCP.

As for the difference between Next.js-before-hydration and Next.js-hydration, the insight to remember there is that hydration is not even possible until all the necessary react libraries are loaded.

This means that Next.js-before-hydration, by definition, includes:

The time spent to download the initial html (which includes TTFB)
The time spent to parse the initial html up through the necessary script tags that load the react libs
The time spent to download those critical javascript chunk files
The time spent to evaluate/execute those javascript chunk files, and load the react environment.
It's only at that point that the react hydration process can start. I believe the react hydration process is then about processing React render #1, and attaching the react event model to all the components that are part of that first render.

It's only after Next.js-hydration completes that reconciliation (additional commits/renders) becomes possible.
