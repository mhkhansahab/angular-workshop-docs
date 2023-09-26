---
title: Angular CLI
description: Creating a new application with Angular CLI
---

Let's start by creating a new Angular application using the Angular CLI. First, let's install the Angular CLI globally in our machine so we can use it with ease.

```bash
npm install -g @angular/cli
```
:::note
Note: Your npm version should be greater than `8.5.0` for this to work. If you have an older version, do update to a later version of NodeJS. We use at least node v18.x
:::

Now, we will create a `standalone components` based application including routing, and SCSS as the chosen stylesheet format. Run the following command from the terminal.

```bash
ng new ng-flight-scanner --standalone --routing --style scss --dry-run
```

If you run the following command, you will see some output on your console with a message that says:
```bash
NOTE: The "--dry-run" option means no changes were made.
```

As the message says, Angular executes the generation of the project in memory as to what should happen but does not do it on the File System due to the `--dry-run` flag. This is handy to just see what a command does without changing any files.

Now, run the same command without the `--dry-run` flag as follows:

```bash
ng new ng-flight-scanner --standalone --routing --style scss
```

> You can grab a coffee 🍵 while the Angular CLI installs the dependencies, but don't go for too long. The process is pretty quick ⚡!

Once the project is created, open it in your favorite [IDE (Integrated Development Environment)](https://www.geeksforgeeks.org/ide-full-form/#:~:text=IDE%20stands%20for%20the%20integrated,%2C%20building%20executables%2C%20and%20debugging.) like [VS Code](https://code.visualstudio.com/). Then open a terminal, and run the following command to serve the Angular application on the browser:

```bash
npm start -- -o
```

This should spin up a server with live-reload enabled and you should see the default UI for a new Angular app.

:::tip
Install the [Angular Language Service VSCode Extension](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template) to have the best developer experience with Angular.
:::

## Angular CLI Overview and Command Reference

- Read [more about the Angular CLI](https://angular.io/cli) in the official Angular docs

