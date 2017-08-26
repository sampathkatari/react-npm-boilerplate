# react-npm-boilerplate
Boiler plate code for creating a new react npm component.
Just clone this project and start building your npm package for react components.

# Steps
1. Clone this project
2. rm -rf .git && git init - This will remove the exisintg git repo and will initialize a new one
3. Change {your roject name}, {author name} and {author email} in package.json
4. Now run - npm run build
5. This will create a build file build/index.js
6. Now run - npm link - This will link the project with the name you gave
   
   !! Wow now you are done create your npm module !!

# Let's create a sample project to test it out
1. npm i -g create-react-app
2. mkdir react-project-test
3. cd react-project-test
4. create-react-app
5. npm link {your project name}

Open src/App.js, import and add your component to it.
Run - npm start

open http://localhost:3000
You should be able to see your component rendering on that page.
