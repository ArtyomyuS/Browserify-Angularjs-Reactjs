var constants = require("./constants.grunt.config");
module.exports = {
    dist: {
        options: {
            style: 'expanded'
        },
        files: [
            {
                expand: true,
                cwd: constants.sourceSCSS,
                src: ['app.scss'],
                dest: constants.sourceTemp,
                ext: '.css'
            }
        ]
    }
};