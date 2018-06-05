(function ($, Drupal) {
  Drupal.behaviors.social_event_block = {
    attach: function (context, settings) {
      if (drupalSettings !== undefined && drupalSettings.rmaria_aux !== undefined && drupalSettings.rmaria_aux.loader_uuid !== undefined) {
        var loader_uuid = drupalSettings.rmaria_aux.loader_uuid;
        var baseUrl = drupalSettings.path.baseUrl;

        if (typeof (Storage) !== 'undefined') {
          $region = $('div.region-aux');
          
          showPreloader = sessionStorage.getItem('loader_uuid');

          if (showPreloader == null || showPreloader !== loader_uuid) {
            try {
              sessionStorage.setItem('loader_uuid', loader_uuid);
              $.ajax({
                url: baseUrl + 'api/social-event?_format=json',
                success: function (result) {
                  $('div.region-aux div.social-event-block-container').html(result.html);
                }
              });
              
              $button = $('<a class="btn btn-close" href="#"><span>Cerrar</span></a>');
              $region.addClass('overlay');
              $region.append($button);
              $button.on('click', function(event) {
                event.preventDefault();
                $region.remove();
              })
            }
            catch (error) {
              $region.remove();
              if (!localStorage) {
                $region.remove();
              }
            }
          }
        }
      }
    }
  };
})(jQuery, Drupal);