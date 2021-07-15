// Retrieves the translation of text.
import { __ } from '@wordpress/i18n';
import { Panel, PanelRow, PanelBody, RangeControl } from '@wordpress/components';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import './editor.scss';

export default function edit({ attributes, setAttributes } ) {

	const { columns } = attributes;

	return (
		<div>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<PanelRow>
							<RangeControl
								label={ __( 'Columns' ) }
								value={ columns }
								onChange={ ( value ) =>
									setAttributes( { columns: value } )
								}
								min={ 1 }
								max={ 4 }
								required
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div { ...useBlockProps({
				className: `columns-${ columns }`,
			}) }>
				<p>There are { columns } created columns.</p>
			</div>
		</div>
	);
}
