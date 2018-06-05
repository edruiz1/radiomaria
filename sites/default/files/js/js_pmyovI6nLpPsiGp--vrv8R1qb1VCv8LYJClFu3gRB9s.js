'use strict';

// -----------------------------------
// Load Specific Utility / Helper Components
// -----------------------------------
// require utils/_constants.js
// require utils/_helpers.js
// require utils/browser-class.js
// require utils/picturefill-bg.js
// require utils/fullpage.js
// require utils/cta-to-modal-video.js
// require utils/modal-video.js
// require utils/modal-shareit.js
// require libraries/timeline/owl-carousel.js


// -----------------------------------
// Load ALL MSL Custom Components
// -----------------------------------
(function ($, Drupal) {

  var self = null;
  Drupal.behaviors.contactmap = {
    map: null,
    bounds: null,
    markers: [],
    icon: null,
    regionId: null,
    locationId: null,
    config: {
      map: {
        zoom: 16,
        maxZoom: 16,
        backgroundColor: '#FFFFFF',
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: true,
        center: { lat: 4.7337811, lng: -74.0473226 }
      }
    },
    attach: function attach(context, settings) {
      self = this;

      if ($('form.webform-submission-form').length === 1) {
        if ($('#edit-container-left').length === 1 && $('#edit-actions').length === 1) {
          var action = $('#edit-actions').detach();
          $('#edit-container-left').append(action);
        }
      }

      if ($('#contact-map').length >= 1) {
        var apikey = 'AIzaSyBJXT85s3pwH3dVyoQRQ196WT4_S1vy6dw';
        if (apikey) {
          if (typeof window.google === 'undefined') {
            var source = '//maps.googleapis.com/maps/api/js?key=APIKEY&&callback=CALLBACK';
            // source = source.replace('APIKEY', drupalSettings.howtoget.google_maps.api_key);
            source = source.replace('APIKEY', apikey);
            source = source.replace('CALLBACK', 'Drupal.behaviors.contactmap.initMap');
            $.getScript(source, function () {});
          } else {
            self.initMap();
          }
        }
      }
    },
    initMap: function initMap() {
      self.map = new window.google.maps.Map(document.getElementById('contact-map'), self.config.map);
      var marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(self.config.map.center.lat, self.config.map.center.lng),
        map: self.map
      });
      self.markers.push(marker);
    }
  };
})(jQuery, Drupal);

(function ($, Drupal) {
  var self = null;
  Drupal.behaviors.fontsize = {
    config: {
      fontsize: 'normal'
    },
    attach: function attach(context, settings) {
      self = this;
      if ($('.region-title .fontsize').length === 0) {
        var fontsize = '<div id="block-fontsize" class="block block-custom block-fontsize-block">\n            <a class="small" href="#">A</a>\n            <a class="normal" href="#">A</a>\n            <a class="big" href="#">A</a>\n          </div>';
        $('.region-title').append(fontsize);

        self.loadSize();

        $('.region-title .block-fontsize-block a.small').on('click', function () {
          self.config.fontsize = 'small';
          self.changeSize();
        });
        $('.region-title .block-fontsize-block a.normal').on('click', function () {
          self.config.fontsize = 'normal';
          self.changeSize();
        });
        $('.region-title .block-fontsize-block a.big').on('click', function () {
          self.config.fontsize = 'big';
          self.changeSize();
        });
        self.changeSize();
      }
    },
    loadSize: function loadSize() {
      if (typeof Storage !== 'undefined') {
        var fontsize = localStorage.getItem('fontsize');
        if (fontsize !== null) {
          self.config.fontsize = fontsize;
        } else {
          self.config.fontsize = 'normal';
        }
      } else {
        self.config.fontsize = 'normal';
      }
    },
    changeSize: function changeSize() {
      $('body').removeClass('font-size-big');
      $('body').removeClass('font-size-normal');
      $('body').removeClass('font-size-small');
      if (typeof Storage !== 'undefined') {
        localStorage.setItem('fontsize', self.config.fontsize);
      }
      $('body').addClass('font-size-' + self.config.fontsize);
    }
  };
})(jQuery, Drupal);

