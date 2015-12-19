import { exists } from 'fs';

import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import gutil from 'gulp-util';
import source from 'vinyl-source-stream';
import watchify from 'watchify';

import browserSync from 'browser-sync';

let browserifyBundle;

function getBundle(gulp, plugins, defaults, path) {
  return browserify({
    entries: path,
    // debug: true,
    transform: []
  });
}

function runBundle(gulp, plugins, defaults) {
  return (bundle, cb) => {
    bundle
      .bundle()
      .pipe(source('app.bundle.js'))
      .pipe(gulp.dest(`${defaults.paths.target}/client/js`))
      .on('end', cb)
      .pipe(browserSync.reload({ stream: true }));
  };
}

export function compileBrowserify(gulp, plugins, defaults) {
  return (cb) => {
    const path = `${defaults.paths.target}/client/js/app.js`;

    exists(path, (doesExist) => {
      if (!doesExist) {
        return cb();
      }

      const bundle = getBundle(gulp, plugins, defaults, path);

      runBundle(gulp, plugins, defaults)(bundle, cb);
    });
  };
}

export function watchBrowserify(gulp, plugins, defaults) {
  return cb => {
    const path = `${defaults.paths.target}/client/js/app.js`;

    exists(path, (doesExist) => {
      if (!doesExist) {
        return cb();
      }

      const bundle = watchify(getBundle(gulp, plugins, defaults, path));

      bundle.on('update', () => {
        runBundle(gulp, plugins, defaults)(bundle, () => {});
      });

      bundle.on('log', gutil.log);

      runBundle(gulp, plugins, defaults)(bundle, () => {});

      cb();
    });
  };
}
