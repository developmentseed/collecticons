var $ = require('jquery');
var _ = require('lodash');

$(function () {
  var template = _.template($('#showcase-section').html());
  var $container = $('[data-hook="showcase-holder"]');
  // Render icons from catalog.
  $.get('catalog.json')
    .success(function (res) {
      $container.prepend(template(res));
      // Prevent clicks on icons.
      $('[data-hook="icon-link"]').click(function (e) {e.preventDefault();});
    });
});
