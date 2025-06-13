#!/usr/bin/env node

/**
 * @license Copyright (c) 2020-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* eslint-env node */

import { createRequire } from 'module';
import upath from 'upath';
import chalk from 'chalk';
import { build } from '@ckeditor/ckeditor5-dev-build-tools';

function dist(path) {
	return upath.join('build', path);
}

(
	async () => {
		console.log(chalk.cyan('1/1: Generating browser build...'));

		await build({
			input: 'src/ckeditor.js',
			output: dist('./ckeditor.js'),
			sourceMap: true,
			minify: true,
			browser: true,
			name: 'ClassicEditor',
		});
	}
)();
