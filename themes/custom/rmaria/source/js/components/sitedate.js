(function ($, Drupal) {
  // var self = null;
  Drupal.behaviors.sitedate = {
    attach: function (context, settings) {
      // self = this;
      if ($('.region-title .clock').length === 0) {
        var date = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
        var str = date.toLocaleDateString('es-CO', options);
        var clock =
          `<div id="block-clock" class="block block-custom block-clock-block">
            ${str}
          </div>`;
        $('.region-title').append(clock);
      }
    }
  };
}(jQuery, Drupal));
