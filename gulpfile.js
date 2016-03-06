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
        //     preserveComments: 'license' // ライセンスコメントを残しつつminify
        // }))
    .pipe(gulp.dest('./build'));
});

// var gulp = require('gulp');
// var browserify = require('browserify');
// var source = require('vinyl-source-stream');
// var buffer = require('vinyl-buffer');
// var uglify = require('gulp-uglify');

// gulp.task('build-js', function () {
//   "browserify": {
//     "transform": [
//       ["reactify", {"harmony": true} ]
//     ]
//   }


//     return browserify({
//         entries: './src/js/app.js' // どのファイルからビルドするか
//     }).plugin('licensify') // licensifyプラグインの有効化
//         .bundle() // browserifyの実行
//         .pipe(source('app.js'))
//         .pipe(buffer())
//         .pipe(uglify({
//             preserveComments: 'license' // ライセンスコメントを残しつつminify
//         }))
//         .pipe(gulp.dest('./static/js')); // 出力
// });
