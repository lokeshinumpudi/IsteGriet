var gulp = require('gulp');
var concat = require('gulp-concat');

var uglify = require('gulp-uglify');
var pump = require('pump');
var uglifycss = require('gulp-uglifycss');
var templateCache = require('gulp-angular-templatecache');

gulp.task('templatesCompile', function () {
  gulp.src(['views/*.html', 'partials/*.html'])
    .pipe(templateCache("templates.js", {
      module: "ISTE"
    }))
    .pipe(gulp.dest('templatesCache'));
});

// gulp.task('compress', function () {
//   pump([
//     gulp.src(["./app.js","templatesCache/templates.js", "services/dataService.js", "directives/renderDescription.js", "controllers/homeCtrl.js", "controllers/eventsCtrl.js", "controllers/eventDetailCtrl.js", "controllers/teamCtrl.js", "controllers/aboutCtrl.js", "controllers/melaCtrl.js", "controllers/contactCtrl.js"]),
//     concat("app.min.js"),
//     uglify(),
//     gulp.dest('./'),
    
//   ]);
// });


gulp.task("css", function () {
  return gulp.src(["./appFonts.css", "./app.css"])
    .pipe(concat("app.min.css"))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest("./"));

  // pump(
  //   gulp.src(["./appFonts.css", "./app.css"]),
  //   uglifycss({
  //     "maxLineLen": 80,
  //     "uglyComments": true
  //   }),
  //   gulp.dest("./app.min.css")
  // );
}); //css

gulp.task("default", ['templatesCompile', "css"]);