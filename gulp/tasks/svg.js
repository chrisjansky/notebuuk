var
  gulp = require("gulp"),
  vinyl = require("vinyl-paths"),
  del = require("del"),
  plugins = require("gulp-load-plugins")({
    pattern: ["gulp-*"]
  }),
  config = require("../gulpconfig.json");

// Delete the PNG fallbacks/ folder.
gulp.task("svg:wipe", function() {
  return gulp.src([config.dev.fallbacks, config.dev.svgBuildGlob], {read: false})
    .pipe(vinyl(del));
});

// Optimize SVG.
gulp.task("svg:optimize", ["svg:wipe"], function() {
  return gulp.src(config.dev.svgSourceGlob)
    .pipe(plugins.imagemin())
    .pipe(gulp.dest(config.dev.svgBuild));
});

gulp.task("svg:combine", ["svg:optimize"], function() {
  return gulp.src(config.dev.svgBuildGlob)
    .pipe(plugins.svgSprites({
      mode: "symbols",
      svg: {
        symbols: "complete.svg"
      },
      preview: {
        symbols: "index.html"
      }
    }))
    .pipe(plugins.size({
      showFiles: true
    }))
    .pipe(gulp.dest(config.dev.svg));
});

// Render PNG fallbacks for SVG.
gulp.task("svg", ["svg:combine"], function() {
  // WTF error, needs src with ".svg".
  return gulp.src(config.dev.svgBuildGlob + ".svg")
    .pipe(plugins.svg2png())
    .pipe(gulp.dest(config.dev.fallbacks));
});
