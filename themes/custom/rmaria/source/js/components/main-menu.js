(function ($, Drupal) {
  var self = null;
  Drupal.behaviors.mainmenu = {
    config: {},
    attach: function (context, settings) {
      self = this;
      if ($('#block-rmaria-main-menu').length === 1) {
        if ($('#block-rmaria-main-menu .burger').length === 0) {
          var burger =
            `<div class="burger-container">
              <div class="burger">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
              </div>
            </div>`;
          $('#block-rmaria-main-menu').append(burger);
          $('.burger').click(self.clickHandler);
        }
      }
    },
    clickHandler: function () {
      // console.log('CLICK');
      $('.burger, #block-rmaria-main-menu ul.menu').toggleClass('change');
    }
  };
}(jQuery, Drupal));
