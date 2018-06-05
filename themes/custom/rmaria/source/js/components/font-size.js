(function ($, Drupal) {
  var self = null;
  Drupal.behaviors.fontsize = {
    config: {
      fontsize: 'normal'
    },
    attach: function (context, settings) {
      self = this;
      if ($('.region-title .fontsize').length === 0) {
        var fontsize =
          `<div id="block-fontsize" class="block block-custom block-fontsize-block">
            <a class="small" href="#">A</a>
            <a class="normal" href="#">A</a>
            <a class="big" href="#">A</a>
          </div>`;
        $('.region-title').append(fontsize);

        self.loadSize();

        $('.region-title .block-fontsize-block a.small').on('click', function() {
          self.config.fontsize = 'small';
          self.changeSize();
        });
        $('.region-title .block-fontsize-block a.normal').on('click', function() {
          self.config.fontsize = 'normal';
          self.changeSize();
        });
        $('.region-title .block-fontsize-block a.big').on('click', function() {
          self.config.fontsize = 'big';
          self.changeSize();
        });
        self.changeSize();
      }
    },
    loadSize: function () {
      if (typeof (Storage) !== 'undefined') {
        var fontsize = localStorage.getItem('fontsize');
        if (fontsize !== null) {
          self.config.fontsize = fontsize;
        }
        else {
          self.config.fontsize = 'normal';
        }
      }
      else {
        self.config.fontsize = 'normal';
      }
    },
    changeSize: function () {
      $('body').removeClass('font-size-big');
      $('body').removeClass('font-size-normal');
      $('body').removeClass('font-size-small');
      if (typeof (Storage) !== 'undefined') {
        localStorage.setItem('fontsize', self.config.fontsize);
      }
      $('body').addClass('font-size-' + self.config.fontsize);
    }
  };
}(jQuery, Drupal));
