// NOTE - This is only used for example 10 - modules.

var path = require('path');
module.exports = {
    entry: './src/javascript/10_modules.js',
    output: {
        path: __dirname,
        filename: './bundle.js'
    },
    module: {
        loaders: [
            { test: path.join(__dirname, './src/javascript'),
              loader: 'babel-loader' }
        ]
    }
};
