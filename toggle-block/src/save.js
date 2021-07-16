import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes } ) {
	
	const { lightbox } = attributes;

	return (
		<div { ...useBlockProps.save() } >
			<p>{ lightbox + ' ' + __( 'class has been added', 'toggle-block' ) }</p>
		</div>
	);
}