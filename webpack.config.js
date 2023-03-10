
module.exports = {

    mode: 'none',

    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },

    devServer: {
        static: {
            directory: __dirname,
        },
        compress: true,
        port: 9000,
    },



}