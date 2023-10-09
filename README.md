# Webpack React

Webpack setup for react projects

## Features

- Hot Module Replacement via React Fast Refresh
- Two separate configs for development and production mode
- Transpiling and polyfilling with Babel
- Babel auto imports the functions that JSX transpiles to
- Extracting third-party libraries to a separate vendor chunk
- Hash based caching
- Source maps for dev and prod builds 
- HTML template to simplify bundling
- Prettier and ESLint for formatting and linting code


## Installation

Use the package manager [npm](https://nodejs.org/en/download) to install dependencies.

```shell
# in project root folder
npm install
```

## Usage

### Development mode
```shell
$ npm start

> webpack-react@1.0.0 start
> webpack serve --config webpack.dev.js

[webpack-dev-server] Project is running at:
[webpack-dev-server] Loopback: http://localhost:8080/
...
```

### Production mode
```shell
$ npm run build

> webpack-react@1.0.0 build
> webpack --config webpack.prod.js
...
```
