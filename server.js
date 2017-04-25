require('dotenv').config()
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
// const WebpackDevServer = require('webpack-dev-server'); // <-- webpack-dev-server already includes both webpack-dev-middleware and webpack-hot-middleware
const webpackConfig = require('./webpack.config');
const pg = require('pg');
const knexSetting = require('./knexfile.js');
const knex = require('knex')(knexSetting.development);

const app = express();
const compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname, '/')))

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  wacthOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  stats: {
    color: true
  }
}));

app.use(webpackHotMiddleware(compiler, {
  path: '/__webpack_hmr'
}));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log("Mudika App listening on PORT", PORT);
});

// new WebpackDevServer(webpack(config), {
//     publicPath: config.output.publicPath,
//     watchOptions: {
//       aggregateTimeout: 300,
//       poll: 1000
//     },
//     hot: true
//   })
//   .listen(3000, '0.0.0.0', function (err, result) {
//     if (err) {
//       console.log(err);
//     }

//     console.log('Running at http://0.0.0.0:3000');
//   });

