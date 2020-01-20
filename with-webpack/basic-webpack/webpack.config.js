const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const systemjsInterop = require('systemjs-webpack-interop')

const systemjsInteropConfig = systemjsInterop.modifyWebpackConfig({
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'src/app.js')
  },

  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].js',
    libraryTarget: 'system'
  },

  module: {
    rules: [
      { parser: { system: false } }
    ]
  },

  devServer: {
    index: path.resolve(__dirname, 'public/dist/index.html'),
    contentBase: path.join(__dirname, 'public/dist'),
    writeToDisk: true,
    compress: false,
    open: 'Google Chrome',
    port: 4009,
    historyApiFallback: true,
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html')
    }),

    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/import-map.json'),
        to: path.resolve(__dirname, 'public/dist/import-map.json')
      }
    ])
  ]
})

const standardConfig = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'src/app.js')
  },

  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].js'
  },

  devServer: {
    index: path.resolve(__dirname, 'public/dist/index.html'),
    contentBase: path.join(__dirname, 'public/dist'),
    writeToDisk: true,
    compress: false,
    open: 'Google Chrome',
    port: 4009,
    historyApiFallback: true,
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html')
    }),

    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/import-map.json'),
        to: path.resolve(__dirname, 'public/dist/import-map.json')
      }
    ])
  ]
}

module.exports = { ...systemjsInteropConfig }
