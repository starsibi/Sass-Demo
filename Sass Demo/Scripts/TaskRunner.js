var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task("build-css", function () {
    return gulp
        .src('./Content/Styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./Content/Styles'));

});

gulp.task('default', ['build-css']);