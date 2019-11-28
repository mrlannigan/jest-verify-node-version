# jest-verify-node-version

Within Jest Setup, verify node version

This module uses `process.version` to retrieve the current version of node.

# Usage

```js
const { check } = require('json-verify-node-version');

// use CWD package.json
check(); // = true

// provide package.json-like object
check({ engines: { node: '>= 10' } }); // = true
```

# Example with Jest

```js
// jest.config.js
{
    //...
    "globalSetup": "<rootDir>/global.setup.js"
    //...
}

// global.setup.js
const { check } = require('jest-verify-node-version');

module.exports = async () => {
    check();
};
```