<?php
/**
 * Plugin Name: Go to Classic Editor 
 * Description: A plugin that adds a button in Gutenberg to switch to Classic Editor and back.
 * Version: 1.0
 * Author: Thirdy
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

// Enqueue script to add the button in Gutenberg.
function gcs_enqueue_block_editor_assets() {
    wp_enqueue_script(
        'gcs-switch-editor', // Handle for the script
        plugin_dir_url(__FILE__) . 'js/switch-editor.js', // URL for the JS file
        array('wp-blocks', 'wp-element', 'wp-components', 'wp-editor'), // Dependencies
        null,
        true
    );
}
add_action('enqueue_block_editor_assets', 'gcs_enqueue_block_editor_assets');
