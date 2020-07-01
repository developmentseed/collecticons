import _template from 'lodash.template';
import Clipboard from 'clipboard';

require('es6-promise').polyfill();
require('isomorphic-fetch');
const collecticonsLib = require('collecticons-lib');

const template = _template(document.querySelector('#page-template').innerHTML);

fetch('catalog.json')
  .then(data => data.json())
  .then(data => {
    data.version = collecticonsLib.version;
    document.querySelector('#site-canvas').innerHTML = template(data);

    // Init clipboard.
    const iconLinks = document.querySelectorAll('a[data-hook="icon-link"]');
    const clipboard = new Clipboard(iconLinks, {
      text: trigger => trigger.getAttribute('data-name')
    });

    clipboard.on('success', (e) => {
      e.trigger.setAttribute('data-title', 'Copied!');
      setTimeout(() => {
        e.trigger.setAttribute('data-title', e.text);
      }, 2000);
    });
  });
