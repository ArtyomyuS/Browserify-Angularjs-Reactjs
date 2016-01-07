module.exports = {
    nodeModules: 'node_modules/',
    source: 'src/',
    sourceSCSS: 'src/resources/styles',
    sourceTemp: 'src_temp/',
    jsxComponents: 'components/',
    dest: 'dest/',
    mapFile: '../src_temp/release.min.map',
    mapOutput: 'src_temp/release.min.map',
    debug: true,
    copyrightBanner: '/*Copyright <%= pkg.name %>, 2016 */\n',
    notify : {
        options: {
            enabled: true,
            max_jshint_notifications: 5, // maximum number of notifications from jshint output
            success: true, // whether successful grunt executions should be notified automatically
            duration: 10 // the duration of notification in seconds, for `notify-send only
        }
    }
};