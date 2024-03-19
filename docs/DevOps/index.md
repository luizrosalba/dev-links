# DevOps

## Tools

https://dev.to/aws-builders/essential-tools-for-a-successful-devops-engineer-4lgl

## Publish Vite to Github pages

1. Add npm package [https://www.npmjs.com/package/gh-pages](https://www.npmjs.com/package/gh-pages)
2. Add to package.json the line

```
 "homepage": "https://your-github-username.github.io/your-repository-name/",
```

3. Add to scripts on package.json

- "predeploy": "npm run build",
- "deploy": "gh-pages -d dist",

4. vite.config.ts should be

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/your-repository-name/",
  plugins: [react()],
})

```

5. Push
6. deploy

```
npm run deploy
```

7. Go https://github.com/your-github-username/your-repository-name/settings/pages
8. Deploy from gh-pages
9. Once the deployment is complete, you can access your React app by going to the URL specified in the homepage field of your package.json file. Typically, the URL will be in the form of https://your-github-username.github.io/your-repository-name/.
