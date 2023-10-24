import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
	{
		input: 'src/index.ts',
		output: {
			file: 'dist/package-name.esm.mjs',
			format: 'es',
		},
		plugins: [typescript()],
	},
	{
		input: 'dist/dts/index.d.ts',
		output: {
			file: 'dist/package-name.esm.d.ts',
			format: 'es',
		},
		plugins: [dts()],
	},
];