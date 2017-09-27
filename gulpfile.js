var gulp        = require('gulp'),
  plumber       = require('gulp-plumber'),
  rename        = require('gulp-rename'),
  sass          = require('gulp-sass'),
  minify        = require('gulp-csso'),
  concatCSS     = require('gulp-concat-css'),
  postcss       = require('gulp-postcss'),
  autoprefixer  = require('autoprefixer'),
  mqpacker      = require('css-mqpacker')
  uglify        = require('gulp-uglify'),
  bs            = require('browser-sync'),
  svgstore      = require('gulp-svgstore'),
  svgmin        = require('gulp-svgmin');

gulp.task('default', function() {
  bs.init({
    host: "172.20.10.3",
    server: {
      baseDir: "./",
      //proxy: "homework.sl"
    },
    notify: false
  });
  gulp.watch("src/sass/style.scss", ['sass']);
  gulp.watch("src/sass/media.scss", ['sass']);
  gulp.watch("src/js/main.js", ['js-min']);
  gulp.watch("index.html").on('change', bs.reload);

});

gulp.task('sass', function() {
  return gulp.src('src/sass/style.scss')
          .pipe(plumber())
          .pipe(sass())
          .pipe(postcss([ autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
          }),
          mqpacker({sort: true})
          ]))
          .pipe(rename('style.css'))
          .pipe(gulp.dest('src/css/'))
          .pipe(minify())
          .pipe(rename('style.min.css'))
          .pipe(gulp.dest('src/css/'))
          .pipe(gulp.dest('prod/css/'))
          .pipe(bs.stream());
});

gulp.task('js-min', function() {
  return gulp.src('src/js/main.js')
          .pipe(plumber())
          .pipe(uglify())
          .pipe(gulp.dest('prod/js/'))
          .pipe(bs.stream());
});

gulp.task('css-vendor', function() {
  return gulp.src('src/vendor/**/*.css')
          .pipe(plumber())
          .pipe(concatCSS('vendor.css'))
          .pipe(minify())
          .pipe(gulp.dest('src/vendor/'));
});

gulp.task('sprite', function() {
  return gulp.src('src/img/icons/*.svg')
          .pipe(svgmin())
          .pipe(svgstore({ inlineSvg: true }))
          .pipe(rename('icons.svg'))
          .pipe(gulp.dest('src/img/sprite/'));
});



// gulp.task('css-min', function() {
//  return gulp.src('')
//           .pipe(minify())
//           .pipe(rename('.min.css'))       
//           .pipe(gulp.dest(''));
// });

// gulp.task('concat', function() {
//  return gulp.src('')
//        .pipe(plumber())
//        .pipe(concatCSS('concatenated.css'))         
//        .pipe(gulp.dest(''));
// });