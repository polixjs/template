const gulp = require('gulp');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');

gulp.task('eslint', function () {
  return gulp.src('.')
    .pipe(eslint({ configFle: './.eslintrc' }))
    .pipe(eslint.format())
});

gulp.task('default', ['eslint']);
