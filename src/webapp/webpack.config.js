const path = require('path');

module.exports = {
  entry: './app/pages/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module:{
    rules: [
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use:[{
           loader: 'file-loader',
           options: {
            outputPath: path.resolve(__dirname, 'dist')
           }
          }
        ]
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
  
};