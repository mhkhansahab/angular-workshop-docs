---
title: Angular Routing
description: Creating the home page and lazy loading the routes
---

## Creating the components

We will now create two route components in Angular. And they will be [Standalone Components](https://angular.io/guide/standalone-components). The Angular CLI is great to create components and other entities for the application. Run the following command from your terminal.

```bash
ng g c home
ng g c about
```

This generates a new standalone components named `home` and `about` inside the `src/app/home` and `src/app/about` folders, respectively for us.

## Setting up routes

Now let's create routes for these components. We want to show the `HomeComponent` on the `/home` route of our application. And we also want to make it (`/home`) the default route.

Let's open the `app.routes.ts` file to add some code as follows:

```ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}];
```

Let's add the `AboutComponent` as well, as follows:

```ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'about',
  component: AboutComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}];

```
:::note
If you refresh the app at [http://localhost:4200](http://localhost:4200), you should see the text that says `home works` and the URL should also be automatically redirected to `http://localhost:4200/home` even if you try to go to `http://localhost:4200`.
:::

## Creating a header component with navigation

Creat a new component using the Angular CLI as follows:

```bash
ng g c components/header
```
> Notice that even if the `components` folder does not exist at the moment, Angular CLI creates it automatically.

Now let's use the Header component inside our App component. We have to first import the Header component in the App component. Let's modify the `src/app/app.component.ts` file as follows:


```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; /* 👈🏽 add this */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent /* 👈🏽 add this */],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-flight-scanner';
}
```

Now let's use the header component using its selector `<app-header>` inside the `app.component.html` file as follows:

```html
<app-header></app-header> <!-- 👈🏽 add this -->
<main class="mx-auto max-w-screen-xl px-4 py-4 gap-8 flex-col md:flex-row sm:px-6 lg:px-8">
  <router-outlet></router-outlet>
</main>


```


At this point, the view in your browser should say:
```
header works!
home works!
```

Now, update the contents of the `src/app/components/header/header.component.html` as follows:

```html
<header class="bg-gray-50 dark:bg-slate-800">
  <div class="mx-auto max-w-screen-xl px-4 py-4 gap-8 flex-col md:flex-row sm:px-6 lg:px-8 flex items-center justify-between">

    <div>
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
        Welcome to Flight Scanner!
      </h1>

      <p class="mt-1.5 text-sm text-gray-500 dark:text-gray-300">
        Are you ready to go to your next destination? 🚀
      </p>
    </div>
    <div class="flex items-center justify-end gap-4 flex-1">
      <div class="flex items-center gap-4 flex-1">
        <div class="relative flex-1">
          <label class="sr-only" for="search"> Search </label>

          <input
            class="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm flex-1"
            id="search"
            type="search"
            placeholder="Search flights..."
          />

          <button
            type="button"
            class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
          >
            <span class="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <a
          href="#"
          class="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
        >
          <span class="sr-only">Notifications</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </a>
      </div>

      <span
        aria-hidden="true"
        class="block h-6 w-px rounded-full bg-gray-200"
      ></span>

      <a href="#" class="block shrink-0">
        <span class="sr-only">Profile</span>
        <img
          alt="Man"
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="h-10 w-10 rounded-full object-cover"
        />
      </a>
    </div>
  </div>
</header>
```