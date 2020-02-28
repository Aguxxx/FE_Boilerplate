var path = require('path');
var webpack = require('webpack');

/* FOR VUE LOADER SINCE VERSION 15, IT'S NECESSARY TO USE THIS PLUGIN
*/
const VueLoaderPlugin = require('vue-loader/lib/plugin')

var proxy = 'localhost:2344';

module.exports = {
	optimization: {
		minimize: false,
	},
	entry: {
		ADMIN: './dev/AdminStart.ts',
	},
	output: {
		path: path.resolve(__dirname, './dist/'),
		publicPath: '/dist/',
		filename: '[name].js',
		libraryTarget: 'this',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						// Since sass-loader (weirdly) has SCSS as its default parse mode, we map
						// the "scss" and "sass" values for the lang attribute to the right configs here.
						// other preprocessors should work out of the box, no loader config like this necessary.
						scss: 'vue-style-loader!css-loader!sass-loader',
						sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
					}
					// other vue-loader options go here
				}
			},
			// {
			//   test: /\.js$/,
			//   loader: 'babel-loader',
			//   exclude: /node_modules/
			// },
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/],
				}
			},

			{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
		]
	},
	resolve: {
		extensions: ['.ts', '.js', '.vue', '.json'],
		alias: {
			vue$: 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		// historyApiFallback: true,
		// noInfo: true,
		overlay: true,
		proxy: [{
			context: ['/specdev/**', '/commonassets/**', '/jpgx/**'
			, '/images/**'],
			target: 'http://localhost:2344',
			changeOrigin: true,
			secure: false
		}]
	},
	performance: {
		hints: false
	},
	externals: [
		{
			'vue': 'Vue',
			'vuex': 'Vuex',
			'vuetify': 'Vuetify',
			'axios': 'axios',
			'vue-router': 'VueRouter',
		},
	],
	plugins: [
		// make sure to include the plugin for the magic
		new VueLoaderPlugin(),

		// enable HMR globally
		// new webpack.HotModuleReplacementPlugin(),

		// // prints more readable module names in the browser console on HMR updates
		// new webpack.NamedModulesPlugin(),

	],
	devtool: 'source-map',

	// devtool: '#eval-source-map'

	// devServer: {
	// 	proxy: {
	// 		'*': {
	// 			target: 'http://' + proxy,
	// 		}
	// 	},
	// 	port: 8080,
	// 	host: 'localhost',
	// 	hot: true,
	// },

};

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map';
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ]);
// }
