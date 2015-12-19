import browserSync from 'browser-sync';

export function compileCopy(gulp, plugins, defaults) {
  return () => {
    return gulp.src(`${defaults.paths.source}/**/*.!(gif|jpg|png|svg|less|js)`)
      .pipe(plugins.changed(defaults.paths.target))
      .pipe(plugins.size())
      .pipe(gulp.dest(defaults.paths.target))
      .pipe(browserSync.reload({ stream: true }));
  };
}
