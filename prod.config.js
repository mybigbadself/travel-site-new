const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const fse = require('fs-extra')

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap('Copy images', function () {
      fse.copySync('./app/assets/images', './docs/assets/images')
    })
  }
}


let rules = [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', ['babel-preset-minify']],
            plugins: ['@babel/plugin-transform-runtime'],
            comments: false
          }
        }
      }
    ]

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
  },
  mode: 'production',
  module: {
    rules
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html'
    }),
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
    new MinifyPlugin({}, { comments: false }),
    new RunAfterCompile()
  ]
};

