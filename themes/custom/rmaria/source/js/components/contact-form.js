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
        center: {lat: 4.7337811, lng: -74.0473226}
      }
    },
    attach: function (context, settings) {
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
          }
          else {
            self.initMap();
          }
        }
      }
    },
    initMap: function () {
      self.map = new window.google.maps.Map(document.getElementById('contact-map'), self.config.map);
      var marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(self.config.map.center.lat, self.config.map.center.lng),
        map: self.map
      });
      self.markers.push(marker);
    }
  };
}(jQuery, Drupal));
