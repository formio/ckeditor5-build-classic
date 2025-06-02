/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import {
	ClassicEditor as ClassicEditorBase,
	Plugin,
	Essentials,
	CKFinderUploadAdapter as UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	ImageInsert,
	Base64UploadAdapter,
	Indent,
	IndentBlock,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Alignment,
	Font,
	FontFamily,
	CloudServices,
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

export default class ClassicEditor extends ClassicEditorBase {
}

// Create the NumRows plugin.
/* eslint-disable space-in-parens, template-curly-spacing */
class NumRowsPlugin extends Plugin {
	init() {
		const numRows = parseInt(this.editor.config.get('rows'), 10);
		if (numRows && typeof numRows === 'number' && isFinite(numRows)) {
			const editorHeight = (
				numRows * 31
			) + 14;
			this.editor.ui.view.editable.extendTemplate({
				attributes: {
					style: {
						minHeight: `${editorHeight}px`,
					},
				},
			});
		}
	}
}

/* eslint-enable space-in-parens, template-curly-spacing */

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Indent,
	IndentBlock,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	ImageInsert,
	Base64UploadAdapter,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Alignment,
	Font,
	FontFamily,
	NumRowsPlugin,
	CloudServices,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	licenseKey: 'GPL',
	toolbar: {
		items: [
			'heading',
			'fontFamily',
			'fontSize',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'alignment:left',
			'alignment:right',
			'alignment:center',
			'undo',
			'redo',
		],
	},
	image: {
		toolbar: [
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'resizeImage'
		],
		upload: {
			types: ['jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff'],
		},
	},
	table: {
		contentToolbar: [
			'tableColumn', 'tableRow', 'mergeTableCells',
		],
	}, // This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en',
};
