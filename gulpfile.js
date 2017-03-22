'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', () => {
  return gulp.src('src/app.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('task', () => {
});

gulp.task('task', () => {
});
