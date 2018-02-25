const withLess = require('@zeit/next-less')
const webpack = require('webpack')
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge')
const uitil =require('util')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	webpack: (config) => {
    // config.entry = Object.assign({}, config, { entry: function() {
    //   return config.entry().then((entry) => {
    //     return Object.assign({}, entry, { 'index': './src/index.js'})
    //   })
    // }})

    newConfig = {
      // entry: './pages/_document.js',
      // output: {
      //   path: path.join(__dirname, 'dist'),
      //   filename: 'bundle.[hash].js'
      // },
      resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          '../../theme.config$': path.join(__dirname, 'my-semantic-theme/theme.config')
        }
      },
      module: {
        rules: [
          // this handles .less translation
          {
            use: ExtractTextPlugin.extract({
              use: ['css-loader', 'less-loader']
            }),
            test: /\.less$/
          },
          {
            test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
            use: 'file-loader?name=[name].[ext]?[hash]'
          },
          {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
          }
        ]
      },
      plugins: [
        // this handles the bundled .css output file
        new ExtractTextPlugin({
          filename: '../../static/semantic.min.css'
        })
      ]
    }

    

    const mergeConfig = merge(newConfig, config)
    console.log( JSON.stringify(test, null, 3))
    
    return mergeConfig
  }
}