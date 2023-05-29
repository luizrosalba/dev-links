TTFB is a metric that measures the time between the request for a resource and when the first byte of a response begins to arrive.

![TTFB](https://res.cloudinary.com/dmo37c7zy/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1685368430/TTFB_siyw65.jpg?_s=public-apps)

TTFB is the sum of the following request phases:

- Redirect time
- Service worker startup time (if applicable)
- DNS lookup
- Connection and TLS negotiation
- Request, up until the point at which the first byte of the response has arrived
- Reducing latency in connection setup time and on the backend will contribute to a lower TTFB.

TTFB should be:

1. Good (Below 800ms)
2. Needs Improvement (Below 1800ms)
3. Poor (above 1800ms)

## Strategies to improve TTFB

[https://web.dev/optimize-ttfb/](https://web.dev/optimize-ttfb/)

### Good Host Providers

- How much memory is your application instance allocated? If your application has insufficient memory, it will thrash and struggle to serve pages up as fast as possible.
- Does your hosting provider keep your backend stack up to date? As new versions of application backend languages, HTTP implementations, and database software are released, performance in that software will be improved over time. It's key to partner with a hosting provider that prioritizes this kind of crucial maintenance.
- If you have very specific application requirements and want the lowest level access to server configuration files, ask if it makes sense to customize your own application instance's backend.

### Use a Content Delivery Network (CDN)

CDN providers usually offer extremely fast DNS resolution times.

### Avoid multiple page redirects

There are two types of redirects:

Same-origin redirects, where the redirect occurs entirely on your website.
Cross-origin redirects, where the redirect occurs initially on another origin—such as from a social media URL shortening service, for example—before arriving at your website.
You want to focus on eliminating same-origin redirects, as this is something you will have direct control over. This would involve checking links on your website to see if any of them result in a 302 or 301 response code.

Cross-origin redirects are trickier as these are often out

### Stream markup to the browser

### Use a service worker

The Service Worker API can have a big impact on the TTFB for both documents and the resources they load. The reason for this is that a service worker acts as a proxy between the browser and the server—but whether there is an impact on your website's TTFB depends on how you set up your service worker, and if that setup aligns with your application requirements.

Use a stale-while-revalidate strategy for assets. If an asset is in the service worker cache—be it a document or a resource the document requires—the stale-while-revalidate strategy will service that resource from the cache first, then will download that asset in the background and serve it from the cache for future interactions.

If you have document resources that don't change very often, using a stale-while-revalidate strategy can make a page's TTFB nearly instant. However, this doesn't work so well if your website sends dynamically generated markup—such as markup that changes based on whether a user is authenticated. In such cases, you'll always want to hit the network first, so the document is as fresh as possible.
If your document loads non-critical resources that change with some frequency, but fetching the stale resource won't greatly affect the user experience—such as select images or other resources that aren't critical—the TTFB for those resources can be greatly reduced using a stale-while-revalidate strategy.

Use a streaming service worker architecture if possible. This service worker architecture uses an approach where parts of a document resource are stored in the service worker cache, and combined with content partials during the navigation request. The resulting effect of using this service worker pattern is that your navigation will be quite fast, while smaller HTML payloads are downloaded from the network. While this service worker pattern doesn't work for every website, TTFB times for document resources can be practically instant for sites that can use it.
Use the app shell model for client-rendered applications. This model fits best for SPAs where the "shell" of the page can be delivered instantly from the service worker cache, and the dynamic content of the page is populated and rendered later on in the page lifecycle.

### Use 103 Early Hints for render-critical resources

The 103 Early Hints header is an early response code that the server can send to the browser while the backend is busy preparing markup. This header can be used to hint to the browser that there are render-critical resources the page should begin downloading while the markup is being prepared. For supporting browsers, the effect can be faster document rendering (CSS) and quicker availability of core page functionality (JavaScript).
