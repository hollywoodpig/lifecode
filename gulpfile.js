const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const webpack = require('webpack-stream')
const sass = require('gulp-sass')
const sassGlob = require('gulp-sass-glob')
const autoprefixer = require('gulp-autoprefixer')
const ejs = require('gulp-ejs')
const rename = require('gulp-rename')
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')

const browserSyncServe = () => {
  browserSync.init({
    server: { baseDir: 'public' },
    notify: false,
    online: true,
    open: false
  })
} 

const scripts = () => {
  return gulp.src('src/js/**/*.js')
    .pipe(webpack({
      mode: 'production',
      performance: { hints: false },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
      output: {
        filename: 'app.js'
      }
    }))
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.stream())
}

const styles = () => {
  return gulp.src('src/scss/app.scss')
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream())
}

const ejsServe = () => {
  return gulp.src('src/ejs/*.ejs')
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('public'))
    .pipe(browserSync.stream())
}

const images = () => {
  return gulp.src('src/img/**/*')
    .pipe(newer('public/img'))
    .pipe(imagemin())
    .pipe(gulp.dest('public/img'))
}

const fonts = () => {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('public/fonts'))
}

const watch = () => {
  gulp.watch('src/scss/**/*.scss', styles)
  gulp.watch('src/js/**/*.js', scripts)
  gulp.watch('src/ejs/**/*.ejs', ejsServe)
  gulp.watch('src/img/**/*', images)
}

exports.browserSync = browserSyncServe
exports.scripts = scripts
exports.styles = styles
exports.ejsServe = ejsServe
exports.images = images
exports.fonts = fonts

exports.default = gulp.parallel(ejsServe, styles, scripts, images, fonts, browserSyncServe, watch)
