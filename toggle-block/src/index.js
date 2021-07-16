import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import edit from './edit';
import save from './save';

registerBlockType( 'create-block/toggle-block', {
	edit,
	save,
} );
