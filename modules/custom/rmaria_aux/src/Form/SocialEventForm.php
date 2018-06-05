<?php

namespace Drupal\rmaria_aux\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Component\Utility\UrlHelper;
use Drupal\Core\Cache\Cache;
use Drupal\Component\Utility\Random;

/**
 * Defines a form that configures forms module settings.
 */
class SocialEventForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'rmaria_aux_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'rmaria_aux.settings',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    // Get preview app config values.
    $config = $this->config('rmaria_aux.settings');

    $form['html'] = [
      '#type' => 'textarea',
      '#title' => $this->t('HTML'),
      '#default_value' => !empty($config->get('html')) ? $config->get('html') : '',
      '#required' => TRUE,
      '#description' => $this->t('Use this field to add HTML related with the social event information'),
    ];

    $form['active'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Is active?'),
      '#default_value' => !empty($config->get('active')) ? $config->get('active') : '',
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    // if (strlen($form_state->getValue('html')) < 10) {
    //   $form_state->setErrorByName('html', $this->t('Mobile number is too short.'));
    // }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $values = $form_state->getValues();

    $this->config('rmaria_aux.settings')->set('html', $values['html'])->save();
    $this->config('rmaria_aux.settings')->set('active', $values['active'])->save();
    $this->config('rmaria_aux.settings')->set('loader_uuid', \Drupal::service('uuid')->generate())->save();

    Cache::invalidateTags(['config:block.block.socialeventblock']);

  }

}
