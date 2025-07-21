const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

const resolve = (pathStr) => {
	return path.resolve(__dirname, pathStr);
};

/**@type {import('webpack').Configuration}*/
module.exports = {
	mode: "development",
	entry: resolve("./src/index.js"),
	output: {
		path: resolve("./dist"),
		filename: "index.js",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve("./src/index.html"),
		}),
		new CopyPlugin({
			patterns: [
				{
					from: resolve("src/img"),
					to: resolve("dist/img"),
				}
			]
		}),
		new WorkboxPlugin.GenerateSW({
			clientsClaim: true,
			skipWaiting: true,
			runtimeCaching: [
				{
					urlPattern: /.(?:js|css|html|ico|jpg)$/,
					handler: 'CacheFirst',
					options: {
						cacheName: 'static-resources',
						expiration: {
							maxEntries: 100,
							maxAgeSeconds: 24 * 60 * 60,
						},
					},
				}
			],
		}),
	]
};
