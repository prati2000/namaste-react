# This is for learning purpose

# NPM: Node Package Manager(NPM doesn't stand for node package manager)

Behind the scene it manages packages
Package manager of JS
package.json is configuration for npm

# Bundler is the most imp package manager : When we created the files, our whole code needs to be bundled together(cleaned,compressed). Bundler helps to do all these things.

Examples of Bundler: Webpack, Parcel, Vite: Bundler : package your app so that it can be shipped to production.

# Steps:

- make a repo at github
- make your local repo as git repo..
- git init
- git add .
- git commit -m "intitial commit"
- git push -u origin main

# How can we configure our app?

- Step 1: npm init
  {
  This utility will walk you through creating a package.json file.
  It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (namaste-react)
version: (1.0.0)  
description: Learning React  
entry point: (App.js)  
test command: jest  
git repository: (https://github.com/prati2000/namaste-react.git)  
keywords: react, react-dom  
author: Prati  
license: (ISC)  
About to write to D:\Courses\Namaste React\namaste-react\package.json:

{
"name": "namaste-react",
"version": "1.0.0",
"description": "Learning React",
"main": "App.js",
"scripts": {
"test": "jest"
},
"repository": {
"type": "git",
"url": "git+https://github.com/prati2000/namaste-react.git"
},
"keywords": [
"react",
"react-dom"
],
"author": "Prati",
"license": "ISC",
"bugs": {
"url": "https://github.com/prati2000/namaste-react/issues"
},
"homepage": "https://github.com/prati2000/namaste-react#readme"
}

Is this OK? (yes)

PS D:\Courses\Namaste React\namaste-react>
}

It will ask some questions, before configuring.

After that it will create package.json file.
package.json: configuration for our NPM.

- Step 2: npm install -D parcel(Most imp package in our project is bundler)
  Bundler: Our whole code needs to be minified, compressed, cleaned before it can be sent to production.
  what is -D -> to want pracel(library) as a dev dependency
  Two types of dependencies:

a. Dev Dependency : required for development phase
b. Normal Dependency : used in production also

package.json: configuration for NPM, keeps track of version of package installed in our system.
package-lock.jdom: keeps track of exact version of all the dependencies that is installed.

# node_modules:

Contains node pacakages inside it, diff node packages inside it.
All the code that we fetched from NPM when we did npm install parcel.
Database that conatins the actual data of that dependencies that our code need.

# Why so many folders when we only installed parcel?

we installed parcel but parcel has it's own dependencies. and those dependencies can have it's own dependencies. This is known as transitive dependencies.

- Step 3: Igniting our app:
  npx parcel index.html(source file where we want start our app with)
  npx parcel --no-cache index.html

# What is npx?

NPX is used for executing our package.
while NPM is used for installing the package.

# CDN links is not a good way to bring react into the project.

Fetching from CDN is a costly operation.

- so we use "npm install react"
- we also have to install react-dom. "npm install react-dom"

# Importance of parcel:

- Dev build
- Local Server
- HMR: Hot Module Rendering
- File watching algorithm - Written in c++
- Caching: Faster build
- Image Optimizaion
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code splitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- We can host in HTTPs
- Tree Shaking Algorithm: remove unused code

# Creating a Script

in package.json, inside scripts.. add start: parcel --no-cache index.html
Over here we arite the command, and it is executed by npm in script.

now we can start by "npm run start" or "npm start"
for build npm run build, only for start we can run directly.

# JSX

//React.createElement ==> ReactElement(Object) ==> HTMLElement(render)
Javascript is a code that our browser understands.
Can JS engine understand JSX?
No, because JS engine understands ECMAscript.

Parcel, webpack is doing the job behind the scene. Packages like parcel, webpack transpiles the code before sending it to the JS engine.

We have to use camelCase whie using JSX.

# how is this code running?

JSX-> not html inside JS.
It is different from HTML. It ia a HTML like syntax.
Transpile -> converted into a code that JS engine can understand.
Transpiling is done by Babel(package).
Babel is a javascript complier (transpiler)
Babel is a JS package.
Old version don't understand ES6, that's where babel is used.

Babel creates a ABS(abstract Syntax tree) for compling the code.

# single line and multuline JSX

for single line JSX we can directly write it, but for multi-line JSX we have to wrap it in ().
() is used to tell babel that it is JSX.

# React Components

Class Based Component - Old way of writing code - uses js classes
Functional Component - New way of writing code - uses js functions

JS function which retrun a react element.

# Ways to define component

const HeadingComponent = () => {
return <h1>"Heading</h1>;
};

const HeadingComponent2 = () => <h1>"Heading 2</h1>;

const HeadingComponent3 = () => (

  <div>
    <h1>"Heading 3</h1>
  </div>
);

# Components Composition

When we call a component inside a component.
Composing two componnet into one another.

Inside JSX if we write any code {}, it is treated as JS code. Any piece of JS expression.

# Cross side scripting

Attacker can send some data and this data will be executed as it is a JS code.
JSX sanitizes CSS.
