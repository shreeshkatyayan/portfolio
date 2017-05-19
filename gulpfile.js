var gulp = require('gulp');
var rs = require("run-sequence");
var extend      = require('extend');
var parseArgs   = require('minimist');

var config = extend({
   env: process.env.NODE_ENV
}, parseArgs(process.argv.slice(2)));

gulp.task("set-dev-env", function() {
    return process.env.NODE_ENV = config.env = "development";
});

gulp.task("set-prod-env", function() {
    return process.env.NODE_ENV = config.env = "production";
})

gulp.task("clean", require("./gulp/clean.js"));

gulp.task("concat-vendor-js", require("./gulp/compile-vendor.js"));

gulp.task("bundle-js", require("./gulp/compile-js.js"));

gulp.task("compile-sass", require("./gulp/compile-sass.js"));

gulp.task("develop", function(cb) {
    rs('set-dev-env',
    'clean',
    'concat-vendor-js', 'bundle-js',
    'compile-sass',
    'watch',
    cb);
});
