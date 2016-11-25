var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var bourbon = require('node-bourbon');
var pug = require('gulp-pug');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var bower = require('main-bower-files');
var filter = require('gulp-filter');
var exec = require('child_process').exec;
var inject = require('gulp-inject');

var DEST = './dest';

var SRC = './src';

var BOWER_COMPONENTS = './bower_components';

var BOWER_INSTALL_DIR_BASE = '/common';

paths = {
  src: {
    pug: [SRC + "/pug/pages/**/*.pug", "!" + SRC + "/pug/pages/**/_*.pug"],
    index: [SRC + "/pug/index.pug"],
    sass: [SRC + "/sass/**/*.sass"],
    js: [SRC + "/js/**/*.js"],
    pde: SRC + "/pde/*.pde"
  },
  dest: {
    js: DEST + "/assets/js",
    html: DEST + "/assets/templates/pages",
    index: "./",
    css: DEST + "/assets/stylesheets",
    pde: DEST + "/pde/"
  }
};

bourbon["with"]('./src/sass/application');

gulp.task('sass', function() {
  return gulp.src(paths.src.sass).pipe(plumber({
    errorHandler: notify.onError('<%= error.message %>')
  })).pipe(sourcemaps.init()).pipe(sass({
    includePaths: bourbon.includePaths
  })).pipe(sourcemaps.write()).pipe(gulp.dest(paths.dest.css)).pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('index', function() {
  return gulp.src(paths.src.index).pipe(plumber({
    errorHandler: notify.onError('<%= error.message %>')
  })).pipe(pug({
    pretty: true
  })).pipe(gulp.dest(paths.dest.index)).pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('pug', function() {
  return gulp.src(paths.src.pug).pipe(plumber({
    errorHandler: notify.onError('<%= error.message %>')
  })).pipe(pug({
    pretty: true
  })).pipe(gulp.dest(paths.dest.html)).pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('script', function() {
  return gulp.src(paths.src.js).pipe(plumber({
    errorHandler: notify.onError('<%= error.message %>')
  })).pipe(sourcemaps.init()).pipe(babel({
    presets: ['es2015']
  })).pipe(concat('app.js')).pipe(sourcemaps.write('.')).pipe(gulp.dest(paths.dest.js)).pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('pde', function() {
  return gulp.src('./index.html').pipe(inject(gulp.src(paths.src.pde), {
    transform: function(filepath, file, i, length) {
      return '<script type="text/processing" id = "pde_script_' + (i + 1).toString() + '">' + file.contents.toString() + '</script>';
    }
  })).pipe(gulp.dest('./'));
});

gulp.task('browser-sync', function() {
  return browserSync.init(null, {
    server: './',
    realoadDelay: 2000
  });
});

gulp.task('watch', function() {
  watch(paths.src.sass, function() {
    return gulp.start(['sass']);
  });
  watch(paths.src.pug, function() {
    return gulp.start(['pug']);
  });
  watch(paths.src.index, function() {
    return gulp.start(['index']);
  });
  return watch(paths.src.js, function() {
    return gulp.start(['script']);
  });
});

gulp.task('default', ['sass', 'index', 'pug', 'script', 'pde', 'browser-sync', 'watch']);
