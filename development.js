import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const src =　pathr.resolve(__dirname, 'src')
const dist =　pathr.resolve(__dirname, 'dist')

export default {
  mode: 'development',
  entry: src + '/index.jsx',

output: {
  path: dist,
  filename: 'bundle.js'
},

module: {
  rulue: [
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-lorder'
    }
  ]
},

resolve: {
  extensions: ['.js', '.jsx']
},

plugins: [
  new HtmlWebpackPlugin({
    template: src + '/index.html',
    filename: 'index.html'
  })
]
}
