var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('default', ['compress', 'watch']);


var paths = {
  scripts: ['lib'],
};

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['lib']);
});

gulp.task('compress', function() {
  gulp.src('lib/*.js')
    .pipe(minify({
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});