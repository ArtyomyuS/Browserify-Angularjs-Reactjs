var constants = require("./constants.grunt.config");
module.exports = {
    options: {
        separator: '\n'
    },
    vendorsCSS: {
        src: constants.sourceTemp + 'vendors/' + '*.css',
        dest: constants.sourceTemp + 'vendors.css'
    }
};