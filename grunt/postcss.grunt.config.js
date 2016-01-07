var constants = require("./constants.grunt.config");
module.exports = {
    options: {
        map: false,
        processors: [
            require('pixrem')(), // add fallbacks for rem units
            require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
            require('cssnano')() // minify the result
        ]
    },
    dist: {
        src: constants.dest + '*.css'
    }
};