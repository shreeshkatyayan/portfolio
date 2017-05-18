var gulp = require('gulp');
var rs = require("run-sequence");

gulp.task("clean", require("./gulp/clean.js"));

gulp.task("concat-vendor-js", require("./gulp/compile-vendor.js"));

gulp.task("bundle-js", require("./gulp/compile-js.js")(false));
gulp.task("dev-bundle-js", require("./gulp/compile-js.js")(true));
