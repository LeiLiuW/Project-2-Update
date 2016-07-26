var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
const eslint = require('gulp-eslint')
var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename');



//gulp.task('sayHello',function(){
//console.log('hello world');
//});


//watch

 gulp.task('compress', function(){
     gulp.src(['js/*.js','lib/*.js'])
       .pipe(eslint())
       .pipe(uglify())
       .pipe(rename({extname:'.min.js'}))
       .pipe(gulp.dest('build/js'))
 });

gulp.task('watch', function(){
gulp.watch('./js/*.js',['compress'])
})
gulp.task('default',['watch','compress'])

//plumber
gulp.src('./src/*.ext')
    .pipe(plumber())

    .pipe(gulp.dest('./dist'));


// browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "yourlocal.dev"
    });
});

//plumber


gulp.src('./src/*.ext')
    .pipe(plumber())
    .pipe(gulp.dest('./dist'));

var style =['./sass/*.scss', './sass/**/*.scss']
var styleOut ='./build/css'
// sass
gulp.task('sass', function() {
   gulp.src(style)
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest(styleOut))
      .pipe(cssnano())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest(styleOut));
});

gulp.task('sass:watch', function () {
  gulp.watch(style, ['sass']);
});
gulp.task('default',['watch', 'sass'])
