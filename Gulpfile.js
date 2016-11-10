var gulp = require('gulp');
var sass = require('gulp-sass');
var deploy      = require('gulp-gh-pages');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});