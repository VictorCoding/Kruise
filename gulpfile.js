var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app',      
      routes: {
          "/bower_components": "./bower_components"
      }
    }
  });

  gulp.watch(['**/*.html', '**/*.css', '**/*.js'], {cwd: 'app'}, reload);
});