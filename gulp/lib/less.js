import browserSync from 'browser-sync';

export function compileLess(gulp, plugins, defaults) {
  return () => {
    return gulp.src(`${defaults.paths.source}/client/styles/app.less`)
      .pipe(plugins.changed(defaults.paths.target))
      .pipe(plugins.less())
      .pipe(plugins.minifyCss())
      .pipe(plugins.size())
      .pipe(gulp.dest(`${defaults.paths.target}/client/css`))
      .pipe(browserSync.reload({ stream: true }));
  };
}
