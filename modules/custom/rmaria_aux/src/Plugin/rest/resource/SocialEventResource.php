<?php

namespace Drupal\rmaria_aux\Plugin\rest\resource;

use Drupal\rest\Plugin\ResourceBase;
use Drupal\taxonomy\Entity\Term;
use Drupal\rest\ModifiedResourceResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

/**
 * Provides a resource to get footer navigations.
 *
 * @RestResource(
 *   id = "social_event_rest_resource",
 *   label = @Translation("Social Event rest resource"),
 *   uri_paths = {
 *     "canonical" = "/api/social-event"
 *   }
 * )
 */
class SocialEventResource extends ResourceBase {

  /**
   * Responds to entity GET requests.
   *
   * @return \Drupal\rest\ResourceResponse
   *   Return response array.
   */
  public function get() {

    $config = \Drupal::config('rmaria_aux.settings');
    if (!empty($config->get('html')) && !empty($config->get('active')) && boolval($config->get('active')) === TRUE) {
      $response = [
        'html' => $config->get('html')
      ];
      return new ModifiedResourceResponse($response);
    }


    throw new NotFoundHttpException($this->t('Footer content is not available and error code is 404.'));
  }

}
