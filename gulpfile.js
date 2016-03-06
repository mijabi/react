var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var uglify = require('gulp-uglify');

gulp.task('browserify', function(){
  var b = browserify({
    entries: ['./src/tutorial_browserify.js'],
    transform: [reactify]
  });
  return b.bundle()
    .pipe(source('tutorial_browserify_compiled.js'))
        // .pipe(uglify({
        //     preserveComments: 'license'
        // }))
    .pipe(gulp.dest('./build'));
});
