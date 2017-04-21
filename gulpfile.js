/**
 * @file
 * Drupalcon 2017: JavaScript ES6 Gulp file
 */

'use strict';

// Modules.
const browserSync = require(`browser-sync`).create();
const gulp = require(`gulp`);
const babel = require(`gulp-babel`);
const sass = require(`gulp-sass`);
const sourcemaps = require(`gulp-sourcemaps`);
const webpack = require('gulp-webpack');

gulp.task(`serve`, function() {
  browserSync.init({
    server: `./dist/`,
    reloadDelay: 500
  });
});

gulp.task(`watch`, () => {
  gulp.watch(`./src/css/*.css`, [`css`]).on(`change`, browserSync.reload);
  gulp.watch(`./src/javascript/*.js`, [`js`, `js-modules`]).on(`change`, browserSync.reload);
  gulp.watch(`./src/*.html`, [`html`]).on(`change`, browserSync.reload);
});

gulp.task(`css`, () => {
  return gulp.src(`./src/css/*.css`)
    .pipe(gulp.dest(`./dist/css`));
});


gulp.task(`js`, () => {
  return gulp.src(`./src/javascript/**/*.js`)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: [`es2015`]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`./dist/javascript`));
});

gulp.task(`js-modules`, () => {
  return gulp.src(`./src/javascript/**/*.js`)
    .pipe(babel({
      presets: [`es2015`]
    }))
    .pipe(webpack( require(`./webpack.config.js`) ))
    .pipe(gulp.dest(`./dist/javascript`));
});

gulp.task(`html`, () => {
  return gulp.src(`./src/*.html`)
    .pipe(gulp.dest(`./dist/`));
});

// Default Gulp task.
gulp.task(`default`, [`css`, `js`, `js-modules`, `html`, `serve`, `watch`]);
