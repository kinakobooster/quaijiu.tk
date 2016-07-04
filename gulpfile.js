var gulp = require('gulp'); // Needed to run gulp
var sass = require('gulp-sass'); // Needed to run SCSS/Sass preprocessor
var browserSync = require('browser-sync'); // Needed to run Live Reload
var jade = require('gulp-jade'); // HTML preprocesor
var runSequence = require('run-sequence'); // Needed for default file

// Uncomment to enable auto-clean (Must uncomment config further down page)
// var del = require('del'); // Cleans up any unnecessary files that were auto-generated

// Preprocessor task
gulp.task('sass', function() {
  return gulp.src('src/assets/stylesheets/*.sass') // SCSS/Sass path here, change to .scss if needed
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('./dist/assets/stylesheets/')) // Target SCSS/Sass file here
    .pipe(browserSync.reload({ // Added into SCSS/Sass config to work with Live Reload
      stream: true
    }));
})

// HTML Preprocessor - Comment/delete if not needed

gulp.task('jade', function() {
    return gulp.src('src/templates/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({
      stream: true
    }));
})

// Watches file for changes
gulp.task('watch', ['browserSync', 'sass', 'jade'], function (){ // Include broswerSync with sass to get tasks to run together
  gulp.watch('src/assets/stylesheets/*.sass', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('src/templates/*.jade', ['jade']);
  // gulp.watch('path.js', browserSync.reload);
  // Other watchers
});

// Live Reload
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './' // Directory for server
    },
  })
  gulp.watch("*.html").on("change", browserSync.reload);
});



gulp.task('default', function(callback) {
  runSequence(['sass', 'jade', 'watch'],
    callback
  )
})
