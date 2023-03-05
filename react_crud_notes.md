# React CRUD Notes

## What are `resources`?

Resources typically refer to the data or information that the application is managing. In the context of a CRUD application, there are typically four basic operations that can be performed on these resources: Create, Read, Update, and Delete.

When we create an app that is built on React.js we need to create components and functions that will allow our users to perform these operations on the resources we provided them with.

Overall, resources is the data we are managing and allowing our users to interact with. By understanding both sides of the equation, we can create a better user experience and create a more intuitive application.

- CRUD are actions that we can apply to resources.

## `npm run dev`

`npm run dev` is a command that we can run in our terminal to start our application. This command is defined in our `package.json` file.

This command will look for the `dev` script in our `package.json` file and run it. Depending on the script that is written in there it will run a different actions on the app.

Typically the `dev` script will run the `webpack-dev-server` command. This command will start a server that will watch for changes in our code and automatically update the browser when we make changes to our code.

In general, running this command: `npm run dev` on our application is a common way to start a development server for your `node.js` project. It allows you to work on your code in a local environment and provides features such as live reloading and hot module replacement that could streamline your development process.

## What is `hot reloading`?

`Hot reloading` is a development technique where changes to the source code are immediately reflected in the application without requiring a full reload. Essentially, the code changes are injected into the application while its's still running which allows developers to see the results of their changes without having to manually refresh the page.

## What is `hot module replacement` (HMR)?

`Hot module replacement` is an advanced feature of `hot reloading`, that allows you to update your code upon a change to a specific module without having to refresh the browser. This is a feature that is provided by the `webpack-dev-server` and is enabled by default.

## Nodemon

Nodemon and Node.js are two different things and should not be confused. Nodemon is a tool that will watch for changes in your code and automatically restart your server when changes are made. This is a tool that is used in development and is not used in production. Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of the browser.

When you install Nodemon, it will watch the files in your project directory and automatically restart your server when changes are made.

In macOS or Linux, you can use the `lsof` (list open files) command to show you a list of all the open files in your current local machine, including the ports/ network connections that are being used.

```bash
# In this case we are listening for traffic in port 5000
lsof -i :5000
```

# CRUD Operations for our React App

| Page Type | Frontend URL: looks like | Backend URL: looks like           | HTTP Verb | CRUD Action |
| --------- | ------------------------ | --------------------------------- | --------- | ----------- |
| Index     | localhost:3000/shows     | localhost:3000/api-base/shows     | GET       | Read        |
| Show      | localhost:3000/shows/:id | localhost:3000/api-base/shows/:id | GET       | Read        |
| New       | localhost:3000/shows/new | localhost:3000/api-base/shows     | POST      | Create      |
| Edit      | localhost:3000/shows/:id | localhost:3000/api-base/shows/:id | PUT       | Update      |
| Delete    |                          | localhost:3000/api-base/shows/:id | DELETE    | Delete      |
