/**
 * @file
 * JavaScript behaviors for jQuery Word and Counter Counter integration.
 */

(function ($, Drupal) {

  'use strict';

  // @see http://qwertypants.github.io/jQuery-Word-and-Character-Counter-Plugin/
  Drupal.webform = Drupal.webform || {};
  Drupal.webform.counter = Drupal.webform.counter || {};
  Drupal.webform.counter.options = Drupal.webform.counter.options || {};

  /**
   * Initialize text field and textarea word and character counter.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformCounter = {
    attach: function (context) {
      if (!$.fn.counter) {
        return;
      }

      $(context).find('.js-webform-counter').once('webform-counter').each(function () {
        var options = {
          goal: $(this).attr('data-counter-limit'),
          msg: $(this).attr('data-counter-message')
        };

        // Only word type can be defined, otherwise the counter defaults to
        // character counting.
        if ($(this).attr('data-counter-type') === 'word') {
          options.type = 'word';
        }

        options = $.extend(options, Drupal.webform.counter.options);

        // Set the target to a div that is appended to end of the input's parent container.
        options.target = $('<div class="webform-counter-message"></div>');
        $(this).parent().append(options.target);

        $(this).counter(options);
      });

    }
  };

})(jQuery, Drupal);
;
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
})(jQuery, Drupal);;
