<<<<<<< HEAD
import gulp from 'gulp';
=======
'use strict';
import gulp from 'gulp';
import babel from 'gulp-babel';
>>>>>>> eb674f029a66be17ce721ae9a5f2d7a8a49db09f
import pug from 'gulp-pug';
import sass from 'gulp-sass';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import del from 'del';
import stream from 'webpack-stream';
import webpack from 'webpack';
<<<<<<< HEAD
import chalk from 'chalk';
import plumber from 'gulp-plumber';
import cfg from './webpack.config';

const PATCH = {
  src: {
    views: './src/pug/*.pug',
    styles: './src/scss/*.scss',
    jsBundle: './src/**/*.js',
    bundle: './src/app.js',
  },
  dist: {
    views: './dist',
    styles: './dist/css',
    js: './dist/js',
    cssBundle: 'main.css',
  },
};
const reload = browserSync.reload;
const lPrefix = 'IBK';
const onError = (err) => {
  console.log(chalk.red(err));
};

gulp.task('stream', () =>
  gulp.src(PATCH.src.bundle)
      .pipe(plumber({
        errorHandler: onError,
      }))
      .pipe(stream(cfg, webpack, (err, stats) => {
        if (err) {
          console.log(chalk.red(`[webpack:errors] ${stats.compilation.errors.toString}`));
          console.log(chalk.red(`[webpack:warnings] ${stats.compilation.warnings.toString}`));
          console.log('webpack compile success.');
        }
      }))
      .pipe(gulp.dest(PATCH.dist.js)),
);

gulp.task('views', () =>
  gulp.src(PATCH.src.views)
    .pipe(plumber({
      errorHandler: onError,
    }))
    .pipe(pug())
    .pipe(gulp.dest(PATCH.dist.views)),
);


gulp.task('style', () =>
  gulp.src(PATCH.src.styles)
    .pipe(plumber({
      errorHandler: onError,
    }))
    .pipe(sourcemaps.init())
    .pipe(sass.sync())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(PATCH.dist.styles)),
);

gulp.task('build:style', () =>
  gulp.src(PATCH.src.styles)
    .pipe(plumber({
      errorHandler: onError,
    }))
    .pipe(sass.sync())
    .pipe(csso())
    .pipe(rename(PATCH.dist.cssBundle))
    .pipe(gulp.dest(PATCH.dist.styles)),
);

gulp.task('clean', () =>
  del(['.tmp', 'dist/*'], { dot: true }),
=======
import cfg from  './webpack.config.js'

const PATCH = {
  'src': {
    'views': './src/pug/*.pug',
    'styles': './src/scss/*.scss',
    'jsBundle':'./src/**/*.js',
    'bundle':'./src/app.js'
  },
  'dist': {
    'views':'./dist',
    'styles': './dist/css',
    'js' : './dist/js',
    'cssBundle':'main.css'
  }
};
const reload = browserSync.reload;
const lPrefix = 'IBK';

gulp.task('stream', ()=>
  gulp.src(PATCH.src.bundle)
      .pipe(stream(cfg, webpack))
      .pipe(gulp.dest(PATCH.dist.js))
);

gulp.task('views', ()=>
  gulp.src(PATCH.src.views)
    .pipe(pug())
    .pipe(gulp.dest(PATCH.dist.views))
);


gulp.task('style', ()=>
  gulp.src(PATCH.src.styles)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(PATCH.dist.styles))
);

gulp.task('build:style', ()=>
  gulp.src(PATCH.src.styles)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(csso())
    .pipe(rename(PATCH.dist.cssBundle))
    .pipe(gulp.dest(PATCH.dist.styles))
);

gulp.task('clean', ()=>
  del(['.tmp', 'dist/*'], {dot: true})
>>>>>>> eb674f029a66be17ce721ae9a5f2d7a8a49db09f
);

gulp.task('serve', () => {
  browserSync({
    notify: false,
    logPrefix: lPrefix,
    scrollElementMapping: ['main', '.mdl-layout'],
    server: ['.tmp', PATCH.dist.views],
<<<<<<< HEAD
    port: 3000,
=======
    port: 3000
>>>>>>> eb674f029a66be17ce721ae9a5f2d7a8a49db09f
  });

  gulp.watch([PATCH.src.views], ['views', reload]);
  gulp.watch([PATCH.src.styles], ['style', reload]);
<<<<<<< HEAD
  gulp.watch([PATCH.src.bundle, PATCH.src.jsBundle], ['stream', reload]);
});

gulp.task('build', ['clean', 'views', 'build:style', 'stream']);
=======
  gulp.watch([PATCH.src.bundle, PATCH.src.jsBundle], ['stream', reload])

});

gulp.task('build',['clean','views','build:style','stream']);
>>>>>>> eb674f029a66be17ce721ae9a5f2d7a8a49db09f
gulp.task('default', ['serve']);
