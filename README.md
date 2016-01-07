# README #

A simple bootstrap application that include: "Browserify", "AngularJs", "ReactJs".

## Build package.json
  `npm install`

## Build project
  `grunt`
  
## Main project architecture
  + /src
    + /main
      + app.js
      + index.html
      + /controller
      + /service
      + /view
        + /component
        + /layout
    + /resources
      + /fonts
      + /images
      + /styles
        + /component
        + /layout
      + /i18n 
  + /grunt
    + browserify.grunt.config.js
    + concat.grunt.config.js
    + constants.grunt.config.js
    + copy.grunt.config.js
    + cssmin.grunt.config.js
    + jshint.grunt.config.js
    + notify.grunt.config.js
    + postcss.grunt.config.js
    + sass.grunt.config.js
    + uglify.grunt.config.js
    + watch.grunt.config.js 
  + Gruntfile.js
  + package.json
  
  
  
