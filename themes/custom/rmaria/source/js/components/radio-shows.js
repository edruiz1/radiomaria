(function ($, Drupal) {
  var self = null;
  Drupal.behaviors.radioshows = {
    attach: function (context, settings) {
      self = this;
      if ($('.view-id-radio_shows').length >= 1) {
        $('.view-id-radio_shows div.labels button').on('click', self.clickHandler);
      }
    },
    clickHandler: function () {
      var section = $(this).attr('for');
      $('.view-id-radio_shows div.labels button').removeClass('selected');
      $('.view-id-radio_shows div.sections section').removeClass('selected');
      $(this).addClass('selected');
      $('.view-id-radio_shows div.sections section#' + section).addClass('selected');
    }
  };
}(jQuery, Drupal));
