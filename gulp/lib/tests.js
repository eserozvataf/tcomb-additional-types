import browserSync from 'browser-sync';

export function runTests(gulp, plugins, defaults) {
  return () => {
    return gulp.src(`${defaults.paths.source}/test/**/*.js`, { read: false })
      .pipe(plugins.mocha({
        recursive: true,
        reporter: 'spec'
      }));
  };
}

export function watchTests(gulp, plugins, defaults) {
  return () => {
    gulp.watch(`${defaults.paths.source}/**/*.js`, [ 'run-tests' ]);
  };
}
