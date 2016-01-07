var constants = require("./constants.grunt.config");
module.exports = {
    //fontAwesome: {
    //    files: [
    //        {
    //            expand: true,
    //            flatten: true,
    //            src: constants.nodeModules + 'font-awesome/css/font-awesome.min.css',
    //            dest: constants.sourceTemp + 'resources/fonts'
    //        },
    //        {
    //            expand: true,
    //            cwd: constants.nodeModules + 'font-awesome/fonts/',
    //            src: ['**'],
    //            dest: constants.source + 'resources/fonts'
    //        }
    //    ]
    //},
    resources: {
        files: [
            {
                expand: true,
                cwd: constants.source + 'resources',
                dest: constants.dest + 'resources',
                src: [
                    'images/*.*',
                    'videos/*.*',
                    'fonts/*.*',
                    'i18n/*.*',
                    'styles/*.css'
                ]
            }
        ]
    },
    indexHTML: {
        files: [
            {
                expand: true,
                cwd: constants.source + 'main',
                dest: constants.dest,
                src: ['index.html']
            },
        ]
    }
};