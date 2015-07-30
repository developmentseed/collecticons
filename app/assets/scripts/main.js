var $ = require('jquery');
var _ = require('lodash');
var version = require('../../../collecticons-lib/bower.json');

$(function () {
  var template = _.template($('#page-template').html());
  var $container = $('#site-canvas');
  // Render icons from catalog.
  $.get('catalog.json')
    .success(function (res) {
      res.version = version.version;
      $container.prepend(template(res));
      // Prevent clicks on icons.
      $('[data-hook="icon-link"]').click(function (e) {e.preventDefault();});
    });
});
