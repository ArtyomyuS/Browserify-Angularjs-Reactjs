var constants = require("./constants.grunt.config");

module.exports = {
    options: {
        banner: constants.copyrightBanner,
        transform: [require('grunt-react').browserify, 'reactify', 'browserify-global-shim']
    },
    production: {
        options: {
            browserifyOptions: {
                debug: constants.debug,
                extension: ["jsx"]
            }
        },
        src: constants.source + 'main/app.js',
        dest: constants.sourceTemp + 'release.bundle.js'
    },
    dev: {
        options: {
            browserifyOptions: {
                debug: constants.debug,
                extension: ["jsx"]
            },
            plugin: [
                //['minifyify', {map: constants.mapFile, output: constants.mapOutput}]
            ]
        },
        src: constants.source + 'main/app.js',
        dest: constants.dest + 'release.min.js'
    }
};