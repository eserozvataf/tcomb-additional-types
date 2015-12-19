// TODO: uglify. Only in production? Does that work with source maps?
// TODO: Only do source maps in development.
export function compileBabel(gulp, plugins, defaults) {
  return () => {
    return gulp.src(`${defaults.paths.source}/**/*.js`)
      .pipe(plugins.changed(defaults.paths.target))
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.babel({
        presets: [ 'es2015', 'react', 'stage-0', 'stage-1', 'stage-2', 'stage-3' ]
      }))
      .pipe(plugins.sourcemaps.write())
      .pipe(plugins.size())
      .pipe(gulp.dest(defaults.paths.target));
  };
}
