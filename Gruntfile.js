var browserifyConfig = require('./grunt/browserify.grunt.config');
var copyConfig = require('./grunt/copy.grunt.config');
var concatConfig = require('./grunt/concat.grunt.config');
var sassConfig = require('./grunt/sass.grunt.config');
var postcssConfig = require('./grunt/postcss.grunt.config');
var jshintConfig = require('./grunt/jshint.grunt.config');
var watchConfig = require('./grunt/watch.grunt.config');
var cssminConfig = require('./grunt/cssmin.grunt.config');
var uglifyConfig = require('./grunt/uglify.grunt.config');
var notifyConfig = require('./grunt/notify.grunt.config');

module.exports = function (grunt) {
  
    require('time-grunt')(grunt);

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-rename');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', ['copy', 'concat', 'sass', 'cssmin', 'jshint', 'browserify:dev', 'notify:dev']);
    grunt.registerTask('build', ['copy', 'concat', 'sass', 'cssmin', 'jshint', 'browserify:production', 'uglify:production', 'postcss', 'notify:production']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: copyConfig,
        concat: concatConfig,
        sass: sassConfig,
        postcss: postcssConfig,
        jshint: jshintConfig,
        uglify: uglifyConfig,
        browserify: browserifyConfig,
        cssmin: cssminConfig,
        watch: watchConfig,
        notify: notifyConfig
    });
};
