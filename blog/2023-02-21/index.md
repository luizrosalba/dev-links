---
slug: how-add-docusaurus-vercel-seo
title: How Add Docusaurus Vercel SEO
authors: [luizrosalba]
tags: [Docusaurus, SEO, google]
---

When you deploy a docusaurus website to vercel it won't SEO

1. Visit https://search.google.com/search-console/about

2. Use Meta Tags

3. On src/pages/index.tsx

```
import Head from '@docusaurus/Head';
     <Head>
        <meta name="google-site-verification" content="yourcontentKey" />
      </Head>
```

4. config is done ! Will take about one day to get SEO Done
