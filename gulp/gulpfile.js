var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    pug = require('gulp-pug'),
    concat = require('gulp-concat'),
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
   return gulp.src([
    './src/sass/**/reset.sass',
    './src/sass/**/style.sass',
    './src/sass/**/*.sass'
    ])
   .pipe(sourcemaps.init())
   .pipe(sass())
   .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            cascade: false
        }))
   .pipe(concat('main.css'))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('./public/css'))
});


gulp.task('html', function buildHTML() {
  return gulp.src('./src/views/**/*.pug')
  .pipe(pug({pretty: true}))
  .pipe(gulp.dest('./public/'))
});


gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.sass', gulp.series('style'));
    gulp.watch('./src/views/**/*.pug', gulp.series('html'));
});


gulp.task('default', gulp.series (
    gulp.parallel('style', 'html'),
    gulp.parallel('watch', 'browser-sync')
));