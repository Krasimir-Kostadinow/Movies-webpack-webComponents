
module.exports = {

    mode: 'production',

    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
        // sourceMapFilename: "app.bundle.js.map"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.(txt$|css)/i,
                use: [
                  {
                    loader: 'raw-loader',
                    options: {
                      esModule: false,
                    },
                  },
                ],
              },   
        ]
    },

    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 9000,
    },

    // devtool: "source-map",




}