React-template
==============

This is a very basic project using React that you can use to bootstrap your own projects. Everything is already setup for dev, test and linting. This project is using ES2015 syntax with the help of Babel 6.

first run `npm install`

then you can run the following commands :

* `npm start` : run the dev mode build with a dev server at `http://localhost:8080/public/`
* `npm run build` : create a single minified JS file in `dist` if `test` and `lint` passes
* `npm run lint` : lint your javascript files using eslint
* `npm test` : run your tests

In dev mode, you can open your app at `http://localhost:8080/public/`.
Each time you change your Javascript code, everything will be re-processed and the app will reload automatically using webpack-dev-server and embedded live reload.

You should use Node 4 or 5 to run the project.

Dependencies
------------

* for dev and build
  * `webpack` : the bundler, uses `webpack.config.js`
  * `webpack-dev-server` : the dev HTTP server
  * `babel` : to transform ES2015 code into ES5 code, uses `.babelrc`
  * `babel-cli` : to transform ES2015 code into ES5 code from CLI, uses `.babelrc`
  * `babel-preset-react` : preset to use react with babel 6
  * `babel-preset-es2015` : preset to use ES2015 with babel 6
  * `babel-preset-stage-0` : preset to use ES2015 with experimental features
* for runtime
  * `babel-runtime` : ES2015 runtime
  * `react`
  * `react-dom` : to use React in an DOM environment
* for tests
  * `mocha` : the test runner
  * `chai` : for assertions
  * `jsdom` : for headless browser testing
  * `react-addons-test-utils` : for React related tests
* for linting
  * `eslint` : the linter, uses `.eslinrc` and `.eslintignore`
  * `eslint-config-airbnb` : for ES2015 related rules
  * `eslint-plugin-react` : for React related rules
