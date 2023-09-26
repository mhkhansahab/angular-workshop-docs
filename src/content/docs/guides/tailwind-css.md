---
title: Tailwind CSS
description: Integrating TailwindCSS with the Angular App
---

You can read the guidelines of how to integrate Tailwind CSS with Angular from the [official docs](https://tailwindcss.com/docs/guides/angular). 
You can skip the first step, since we already have an Angular application created.

Once done, we can clean up the view in the `app.component.html` file, remove all the code except the `<router-outlet></router-outlet>` block and some HTML as follows:

```html
<main class="mx-auto max-w-screen-xl px-4 py-4 gap-8 flex-col md:flex-row sm:px-6 lg:px-8">
  <h1 class="text-2xl text-center text-bold bg-red-500 text-white">Angular Flight Scanner</h1>
  <router-outlet></router-outlet>
</main>


```

:::tip
We recommend using this [VS Code extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) (in case you use VS Code of course) to have a great developer experience with Tailwind CSS
:::
