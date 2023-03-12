# Vite

[https://blog.logrocket.com/vite-3-vs-create-react-app-comparison-migration-guide/](https://blog.logrocket.com/vite-3-vs-create-react-app-comparison-migration-guide/)

Vite is a build tool that bridges the gap between current and next-generation web development, providing a faster and more performant experience for developers and modern web projects.

Vite is built on top of esbuild, a JavaScript bundler written in Go that bundles dependencies 10 to 100 times faster than JavaScript-based bundlers.

Created by Evan You, the creator of Vue, Vite is platform-agnostic, meaning you can use it to develop JavaScript and TypeScript applications with support for popular libraries like React, Svelte, Preact, and even vanilla JavaScript.

Vite leverages the browser’s native ESM to parse and compile your code as the browser requests it. It then serves the source file using a plugin like Koa, a lightweight Node.js web server. It creates a dev server with support for hot module replacement to update served modules and Rollup for production builds.

Vite and Create React App are not as different as you might think. At their core, both tools do pretty much the same thing, serving a local development server and bundling codes for production. The major difference lies in how code is served in development and which modules are supported.

Create React App is a development environment that helps to speed up the development process by letting developers focus on their code instead of configuring build tools. Under the hood, Create React App uses a third-party build tool called webpack to handle its core functionalities. Really, this is what Vite is up against.

Before starting a dev server, Vite doesn’t need to bundle the entire app or transpile the modules and code; transpiling is done on-demand, making it significantly faster than CRA.

After serving the app, instead of rebuilding and reloading the entire page like CRA, Vite uses route-based code-splitting to determine which part of the code needs to be loaded. Then, it uses the browser to parse the native ES modules from the app’s entry point.

The browser will read the import and export statements in your code and make HTTP requests back to the server for each import. Then, the dev server intercepts the requests and performs code transformation where necessary.

Modules without any changes will return a 304 not modified status code, so the browser ignores them. Therefore, the browser doesn’t have to reload, and the application keeps its state.

```
npm create vite@latest
```

OR

```
npm init vite@latest vite-project --template react

cd vite-project
npm install
npm run dev
```

So, instead of importing files and components in your React app with the following code:

import Cards from "components/cards";
You’ll need to import them as follows:

```JS
import Cards from “/src/components/cards.jsx”
```

Fortunately, there’s a fix for this path resolving. Go to the project’s root folder, open the vite.config.js file, and replace the existing code with the following respective code blocks:

```JS
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
plugins: [react()],
});
```

```JS

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "common",
        replacement: resolve(__dirname, "src/common"),
      },
    ],
  },

  plugins: [react()],
});
```

```
//Instead of this
REACT_APP_ API_KEY = 1234567890..
//Use this
VITE_API_KEY = 1234567890..
```
