const path = require('path');
module.exports = {
    mode: 'development',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname + '/dist'),
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [['@babel/preset-env', { modules: false }]]
              }
            }
          ]
        },
        // buildした際にcssでエラーが発生していたためstyle-loaderを追加
        {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      }
      ]
    },
    resolve: {
        extensions: ['.js', '.jsx'] // use js, jsx file
    },
    devServer: {
        open: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, '/dist'),
        watchContentBase: true,
        inline: true,
        hot: true,
    },

    plugins: [
    ], 
};