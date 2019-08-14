var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
    browserSync.watch('public', browserSync.reload)
});


gulp.task('style', function () {
   return gulp.src('./src/sass/**/*.sass')
   .pipe(sourcemaps.init())
   .pipe(sass())
   .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            cascade: false
        }))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('./public/css'))
});


gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.sass', gulp.series('style'));
    gulp.watch('./*.html');
});


gulp.task('default', gulp.series (
    gulp.parallel('style'),
    gulp.parallel('watch', 'browser-sync')
));