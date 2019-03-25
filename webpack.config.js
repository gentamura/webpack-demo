const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/index.js',
    './src/images/profile.png',
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          path.resolve(__dirname, './src/foo-loader.js'),
          path.resolve(__dirname, './src/bar-loader.js'),
          path.resolve(__dirname, './src/baz-loader.js'),
        ],
      },
      {
        test: /\.png$/,
        use: path.resolve(__dirname, './src/image-loader.js'),
      },
    ],
  },
};
