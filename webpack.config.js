module.exports = {
	mode: "development",
	context: __dirname,
	entry: {
		customer: "./app/controller.js",
		product: "./app/app.js"
	},
	output: {
		path: __dirname + "/dist",
		filename: "[name]_bundle.js"
	},
	
	watch: true,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		]
	}
}