module.exports = function() {
  $.gulp.task('image:dev', function() {
    return $.gulp.src($.path.src + '/img/**/*.{png,svg,jpg,jpeg,gif,webp}')
      .pipe($.gulp.dest($.path.assets + '/img/'))
  })
}

