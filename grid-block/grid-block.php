<?php
/**
 * Plugin Name:       Grid Block
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       grid-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 */
function create_block_grid_block_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'create_block_grid_block_block_init' );
