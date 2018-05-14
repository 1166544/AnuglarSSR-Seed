const path = require('path')
const nodeExternals = require('webpack-node-externals');
const configData = {
    sources: 'ngSources'
}

module.exports = {
  entry: {
    server: './client/server.ts'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      'main.server': path.join(__dirname, `app/${configData.sources}`, 'server', 'main.bundle.js')
    }
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, `app/${configData.sources}`),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
