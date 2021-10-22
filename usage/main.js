import { defineCustomElements } from './node_modules/things/loader/index.js';

defineCustomElements(window);

defineCustomElements(window, {
  transformTagName: (tagName) => `prefix-${tagName}`,
});

defineCustomElements(window, {
  transformTagName: (tagName) => `${tagName}-suffix`,
});
