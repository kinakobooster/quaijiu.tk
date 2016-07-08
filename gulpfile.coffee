gulp          = require 'gulp'
browserify    = require 'browserify'
source        = require 'vinyl-source-stream'
browserSync   = require 'browser-sync'
plumber       = require 'gulp-plumber'
notify        = require 'gulp-notify'
watch         = require 'gulp-watch'
uglify        = require 'gulp-uglify'
sass          = require 'gulp-sass'
bourbon       = require 'node-bourbon'
jade          = require 'gulp-jade'
babel         = require 'gulp-babel'
concat        = require 'gulp-concat'
sourcemaps    = require 'gulp-sourcemaps'


DEST  = './dest'
SRC   = './src'

paths =
  src:
    jade:      ["#{SRC}/jade/**/*.jade", "!#{SRC}/jade/**/_*.jade"]
    sass:      ["#{SRC}/sass/**/*.sass"]
    js:        ["#{SRC}/js/**/*.js"]
  dest:
    js:        "#{DEST}/assets/js"
    html:      './'
    css:       "#{DEST}/assets/stylesheets"

bourbon.with './src/sass/application'


gulp.task 'sass', ->
  gulp.src paths.src.sass
    .pipe plumber
      errorHandler: notify.onError('<%= error.message %>')
    .pipe sourcemaps.init()
    .pipe sass
      includePaths: bourbon.includePaths
    .pipe sourcemaps.write()
    .pipe gulp.dest paths.dest.css
    .pipe browserSync.reload
      stream: true

gulp.task 'jade', ->
  gulp.src paths.src.jade
    .pipe plumber
      errorHandler: notify.onError('<%= error.message %>')
    .pipe jade
      pretty: true
    .pipe gulp.dest paths.dest.html
    .pipe browserSync.reload
      stream: true

gulp.task 'script', ->
  gulp.src paths.src.js
  .pipe plumber
    errorHandler: notify.onError('<%= error.message %>')
  .pipe sourcemaps.init()
  .pipe babel(presets: [ 'es2015' ])
  .pipe concat('all.js')
  .pipe sourcemaps.write('.')
  .pipe gulp.dest paths.dest.js
  .pipe browserSync.reload
      stream: true

gulp.task 'browser-sync', ->
  browserSync.init null,
    server: './'
    realoadDelay: 2000

gulp.task 'watch', ->
  watch paths.src.sass, ->
    gulp.start ['sass']
  watch paths.src.jade, ->
    gulp.start ['jade']

gulp.task 'default', ['sass', 'jade', 'script', 'browser-sync', 'watch']
