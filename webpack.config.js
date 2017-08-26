var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
        extensions: ['.js', '.scss', '.css', '.json']
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css?$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                include: /\.json$/, 
                loaders: ["json-loader"]
            }
        ]
},
  externals: {
    'react': 'commonjs react'
  }
};
