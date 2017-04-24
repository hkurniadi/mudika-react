var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    // Activate HMR for React
    'react-hot-loader/patch',

    // FOR USING web-dev-server
    // Enable websocket connection (needs url and port) in order to run the HMR
    // 'webpack-dev-server/client?http://localhost:3000',

    // Bundle the client for hot reloading, only hot reload for successful updates
    // only-dev-server option does not reload the browser upon syntax errors, recommended for React apps because it keeps the state
    'webpack/hot/only-dev-server',
    // -- END --

    // FOR USING other server e.g. Express
    // Needs webpack-dev-middleware and webpack-hot-middleware installed
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',

    // The app entry point
    './src/index.jsx'
  ],
  // To tell Webpack where to store the result
  output: {
    filename: 'bundle.js',
    // Path for development build
    path: path.join(__dirname, 'dist'),
    // Path for production build
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'], //<-- will call '.babelrc' file
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        // loaders work from right to left
        // in this case, Webpack will fisrt give the file to 'sass-loader'
        loaders: ["style", "css", "sass"] 
      }
    ]
  },
  // To resolve 'import' or 'require' w/o extensions
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  // If using Node.js API, do not need to use this config
  // devServer: {
  //   inline: true, // <-- enables 'Live Reloading'
  //   hot: true, // <-- enables HMR on the server
  // },
  // Additional node modules, usually work on the resulting bundle
  plugins: [
      // OccurenceOrderPlugin is needed for webpack 1.x only 
      new webpack.optimize.OccurenceOrderPlugin(),
      
      // Enable HMR globally
      new webpack.HotModuleReplacementPlugin(),

      // Prints more readable module names in the browser console on HMR updates
      new webpack.NamedModulesPlugin(),

      // Handles error more cleanly
      new webpack.NoErrorsPlugin()
    ]
}
