'use strict';

/**
 * Dist configuration. Used to build the
 * final output when running npm run dist.
 */
const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

class WebpackDistConfig extends WebpackBaseConfig {

  constructor() {
    super();
    this.config = {
      cache: false,
      // devtool: 'source-map',
      devtool:false,
      entry: [
        './client.js'
      ],
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CompressionWebpackPlugin({ //gzip 压缩
           asset: '[path].gz[query]',
           algorithm: 'gzip',
           test: new RegExp(
               '\\.(js|css)$'    //压缩 js 与 css
           ),
           threshold: 10240,
           minRatio: 0.8
        })
      ]
    };

    // Deactivate hot-reloading if we run dist build on the dev server
    this.config.devServer.hot = false;
  }

  /**
   * Get the environment name
   * @return {String} The current environment
   */
  get env() {
    return 'dist';
  }
}

module.exports = WebpackDistConfig;
