var constants = require("./constants.grunt.config");
module.exports = {
    options: {
        banner: constants.copyrightBanner,
        compress: {
            drop_console: true
        }
    },
    production: {
        files: {
            'dest/release.min.js': ['source_temp/release.bundle.js']
        }
    }
};