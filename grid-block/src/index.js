/**
 * Registers a new block.
 */
import { registerBlockType } from '@wordpress/blocks';

// TODO: WHY?? I got this from the blocks repo.
import metadata from './../block.json';

const { name } = metadata;
export { metadata, name };

import './style.scss';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 */
registerBlockType( 'create-block/grid-block', {
	edit,
	save,
	// Adds extra attributes data.
	getEditWrapperProps( attributes ) {
		
	},
} );
