/**
 * @file
 * Drupalcon 2017: JavaScript ES6 Gulp file
 */

'use strict';

// Modules.
var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Gulp compile
gulp.task('compile', ['sass', 'js', 'html']);

gulp.task('sass', () => {
  return gulp.src("./src/stylesheets/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist/stylesheets"))
});

  gulp.task('js', () => {
    return gulp.src("./src/javascript/*.js")
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: [
          ['es2015', {
            "targets": {
              "browsers": ["last 2 versions", "safari >= 7"]
            }
          }]
        ]
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("./dist/javascript"));
  });

gulp.task('html', () => {
  return gulp.src("./src/*.html")
    .pipe(gulp.dest("./dist/"));
});

gulp.task('watch', function() {
  gulp.watch("./src/javascript/*.js", ['js']);
  gulp.watch("./src/stylesheets/*.scss", ['sass']);
  gulp.watch("./src/*.html", ['html']);
});


// Default Gulp task.
gulp.task('default', ['compile', 'watch']);
