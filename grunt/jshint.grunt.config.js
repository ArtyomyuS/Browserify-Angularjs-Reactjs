var constants = require("./constants.grunt.config");
module.exports = {
    options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
            jQuery: true
        }
    },
    js: [constants.source + '*.js']
};