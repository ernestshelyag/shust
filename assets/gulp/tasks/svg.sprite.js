'use strict';

module.exports = function () {
  $.gulp.task('svgSprite', function () {
    return $.gulp.src($.config.static + 'sprite/*.svg')
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {
          xmlMode: true
        }
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: '../sprite.svg',
            example: {
              dest: '../tmp/spriteSvgDemo.html' // demo html
            }
          }
        }
      }))
      .pipe($.gulp.dest($.config.root + '/img'));
  });
};
