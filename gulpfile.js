
const gulp = require('gulp');
const browsersync = require('browser-sync').create();


// BrowserSync server
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./src/"
        }
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// BrowserSync server
function watchFiles() {
  gulp.watch(
    [
      "./src/*.html",
      "./src/css/*.css",
    ],
    browserSyncReload);
}

// define complex task
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.watch = watch;
exports.default = watch;




