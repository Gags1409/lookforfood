const path = require('path');
const { createCompatibilityConfig } = require('@open-wc/building-webpack');

// eslint-disable-next-line no-unused-vars
const config = createCompatibilityConfig({
  input: path.resolve(__dirname, './index.html'),
});
