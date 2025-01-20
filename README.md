# StepSelect for WooCommerce
* Contributors: senff
* Donate link: http://donate.senff.com
* Tags: variable product, attributes, progress, steps, sequentially
* Plugin URI: https://wordpress.org/plugins/stepselect-for-woocommerce
* Requires at least: 6.0
* Tested up to: 6.7
* Stable tag: 1.0
* License: GPLv3
* License URI: https://www.gnu.org/licenses/gpl-3.0.html

A WooCommerce plugin that displays variable product options as a step-by-step process with a progress indicator, ensuring sequential selection.

## Description

### Summary

With StepSelect for WooCommerce, selecting the options of your Variable Products will become more of a step-by-step process. It will hide/obscure every select box until the previous option has been selected, and it will show a progress bar which will indicate how many options the customer has left to select before they can add it to their cart.

## Installation 

1. Upload the "stepselect-for-woocommerce" directory to your "wp-content/plugins" directory.
2. In your WordPress admin, go to PLUGINS and activate "StepSelect for WooCommerce"
3. Done!

## Frequently Asked Questions

### What does it do exactly?
With the plugin enabled, your Variable Products will not show all selectable options right away. Instead, it will show the first option only, then when that's selected it will show the second option, then when that's selected it will show the third option, and so on.  Additionally, it will show a progress bar on the product page, that shows how many options have been selected and how many are left.

### Wait, explain!
Let's say you have a Variable Product with 3 attributes: Color, Size and Fabric.  Normally, you will see all three options shown on the page and people can select Fabric first, then Color, then Size.  Or in whichever order they want! With StepSelect for WooCommerce, it will only show the Color option first (Size and Fabric are hidden).  Only when someone selects a Color, the Size option will become visible. Then when they select a Size, the Fabric option will appear.

### What about default selections when I've selected a Default Form Value in a product's setting?
If you have default selections set, then that will be considered a selection made. For example, you have 3 attributes Color, Size and Fabric, and you've set a default option for Size.  At first, it will only show Color. Then once you select a color, the Size will appear.  Though, because it already has a default value, the Fabric option will also appear right away.

### Instead of fully hiding the select options that haven't been chosen yet, is it possible to show them but obscured (for example, less opacity)?
You can do that by editing the file /assets/stepselect-for-woocommerce.js. 
- If you want select boxes to be visible until the previous option has been chosen, comment line 24 only.
- If you want select boxes to be fully hidden until the previous option has been chosen, comment line 25 only (default setting).
This will be an option to change in WP-admin in the next version.

### When I set an option to it's default setting, it also resets the setting for all next options. Can this be changed?
You can change that by editing line 54 in the file /assets/stepselect-for-woocommerce.js. 
- Mode 0: everything goes to it's standard, non-selected selection
- Mode 1: if a field has a default option, it goes to that selection
- Mode 2: does not change anything (default setting)
This will be an option to change in WP-admin in the next version.

### It doesn't do anything for me.
It's possible that your theme or another plugin is part of the issue. This plugin will only work with the standard WooCommerce code is used, so if your theme (or another plugin) makes any changes to that, it might not work. To check this, check if your theme has a file called wp-content/themes/your-theme/woocommerce/single-product/add-to-cart/variable.php . If it does, then that's an indicator that that file overrides WooCommerce's default selection process, and would probably be why the plugin is not working.

### I'll need more help please!
If you're not sure how to use this, or you're running into any issues with it, post a message on the plugin's [WordPress.org support forum](https://wordpress.org/support/plugin/stepselect-for-woocommerce).

### I've noticed that something doesn't work right, or I have an idea for improvement. How can I report this?
Plugin Status Snapshotter's [community support forum](https://wordpress.org/support/plugin/stepselect-for-woocommerce) would a good place, though if you want to add all sorts of -technical- details, it's best to report it on the plugin's [Github page](https://github.com/senff/WordPress-StepSelect-for-Woocommerce/issues). This is also where I consider code contributions.

### My question isn't listed here?
Please go to the plugin's [community support forum](https://wordpress.org/support/plugin/stepselect-for-woocommerce) and post a message. Note that support is provided on a voluntary basis and that it can be difficult to troubleshoot, and may require access to your admin area. Needless to say, NEVER include any passwords of your site on a public forum!


## Screenshots

1. Example on Storefront
2. Example on TwentyTwentyFive

## Changelog

### 1.0 
* Initial release.


## Upgrade Notice 

### 1.0 
Initial release of the plugin.
