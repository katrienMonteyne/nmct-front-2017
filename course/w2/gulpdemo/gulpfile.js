var gulp = require("gulp"),
    autoprefixer = require("gulp-autoprefixer"),
    cleanCSS = require("gulp-clean-css"),
    csslint = require("gulp-csslint"),
    concat = require("gulp-concat");


const PATHS = {
  CSS : {
    SRC : './src/css/**/*.css',
    DEST: './dist/css'
  }
};

const AUTOPREFIXOPTIONS = {
  browsers: ['last 2 versions']
}

gulp.task("default", function(){
  var cssWatcher = gulp.watch(PATHS.CSS.SRC, ['css']);
  cssWatcher.on('change', function(event){
    console.log("file: " + event.path + " was " + event.type);
  });
});

gulp.task("css", function(){
  gulp.src(PATHS.CSS.SRC)
      //.pipe(autoprefixer())
      .pipe(csslint())
      .pipe(concat("base.min.css"))
      .pipe(cleanCSS())
      .pipe(gulp.dest(PATHS.CSS.DEST));
});
