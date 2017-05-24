const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./']
  },
  
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  
  context: resolve(__dirname, 'src'),
  
  module: {
    rules: [
      {
        test: /.js$/,
        include: resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    ]
  },

  plugins: [
      new HtmlPlugin()
  ]
};