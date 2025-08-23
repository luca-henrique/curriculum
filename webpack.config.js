const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const HtmlInlineCssWebpackPlugin = require('html-inline-css-webpack-plugin').default;

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'eval-source-map',
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      publicPath: 'auto', 
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        // 2. Adicione esta nova regra para arquivos CSS
        {
          test: /\.css$/i,
          use: [
            // Em produção, extrai para um arquivo. Em desenvolvimento, injeta no style.
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      ...(isProduction ? [new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      })] : []),
      ...(isProduction ? [new HtmlInlineCssWebpackPlugin()] : [])
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: 'single',
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "build"),
      },
      historyApiFallback: true,
      port: 3000,
      open: true,
      hot: true,
    },
  };
};