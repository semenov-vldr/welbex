$.gulp.task("reload", function (done) {
  $.browserSync.reload();
  done();
});

module.exports = function () {
  $.gulp.task("watch", function () {
    $.gulp.watch($.path.src + "/root/**/*.*", $.gulp.series("root:dev"));
    $.gulp.watch($.path.src + "/fonts/**/*.*", $.gulp.series("fonts:dev"));
    $.gulp.watch(
      $.path.src + "/video/*.{mp4,webm}",
      $.gulp.series("video:dev")
    );
    $.gulp.watch(
      $.path.src + "/img/**/*.{png,svg,jpg,jpeg,gif,webp}",
      $.gulp.series("image:dev")
    );
    $.gulp.watch(
      [
        $.path.src + "/pages/**/*.pug",
        $.path.src + "/layouts/**/*.pug",
        $.path.src + "/components/**/*.pug",
      ],
      $.gulp.series("pug", "reload")
    );
    $.gulp.watch(
      $.path.src + "/libs/**/*.css",
      $.gulp.series("style:libs:dev", "reload")
    );
    $.gulp.watch(
      [
        $.path.src + "/styles/**/*.sass",
        $.path.src + "/styles/**/*.css",
        $.path.src + "/components/**/*.sass",
      ],
      $.gulp.series("style:dev", "reload")
    );
    $.gulp.watch(
      $.path.src + "/libs/**/*.js",
      $.gulp.series("script:libs:dev", "reload")
    );
    $.gulp.watch(
      $.path.src + "/json/*.json",
      $.gulp.series("script:json:dev", "reload")
    );
    $.gulp.watch(
      [
        $.path.src + "/components/**/*.js",
        //$.path.src + "/components/index.js",
        $.path.src + "/scripts/**/*.js",
      ],
      $.gulp.series("script:dev", "reload")
    );
  });
};

// module.exports = function () {
//   $.gulp.task("watch", function () {
//     $.gulp.watch($.path.src + "/root/**/*.*", $.gulp.series("root:dev"));
//     $.gulp.watch($.path.src + "/fonts/**/*.*", $.gulp.series("fonts:dev"));
//     $.gulp.watch(
//       $.path.src + "/video/*.{mp4,webm}",
//       $.gulp.series("video:dev")
//     );
//     $.gulp.watch(
//       $.path.src + "/img/**/*.{png,svg,jpg,jpeg,gif,webp}",
//       $.gulp.series("image:dev")
//     );
//     $.gulp.watch(
//       [
//         $.path.src + "/pages/**/*.pug",
//         $.path.src + "/layouts/**/*.pug",
//         $.path.src + "/components/**/*.pug",
//       ],
//       $.gulp.series("pug")
//     );
//     $.gulp.watch(
//       $.path.src + "/libs/**/*.css",
//       $.gulp.series("style:libs:dev")
//     );
//     $.gulp.watch(
//       [$.path.src + "/styles/**/*.sass", $.path.src + "/styles/**/*.css", $.path.src + "/components/**/*.sass"],
//       $.gulp.series("style:dev")
//     );
//     $.gulp.watch(
//       $.path.src + "/libs/**/*.js",
//       $.gulp.series("script:libs:dev")
//     );
//     $.gulp.watch($.path.src + "/json/*.json", $.gulp.series("script:json:dev"));
//     $.gulp.watch(
//       [$.path.src + "/components/**/*.js", $.path.src + "/components/index.js", $.path.src + "/scripts/**/*.js"],
//       $.gulp.series("script:dev")
//     );
//   });
// };


