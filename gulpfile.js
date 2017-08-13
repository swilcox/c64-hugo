var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    hash         = require("gulp-hash"),
    del          = require("del")


// Compile SCSS files to CSS
gulp.task("scss", function () {
    gulp.src("src/scss/**/*.scss")
        .pipe(sass({
            outputStyle : "compressed"
        }))
        .pipe(autoprefixer({
            browsers : ["last 20 versions"]
        }))
        .pipe(gulp.dest("static/css"))
})

// copy images
gulp.task("images", function () {
    del(["static/images/**/*"])
    gulp.src("src/images/**/*")
        .pipe(gulp.dest("static/images"))
})

// copy fonts
gulp.task("fonts", function () {
    del(["static/fonts/**/*"])
    gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("static/fonts"))
})

// copy javascript
gulp.task("js", function () {
    del(["static/js/**/*"])
    gulp.src("src/js/**/*")
        .pipe(gulp.dest("static/js"))
})

// Watch asset folder for changes
gulp.task("watch", ["scss", "images", "js", "fonts"], function () {
    gulp.watch("src/scss/**/*", ["scss"])
    gulp.watch("src/images/**/*", ["images"])
    gulp.watch("src/js/**/*", ["js"])
    gulp.watch("src/fonts/**/*", ["fonts"])
})

// Set watch as default task
gulp.task("default", ["watch"])
