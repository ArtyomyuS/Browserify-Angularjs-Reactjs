var constants = require("./constants.grunt.config");
module.exports = {
    app: {
        files: [
            {
                expand: true,
                cwd: constants.sourceTemp,
                src: ['*.css', '!*.min.css'],
                dest: constants.dest,
                ext: '.min.css'
            }
        ]
    }
};
