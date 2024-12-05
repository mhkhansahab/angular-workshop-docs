---
title: Angular CLI
description: Creating a new application with Angular CLI
---

Before we start, check your node version by running the following command.

```bash
node --version
```

Now let's start by creating a new Angular application using the Angular CLI. First, install the Angular CLI globally in our machine so we can use it with ease.

```bash
npm install -g @angular/cli
```
:::note
Note: Your npm version should be greater than `9.5.0` for this to work. If you have an older version, do update to a later version of NodeJS. We use at least node v18.x
:::

After installing the Angular CLI globally, let's check your Angular CLI version by running the following command.

```bash
ng version
```

Now, we will test Angular CLI by running this command. Run the following command from the terminal.

```bash
ng new shopi --style scss --ssr=false --dry-run
```

If you run the following command, you will see some output on your console with a message that says:
```bash
NOTE: The "--dry-run" option means no changes were made.
```

As the message says, Angular executes the generation of the project in memory as to what should happen but does not do it on the File System due to the `--dry-run` flag. This is handy to just see what a command does without changing any files.

Now, run the same command without the `--dry-run` flag as follows:

```bash
ng new shopi --style scss --ssr=false
```

> You can grab a coffee 🍵 while the Angular CLI installs the dependencies, but don't go for too long. The process is pretty quick ⚡!

Once the project is created, open it in your favorite [Code Editor](https://en.wikipedia.org/wiki/Source-code_editor) like [VS Code](https://code.visualstudio.com/). Then open a terminal, and run the following command to serve the Angular application on the browser:

```bash
ng serve -o
```

This should spin up a server with live-reload enabled and you should see the default UI for a new Angular app.

:::tip
Install the [Angular Language Service VSCode Extension](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template) to have the best developer experience with Angular.
:::

## Angular CLI Overview and Command Reference

- Read [more about the Angular CLI](https://angular.io/cli) in the official Angular docs

