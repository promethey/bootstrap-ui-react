const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    filename: '[name].bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
    name: 'bootstrap-ui',
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: 'defaults',
              }],
              '@babel/preset-react',
            ],
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      utilities: path.resolve(__dirname, 'src', 'utilities'),
      helpers: path.resolve(__dirname, 'src', 'helpers'),
      components: path.resolve(__dirname, 'src', 'components'),
    },
  },
};
