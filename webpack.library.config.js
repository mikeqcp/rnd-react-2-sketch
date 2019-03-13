const path = require('path');


module.exports = {
  entry: './src/lib-entry/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'apptensionUniversalComponents',
    libraryTarget: 'umd',
  },
  externals: {
    'react': 'react',
    'styled-components': 'styled-components',
  },
  resolve: {
    alias: {
      'styled-components/primitives': path.resolve(__dirname, 'src/lib-entry/styled-components-web-bridge'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['react'],
          },
        },
      },
    ],
  },
};
