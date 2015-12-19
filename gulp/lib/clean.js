export function cleanDirectory(gulp, plugins, defaults) {
  return () => {
    return gulp.src(`${defaults.paths.target}/*`, { read: false })
      .pipe(plugins.rimraf());
  };
}
