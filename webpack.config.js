	var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	node: {
      net: 'empty',
      tls: 'empty',
			fs: 'empty'
    },

	entry: './app/index.js',
	module:{
		loaders:[
			{
			test:/\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
			{
				test:/\.css?$/,
				loader: 'css-loader?modules=true'
			}
		]
	},
	output:{
		filename:'transform.js',
		path: __dirname + '/build'
	},
	plugins: [HTMLWebpackPluginConfig]
};
