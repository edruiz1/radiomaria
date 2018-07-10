(function ($, Drupal) {
  var self = null;
  Drupal.behaviors.share = {
    // Cached DOM elements
    domEl: {
      $container: null
    },
    url: '',
    title: '',
    attach: function (context, settings) {
      self = this;
      self.url = $('meta[property="og:url"]').attr('content');
      self.title = $('meta[name=title]').attr('content');
      self.create();
    },
    create: function () {
      $('body .page-content > .container').append(`<div class="share-buttons"></div>`);
      self.domEl.container = $('body .page-content > .container .share-buttons');

      var networksIds = [
        {name: 'Compartir', icon: 'facebook'},
        {name: 'Twittear', icon: 'twitter'},
        {name: '+1', icon: 'google'}
        // {name: 'LinkedIn', icon: 'linkedin'}
      ];
      $.each(networksIds, function (index) {
        var item = networksIds[index];
        self.addButton(item);
      });
    },
    addButton: function (item) {
      var button = `<a href="#" class="share-item share-${item.icon}" data-item="${item.icon}"><i class="fa fa-${item.icon}" aria-hidden="true"></i>${item.name}</a>`;
      $(self.domEl.container).append(button);
      $('.share-' + item.icon).on('click', function (event) {
        event.preventDefault();
        self.share($(this).data('item'));
      });
    },
    share: function (network) {
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
}(jQuery, Drupal));