(function ($, Drupal) {
  var self = null;
  Drupal.behaviors.mainmenu = {
    config: {},
    attach: function attach(context, settings) {
      self = this;
      if ($('#block-rmaria-main-menu').length === 1) {
        if ($('#block-rmaria-main-menu .burger').length === 0) {
          var burger = '<div class="burger-container">\n              <div class="burger">\n                <div class="bar1"></div>\n                <div class="bar2"></div>\n                <div class="bar3"></div>\n              </div>\n            </div>';
          $('#block-rmaria-main-menu').append(burger);
          $('.burger').click(self.clickHandler);
        }
      }
    },
    clickHandler: function clickHandler() {
      // console.log('CLICK');
      $('.burger, #block-rmaria-main-menu ul.menu').toggleClass('change');
    }
  };
})(jQuery, Drupal);

(function ($, Drupal) {
  var self = null;
  Drupal.behaviors.radioshows = {
    attach: function attach(context, settings) {
      self = this;
      if ($('.view-id-radio_shows').length >= 1) {
        $('.view-id-radio_shows div.labels button').on('click', self.clickHandler);
      }
    },
    clickHandler: function clickHandler() {
      var section = $(this).attr('for');
      $('.view-id-radio_shows div.labels button').removeClass('selected');
      $('.view-id-radio_shows div.sections section').removeClass('selected');
      $(this).addClass('selected');
      $('.view-id-radio_shows div.sections section#' + section).addClass('selected');
    }
  };
})(jQuery, Drupal);

(function ($, Drupal) {
  var self = null;
  Drupal.behaviors.share = {
    // Cached DOM elements
    domEl: {
      $container: null
    },
    url: '',
    title: '',
    attach: function attach(context, settings) {
      self = this;
      self.url = $('meta[property="og:url"]').attr('content');
      self.title = $('meta[name=title]').attr('content');
      self.create();
    },
    create: function create() {
      $('body .page-content > .container').append('<div class="share-buttons"></div>');
      self.domEl.container = $('body .page-content > .container .share-buttons');

      var networksIds = [{ name: 'Me gusta', icon: 'facebook' }, { name: 'Twittear', icon: 'twitter' }, { name: '+1', icon: 'google'
        // {name: 'LinkedIn', icon: 'linkedin'}
      }];
      $.each(networksIds, function (index) {
        var item = networksIds[index];
        self.addButton(item);
      });
    },
    addButton: function addButton(item) {
      var button = '<a href="#" class="share-item share-' + item.icon + '" data-item="' + item.icon + '"><i class="fa fa-' + item.icon + '" aria-hidden="true"></i>' + item.name + '</a>';
      $(self.domEl.container).append(button);
      $('.share-' + item.icon).on('click', function (event) {
        event.preventDefault();
        self.share($(this).data('item'));
      });
    },
    share: function share(network) {
      var encodedURL = encodeURIComponent(self.url);
      var encodedTitle = encodeURIComponent(self.title);
      var fullURLString = '';
      switch (network) {
        case 'facebook':
          // https://www.facebook.com/sharer.php?u={url}
          fullURLString = 'https://www.facebook.com/sharer.php?u=' + encodedURL;
          break;
        case 'twitter':
          // https://twitter.com/intent/tweet?url={url}&text={title}&via={via}&hashtags={hashtags}
          fullURLString = 'https://twitter.com/intent/tweet?url=' + encodedURL + '&title=' + encodedTitle;
          break;
        case 'google':
          // https://www.linkedin.com/shareArticle?url={url}&title={title}
          fullURLString = 'https://plus.google.com/share?url=' + encodedURL + '&title=' + encodedTitle;
          break;
        case 'linkedin':
          // https://www.linkedin.com/shareArticle?url={url}&title={title}
          fullURLString = 'https://www.linkedin.com/shareArticle?url=' + encodedURL + '&title=' + encodedTitle;
          break;
      }
      if (fullURLString !== '') {
        window.open(fullURLString, 'Share It');
      }
    }
  };
})(jQuery, Drupal);

(function ($, Drupal) {
  // var self = null;
  Drupal.behaviors.sitedate = {
    attach: function attach(context, settings) {
      // self = this;
      if ($('.region-title .clock').length === 0) {
        var date = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
        var str = date.toLocaleDateString('es-CO', options);
        var clock = '<div id="block-clock" class="block block-custom block-clock-block">\n            ' + str + '\n          </div>';
        $('.region-title').append(clock);
      }
    }
  };
})(jQuery, Drupal);

;
