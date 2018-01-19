import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
	entry: 'src/Uil.js',
	indent: '\t',
	// sourceMap: true,
	targets: [
		{
			format: 'umd',
			name: 'UIL',
			dest: 'build/uil.js'
		},
		{
			format: 'es',
			dest: 'build/uil.module.js'
		}
	],
	plugins: [
		serve( './' ),
		livereload()
	]
};
