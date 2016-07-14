import babel from 'rollup-plugin-babel'

export default {
  entry: './index.es6.js',
  dest: './index.js',
  plugins: [
    babel({
      presets: ['es2015-rollup', 'stage-1'],
      exclude: 'node_modules/**',
      babelrc: false
    })
  ],
  format: 'umd',
  moduleName: 'insert2',
  exports: 'named'
}
