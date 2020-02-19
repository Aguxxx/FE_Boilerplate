var path = require('path');
var webpack = require('webpack');

/* FOR VUE LOADER SINCE VERSION 15, IT'S NECESSARY TO USE THIS PLUGIN
*/
const VueLoaderPlugin = require('vue-loader/lib/plugin')

var proxy = 'localhost:2344';

module.exports = {
	entry: {
		// build: './client/main_their.ts',
		ADMIN: './dev/Admin.ts',
		USER_SIGNUP: './dev/UserSignup.ts',
		USER: './dev/User.ts',
		USER_LOGIN: './dev/Login.ts',
		CART: './dev/Cart.ts',
		// MAIN: './client/components/AdminTemplate/Trigger.ts',
	},
	output: {
		path: path.resolve(__dirname, './dist_prod/'),
		publicPath: '/dist_prod/',
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

			// {
			//   test: /\.(png|jpg|gif|svg)$/,
			//   loader: 'file-loader',
			//   options: {
			//     name: '[name].[ext]?[hash]'
			//   }
			// }
		]
	},
	resolve: {
		extensions: ['.ts', '.js', '.vue', '.json'],
		alias: {
			vue$: 'vue/dist/vue.esm.js'
		}
	},
	// devServer: {
	//   historyApiFallback: true,
	//   noInfo: true,
	//   overlay: true,
	//   proxy: {
	//     '/api': {
	//       target: 'http://localhost:3001',
	//       changeOrigin: true,
	//       secure: false
	//     }
	//   }
	// },
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
			'vue-tree-list': 'VueTreeList',
		},
	],
	plugins: [
		// make sure to include the plugin for the magic
		new VueLoaderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),


		// enable HMR globally
		// new webpack.HotModuleReplacementPlugin(),

		// // prints more readable module names in the browser console on HMR updates
		// new webpack.NamedModulesPlugin(),

	],
	// devtool: 'source-map',
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
