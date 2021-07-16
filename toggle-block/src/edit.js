import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelRow, PanelBody, ToggleControl } from '@wordpress/components';

import metadata from '../block.json';

const { name } = metadata;
export { metadata, name };

import './editor.scss';

export default function edit( { attributes, setAttributes } ) {

	const { lightbox } = attributes;

	/**
	 * New constant to add extra props.
	 * The custom class is dependent on the switch toggle.
	 * data-id attribute is hard coded in the block.
	 */ 
	const blockProps = useBlockProps( {
		className: lightbox ? 'custom-class' : '',
		'data-id': 'special-h1-id'
	  } );

	return (
		<div>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<PanelRow>
							<ToggleControl
								label="Add Custom Style Class"
								help={
									lightbox
										? 'Has style class added.'
										: 'Style class removed.'
								}
								checked={ lightbox }
								onChange={ ( value ) => {
									setAttributes( { lightbox: value } )
								} }
							/>
							</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div { ...blockProps } >
				<p>
					{ lightbox + ' ' + __( 'class has been added', 'toggle-block' ) }
				</p>
			</div>
		</div>
	);
}
