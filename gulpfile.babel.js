import gulp from 'gulp'
import sass from 'gulp-sass'
import browserSync from 'browser-sync'
import jade from 'gulp-jade'
import runSequence from 'run-sequence'
import gulpLoadPlugins from 'gulp-load-plugins'

const $ = gulpLoadPlugins()

gulp.task('sass', () =>
  return gulp.src('src/assets/stylesheets/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./dist/assets/stylesheets/'))
    .pipe(browserSync.reload({
      stream: true
    }));
)

gulp.task('jade', () =>
    return gulp.src('src/templates/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({
      stream: true
    }));
)

gulp.task('script', () =>
  gulp.src('src/scripts/**/*.js')
    .pipe($.babel())
    .pipe(gulp.dest('dist/scripts'))
)

gulp.task('watch', ['browserSync', 'sass', 'jade'], () =>
  gulp.watch('src/assets/stylesheets/*.sass', ['sass']);
  gulp.watch('src/templates/*.jade', ['jade']);
);


gulp.task('browserSync', () =>
  browserSync({
    server: {
      baseDir: './' // Directory for server
    },
  })
  gulp.watch("*.html").on("change", browserSync.reload);
);



gulp.task('default', function(callback) {
  runSequence(['sass', 'jade', 'watch', 'script'],
    callback
  )
})
