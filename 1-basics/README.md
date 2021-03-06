# Basics of testing with React Testing Library (RTL) & Jest

This is the most basic project study on unit testing using RTL and Jest.

Here we can find the basics to start unit tests rendering components, mocks with jest and functional tests simulating user behaviors.

## Dependencys and project informations

This project use Typescript template

`npm create react-app <projectName> --template typescript`

For mock this project uses ts-jest locally to type mocked tests in TypeScript.

`npm install -D ts-jest`

Axios to consume Pokemon API

`npm install axios`

To fix error Error: Failed to initialize watch plugin "node_modules/jest-watch-typeahead/filename.js":

`npm i -D --exact jest-watch-typeahead@0.6.5`

## Debugging tests in VS Code

See the documentation: https://create-react-app.dev/docs/debugging-tests/#debugging-tests-in-visual-studio-code

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

If the command shows an error, it may be necessary to run the installation below for it to work:
`npm i -D --exact jest-watch-typeahead@0.6.5`

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
