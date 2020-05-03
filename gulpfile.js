var gulp = require('gulp'),
  devip = require('dev-ip'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  minify = require('gulp-csso'),
  concatCSS = require('gulp-concat-css'),
  concat = require('gulp-concat'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  mqpacker = require('css-mqpacker'),
  uglify = require('gulp-uglify'),
  bs = require('browser-sync'),
  svgstore = require('gulp-svgstore'),
  svgmin = require('gulp-svgmin'),
  runSequence = require('run-sequence');

console.log('\n\n');
console.log('FIX BUILD:IMG FILES UPPERCASE EXTENSION');
console.log('\n\n');

gulp.task('default', function() {
  bs.init({
    host: devip(),
    server: {
      baseDir: './'
    },
    notify: false
  });
  gulp.watch('src/sass/style.scss', ['sass']);
  gulp.watch('src/sass/media.scss', ['sass']);
  gulp.watch('src/js/main.js', ['js-min']);
  gulp.watch('index.html').on('change', bs.reload);

  setTimeout(() => {
    console.log('\n\n');
    console.log('FIX BUILD:IMG FILES UPPERCASE EXTENSION');
    console.log('\n\n');
  }, 1000);
});

gulp.task('sass', function() {
  return gulp
    .src('src/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(
      postcss([
        autoprefixer({
          browsers: ['last 3 versions'],
          cascade: false
        }),
        mqpacker({ sort: true })
      ])
    )
    .pipe(rename('style.css'))
    .pipe(gulp.dest('src/css/'))
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('src/css/'))
    .pipe(gulp.dest('prod/css/'))
    .pipe(bs.stream());
});

gulp.task('css-vendor', function() {
  return gulp
    .src(['src/vendor/**/*.css', '!src/vendor/vendor.css'])
    .pipe(plumber())
    .pipe(concatCSS('vendor.css'))
    .pipe(minify())
    .pipe(gulp.dest('src/vendor/'));
});

gulp.task('js-vendor', function() {
  return gulp
    .src(['src/vendor/**/*.js', '!src/vendor/vendor.js'])
    .pipe(plumber())
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/vendor/'));
});

gulp.task('js-min', function() {
  return gulp
    .src('src/js/main.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('prod/js/'))
    .pipe(bs.stream());
});

gulp.task('sprite', function() {
  return gulp
    .src('src/img/icons/*.svg')
    .pipe(svgmin())
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('icons.svg'))
    .pipe(gulp.dest('src/img/sprite/'));
});

// BUILD tasks
gulp.task('css-concat', function() {
  return gulp
    .src(['src/vendor/vendor.css', 'prod/css/style.min.css'])
    .pipe(plumber())
    .pipe(concatCSS('main.css'))
    .pipe(minify())
    .pipe(gulp.dest('prod/css/'));
});

gulp.task('build:css', () => {
  runSequence('css-vendor', 'sass', 'css-concat');
});

gulp.task('js-concat', function() {
  return gulp
    .src(['src/vendor/vendor.js', 'prod/js/main.js'])
    .pipe(plumber())
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('prod/js/'));
});

gulp.task('build:js', () => {
  runSequence('js-vendor', 'js-min', 'js-concat');
});

gulp.task('build:files', () => {
  gulp.src(['src/img/**/*.*']).pipe(gulp.dest('prod/img'));
  gulp.src(['src/fonts/**/*.*']).pipe(gulp.dest('prod/fonts'));
});

gulp.task('build', ['build:files', 'build:css', 'build:js']);
