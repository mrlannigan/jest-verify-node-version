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

If the node version doesn't satisfy the engine node version range and `doNotThrow` is not true, then the `check` function will throw an error. For example:
```shell
$ npm test

> example-module@1.0.0 test:jest /Users/julian/dev/example-module
> jest

Error: node version v10.16.3, does not satisfy engine requirement of >=12.13.0
```