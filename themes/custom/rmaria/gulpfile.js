const gulp = require('gulp');
const babel = require('gulp-babel');
const async = require('async');
const include = require('gulp-include');
const rename = require('gulp-rename');
const del = require('del');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const sassGlobing = require('node-sass-globbing');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const lint = require('gulp-eslint');
const lintConfig = require('./eslint.config.js');
const iconfont = require('gulp-iconfont');
const consolidate = require('gulp-consolidate');
const browserSync = require('browser-sync').create('RMaria');
const reload = browserSync.reload;


gulp.task('clean:all', () => {
  return del([
    'build/**/*.*'
  ]);
});

gulp.task('sync:site', () => {
  var serverConf = {
    serve: {
      baseDir: './build'
    },
    open: false,
    injectChanges: true
  };
  browserSync.init(serverConf);
});


/**
* TASK: Create MSL-Glyphicon Font
*/
gulp.task('iconfont', function (done) {
  // var runTimestamp = Math.round(Date.now() / 1000);

  // var iconStream = gulp.src(['source/svg-icons/*.svg'])
  //   .pipe(iconfont({
  //     centerHorizontally: true,
  //     fontHeight: 1001,
  //     fontName: 'msl-glyphicon',
  //     formats: ['ttf', 'eot', 'woff'],
  //     normalize: true,
  //     prependUnicode: true,
  //     timestamp: runTimestamp // recommended to get consistent builds when watching files
  //   }));

  // async.parallel([
  //   function handleGlyphs(cb) {
  //     iconStream.on('glyphs', function (glyphs, options) {
  //       gulp.src('_config/glyphicon/_msl-font-glyphicon.scss')
  //         .pipe(consolidate('lodash', {
  //           glyphs: glyphs,
  //           fontName: 'msl-glyphicon',
  //           fontPath: '../fonts/msl-glyphicon/',
  //           className: 'icon'
  //         }))
  //         .pipe(gulp.dest('source/css/vendors/'));
  //     });
  //   },
  //   function handleFonts(cb) {
  //     iconStream
  //       .pipe(gulp.dest('source/fonts/msl-glyphicon/'))
  //       .on('finish', cb);
  //   }
  // ], done);
});

gulp.task('fontawesome', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('./build/fonts/fa'))
});

gulp.task('prod:styles', () => {
  gulp.src('source/css/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: require('node-normalize-scss').includePaths,
      importer: sassGlobing
    })
    .on('error', sass.logError))
    .pipe(autoprefixer()) // Config file: ./browserslist
    .pipe(cleanCSS())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./build/css/'))
    .pipe(reload({stream: true}));
});

gulp.task('dev:styles', () =>
  gulp.src('source/css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded', // 'uncompressed',
      includePaths: require('node-normalize-scss').includePaths,
      importer: sassGlobing
    })
    .on('error', sass.logError))
    .pipe(autoprefixer()) // Config file: ./browserslist
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/css/'))
    .pipe(reload({stream: true}))
);

gulp.task('dev:scripts', () =>
  gulp.src(['source/js/main.js'])
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(include())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(rename({basename: 'bundle'}))
    .on('error', (err) => {
      gutil.log(gutil.colors.red('[Compilation Error]'));
      gutil.log(gutil.colors.red(err.message));
    })
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/js/'))
    .pipe(reload({stream: true}))
);

gulp.task('prod:scripts', () => {
  gulp.src(['source/js/main.js'])
    .pipe(plumber())
    .pipe(include())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(rename({basename: 'bundle'}))
    .on('error', (err) => {
      gutil.log(gutil.colors.red('[Compilation Error]'));
      gutil.log(gutil.colors.red(err.message));
    })
    .pipe(minify({
      ext: {
        src: '.debug.js',
        min: '.js'
      },
      exclude: ['tasks'],
      ignoreFiles: []
    }))
    .pipe(gulp.dest('./build/js/'))
    .pipe(reload({stream: true}));
});

gulp.task('lint', () =>
   gulp.src('source/js/!(libraries)**/*.js')
  .pipe(lint(lintConfig))
  .pipe(lint.format())
);


// Copy Static Assets
// --------------
gulp.task('copy:fonts', () =>
  gulp.src('source/fonts/**/*.*')
    .pipe(gulp.dest('./build/fonts/'))
    .pipe(reload({stream: true}))
);

gulp.task('copy:assets', () =>
  gulp.src('source/assets-production/**/*.*')
    .pipe(gulp.dest('./build/'))
    .pipe(reload({stream: true}))
);


// Build: Development & Production
gulp.task('dev:build', ['clean:all', 'dev:styles', 'dev:scripts', 'lint', 'fontawesome', 'copy:fonts', 'copy:assets']);
gulp.task('prod:build', ['clean:all', 'prod:styles', 'prod:scripts', 'lint', 'fontawesome', 'copy:fonts', 'copy:assets']);

// BrowserSync with Drupal
gulp.task('sync', ['sync:site']);

// Watch for Development
gulp.task('dev:watch', () => {
  gulp.watch('source/css/**/*.scss', ['dev:styles']);
  gulp.watch('source/js/**/*.js', ['lint', 'dev:scripts']);
  gulp.watch('source/fonts/**/*.*', ['copy:fonts']);
  gulp.watch('source/assets-production/**/*.*', ['copy:assets']);
});

gulp.task('default', ['dev:build', 'sync', 'dev:watch']);
gulp.task('server', ['dev:build', 'dev:watch']);