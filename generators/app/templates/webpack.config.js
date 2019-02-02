const nodeExternals = require('webpack-node-externals')

module.exports = {
  output: {
    library: 'abc',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  externals: [nodeExternals()],
  target: 'node',
  node: {
    __dirname: false
  }
}
