import _template from 'lodash.template';

require('es6-promise').polyfill();
require('isomorphic-fetch');
const collecticonsLib = require('collecticons-lib');

const template = _template(document.querySelector('#page-template').innerHTML);

fetch('catalog.json')
  .then(data => data.json())
  .then(data => {
    data.version = collecticonsLib.version;
    document.querySelector('#site-canvas').innerHTML = template(data);
  });
