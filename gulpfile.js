var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
 
gulp.task('default', function () {
  return gulp.src(['views/*.html','partials/*.html'])
    .pipe(templateCache( "templates.js",{module:"ISTE"}   ))
    .pipe(gulp.dest('templatesCache'));
});