import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes } ) {
	
	const { columns } = attributes;

	return (
		<div { ...useBlockProps.save({
			className: `columns-${ columns }`,
		}) }>
			<p>{ __( 'Grid Block – hello from the saved content!', 'grid-block' ) }
			<span>{ columns }</span></p>
		</div>
	);
}
