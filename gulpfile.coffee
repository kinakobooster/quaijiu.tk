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
bower         = require 'main-bower-files'
filter        = require 'gulp-filter'
exec          = require('child_process').exec


DEST  = './dest'
SRC   = './src'
BOWER_COMPONENTS = './bower_components'
BOWER_INSTALL_DIR_BASE = '/common'

paths =
  src:
    jade:      ["#{SRC}/jade/pages/**/*.jade", "!#{SRC}/jade/pages/**/_*.jade"]
    index:     ["#{SRC}/jade/index.jade"]
    sass:      ["#{SRC}/sass/**/*.sass"]
    js:        [ "#{SRC}/js/common/lib/*.js", "#{SRC}/js/common/lib/*.min.js", "#{SRC}/js/**/*.js"]
  dest:
    js:        "#{DEST}/assets/js"
    html:      "#{DEST}/assets/templates/pages"
    index:     "./"
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

gulp.task 'index', ->
  gulp.src paths.src.index
    .pipe plumber
      errorHandler: notify.onError('<%= error.message %>')
    .pipe jade
      pretty: true
    .pipe gulp.dest paths.dest.index
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
  .pipe concat('app.js')
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
  watch paths.src.index, ->
    gulp.start ['index']
  watch paths.src.jade, ->
    gulp.start ['script']

gulp.task 'default', ['sass', 'index', 'jade', 'script', 'browser-sync', 'watch']
