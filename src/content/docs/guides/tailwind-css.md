---
title: Tailwind CSS
description: Integrating TailwindCSS with the Angular App
---

You can read the guidelines of how to integrate Tailwind CSS with Angular from the [official docs](https://tailwindcss.com/docs/guides/angular). 
You can skip the first step, since we already have an Angular application created.

Once TailwindCSS is installed and set up, update the index.html as follows to configure the root component styles along with the font of your choice, we will use [Nunito](https://fonts.google.com/specimen/Nunito) for this example:

```html
<!-- head -->
<!-- add the following -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">
...
<!-- head -->
<!-- body -->
<body class="bg-gray-100 dark:bg-slate-900 text-slate-900 dark:text-white">
  <app-root class="min-h-screen flex flex-col"></app-root>
</body>
<!-- body -->
```

Now, we will modify the `src/styles.scss` to add the Nunito font as follows:
```scss
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  font-family: 'Nunito', sans-serif;
}
```

Once done, we can clean up the view in the `app.component.html` file, remove all the code except the `<router-outlet></router-outlet>` block and some HTML as follows:

```html
<main class="flex-1 w-full mx-auto max-w-screen-xl px-4 py-4 gap-8 flex-col md:flex-row sm:px-6 lg:px-8">
  <router-outlet></router-outlet>
</main>
```

:::tip
We recommend using this [VS Code extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) (in case you use VS Code of course) to have a great developer experience with Tailwind CSS
:::
