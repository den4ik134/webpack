import { RuleSetRule } from 'webpack';
import { BuildOptions } from '../types/types';
import { removeDataTestIdBabelPlugintsts } from './removeDataTestIdBabelPlugin';

export function buildBabelLoader(options: BuildOptions): RuleSetRule {
	const isDev = options.mode === 'development';
	const isProd = options.mode === 'production';

	const plugins = [];

	if (isProd) {
		plugins.push([
			removeDataTestIdBabelPlugintsts(),
			{
				props: ['data-testid'],
			},
		]);
	}

	return {
		test: /\.tsx?$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [
					'@babel/preset-env',
					'@babel/preset-typescript',
					[
						'@babel/preset-react',
						{
							runtime: isDev ? 'automatic' : 'classic',
						},
					],
				],
				plugins: plugins.length ? plugins : undefined,
			},
		},
	};
}
