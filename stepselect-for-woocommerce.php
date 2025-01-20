<?php
/*
Plugin Name: StepSelect for WooCommerce
Plugin URI: https://wordpress.org/plugins/stepselect-for-woocommerce
Description: A WooCommerce plugin that shows the attribute options of Variable Products sequentially with a progress indicator, ensuring users select options in order.
Author: Senff
Author URI: http://www.senff.com
Version: 1.0
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html
Text Domain: stepselect-for-woocommerce
*/

defined('ABSPATH') or die('INSERT COIN');

// --- ADDING THE JS AND CSS ----------------------------------------------------------

function stepselect_scripts() {

	wp_register_script('stepselectJS', plugins_url('/assets/js/stepselect-for-woocommerce.js', __FILE__), array( 'jquery' ), '1.0', array( 'in_footer' => true ));
	wp_enqueue_script('stepselectJS');

	wp_register_style('stepselectCSS', plugins_url('/assets/css/stepselect-for-woocommerce.css', __FILE__),'', '1.0' );
	wp_enqueue_style('stepselectCSS');		
}


// === HOOKS AND ACTIONS AND FILTERS AND SUCH ==========================================================

add_action('wp_enqueue_scripts', 'stepselect_scripts');

