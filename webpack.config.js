module.exports = [
  {
    entry: './src/index',
    output: {
      path: __dirname + '/browser',
      filename: 'fetch-mw-oauth2.min.js',
      library: 'fetchMwOAuth2',
      libraryTarget: 'umd'
    },

    resolve: {
      extensions: ['.web.ts', '.web.js', '.ts', '.js', '.json'],
      fallback: { 'crypto': false }
    },

    devtool: 'source-map',

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader'
        }
      ]
    }
  }
];
