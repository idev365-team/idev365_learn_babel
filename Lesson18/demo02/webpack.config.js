const path = require('path')
module.exports = {
    mode:'production',
    entry:{
        app:["./src/main.js"]
    },
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:['babel-loader']
            }
        ]
    }
}