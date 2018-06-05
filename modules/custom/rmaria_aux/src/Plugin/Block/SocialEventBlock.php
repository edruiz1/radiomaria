<?php

namespace Drupal\rmaria_aux\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Hello' Block.
 *
 * @Block(
 *   id = "social_event_block",
 *   admin_label = @Translation("Social Event block"),
 *   category = @Translation("Custom"),
 * )
 */
class SocialEventBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {

    $markup = '';

    $config = \Drupal::config('rmaria_aux.settings');

    if (!empty($config->get('html')) && !empty($config->get('active')) && boolval($config->get('active')) === TRUE) {
      $markup = '<div class="social-event-block-container"></div>';
    }

    // return [
    //   '#type' => 'inline_template',
    //   '#template' => '{{ somecontent }}',
    //   '#context' => [
    //     'somecontent' => $markup
    //   ]
    // ];

    return [
      '#markup' => $markup
    ];
  }

}