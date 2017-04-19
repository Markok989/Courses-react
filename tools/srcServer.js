import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000; // port number
const app = express(); //instance of express
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, /* no infromation when it runs */
  publicPath: config.output.publicPath /* pass to publicpath*/
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html')); /*any request goes to index.html*/
});

app.listen(port, function(err) {
  if (err) {  /* error loop*/
    console.log(err);
  } else {
    open(`http://localhost:${port}`); /* open beowser package*/
  }
});
