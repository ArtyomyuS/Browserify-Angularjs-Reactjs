var constants = require("./constants.grunt.config");

module.exports = {
    files: constants.source + '*',
    tasks: ['default']
};