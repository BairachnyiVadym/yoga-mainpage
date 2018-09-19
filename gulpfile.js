let gulp = require('gulp');
let livereload = require('gulp-livereload');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let rename = require('gulp-rename');
let cleancss = require('gulp-clean-css');

gulp.task('reload-css', function () {
    gulp.src('./src/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css/'))
        .pipe(cleancss({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css/'))
        .pipe(livereload());
});

gulp.task('default', function() {
    livereload.listen();
    gulp.watch('./src/style.scss', ['reload-css']);
});