var $ = require('jquery');
var _ = require('lodash');

$(function () {
  var template = _.template($('#page-template').html());
  var $container = $('#site-canvas');
  // Render icons from catalog.
  $.get('catalog.json')
    .success(function (res) {
      $container.prepend(template(res));
      // Prevent clicks on icons.
      $('[data-hook="icon-link"]').click(function (e) {e.preventDefault();});
    });
});
