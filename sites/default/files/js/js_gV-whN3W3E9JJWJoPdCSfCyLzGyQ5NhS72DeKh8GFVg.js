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
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css";t.id="matchmediajs-test";i.parentNode.insertBefore(t,i);n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(t.styleSheet){t.styleSheet.cssText=i}else{t.textContent=i}return n.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
;
!function(a,b,c){"use strict";function d(d,e){function k(){h.randomize&&!f.hasClass("slick-initiliazed")&&n(),f.on("setPosition.sl",function(a,b){o(b)}),a(".media--loading",f).closest(".slide__content").addClass("is-loading"),"blazy"===h.lazyLoad&&b.blazy&&f.on("beforeChange.sl",function(){var c=a(".b-lazy:not(.b-loaded)",f);c.length&&b.blazy.init.load(c)})}function l(){var c=(f.slick("getSlick"),f.find(".media--player").length);f.parent().on("click.sl",".slick-down",function(b){b.preventDefault();var c=a(this);a("html, body").stop().animate({scrollTop:a(c.data("target")).offset().top-(c.data("offset")||0)},800,h.easing||"swing")}),h.mouseWheel&&f.on("mousewheel.sl",function(a,b){return a.preventDefault(),f.slick(b<0?"slickNext":"slickPrev")}),f.on("lazyLoaded lazyLoadError",function(a,b,c){m(c)}),c&&(f.on("afterChange.sl",p),f.on("click.sl",".media__icon--close",p),f.on("click.sl",".media__icon--play",q))}function m(b){var c=a(b),d=c.closest(".media--background"),e=c.closest(".slide")||c.closest(".unslick");c.parentsUntil(e).removeClass(function(a,b){return(b.match(/(\S+)loading/g)||[]).join(" ")}),d.length&&(d.css("background-image","url("+c.attr("src")+")"),d.find("> img").remove(),d.removeAttr("data-lazy"))}function n(){f.children().sort(function(){return.5-Math.random()}).each(function(){f.append(this)})}function o(a){var b=a.slideCount<=h.slidesToShow,c=b||h.arrows===!1;if(f.attr("id")===a.$slider.attr("id"))return h.centerPadding&&"0"!==h.centerPadding||a.$list.css("padding",""),b&&a.$slideTrack.width()<=a.$slider.width()&&a.$slideTrack.css({left:"",transform:""}),g[c?"addClass":"removeClass"]("visually-hidden")}function p(){f.removeClass("is-paused"),f.find(".is-playing").length&&f.find(".is-playing").removeClass("is-playing").find(".media__icon--close").click()}function q(){f.addClass("is-paused").slick("slickPause")}function r(c){return{slide:c.slide,lazyLoad:c.lazyLoad,dotsClass:c.dotsClass,rtl:c.rtl,appendDots:".slick__arrow"===c.appendDots?g:c.appendDots||a(f),prevArrow:a(".slick-prev",g),nextArrow:a(".slick-next",g),appendArrows:g,customPaging:function(a,d){var e=a.$slides.eq(d).find("[data-thumb]")||null,f='<img alt="'+b.t(e.attr("alt"))+'" src="'+e.data("thumb")+'">',g=e.length&&c.dotsClass.indexOf("thumbnail")>0?'<div class="slick-dots__thumbnail">'+f+"</div>":"";return a.defaults.customPaging(a,d).add(g)}}}var j,f=a("> .slick__slider",e).length?a("> .slick__slider",e):a(e),g=a("> .slick__arrow",e),h=f.data("slick")?a.extend({},c.slick,f.data("slick")):c.slick,i=!("array"!==a.type(h.responsive)||!h.responsive.length)&&h.responsive;if(i)for(j in i)i.hasOwnProperty(j)&&"unslick"!==i[j].settings&&(i[j].settings=a.extend({},c.slick,r(h),i[j].settings));f.data("slick",h),h=f.data("slick"),k(),f.slick(r(h)),l(),f.hasClass("unslick")&&f.slick("unslick"),a(e).addClass("slick--initialized")}b.behaviors.slick={attach:function(b){a(".slick",b).once("slick").each(d)}}}(jQuery,Drupal,drupalSettings);
;
