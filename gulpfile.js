var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var jade = require('gulp-jade');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var bourbon = require('bourbon');

// Preprocessor task
gulp.task('sass', function() {
  return gulp.src('src/assets/stylesheets/*.sass')
    .pipe(plumber(function(error) {
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(sass({
        includePaths: bourbon.includePaths
    }))
    .pipe(gulp.dest('./dist/assets/stylesheets/'))
    .pipe(browserSync.reload({
      stream: true
    }));
})



gulp.task('jade', function() {
    return gulp.src('src/templates/*.jade')
    .pipe(plumber(function(error) {
       errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({
      stream: true
    }));
})

gulp.task('watch', ['browserSync', 'sass', 'jade'], function (){
  gulp.watch('src/assets/stylesheets/*.sass', ['sass']);
  gulp.watch('src/templates/*.jade', ['jade']);
});

// Live Reload
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './' 
    },
  })
  gulp.watch("*.html").on("change", browserSync.reload);
});



gulp.task('default', function(callback) {
  runSequence(['sass', 'jade', 'watch'],
    callback
  )
})
