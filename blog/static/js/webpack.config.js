var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
    entry : {
        index : "./index.js"
    },
    output : {
        path : "./build",
        filename : "bundle.js"
    },
    module : {
        loaders :[
            {test:/\.js$/, loader:'jsx-loader'}
            /*{
                // I want to uglify with mangling only app files, not thirdparty libs
                test: /.*\/app\/.*\.js$/,
                exclude: /.spec.js/, // excluding .spec files
                loader: "uglify"
            }*/
        ]
    },
    plugins: [
        /*new uglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true
            }
        })*/
    ]
}