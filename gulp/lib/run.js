import browserSync from 'browser-sync';
import runSequence1 from 'run-sequence';

export function run(gulp, plugins, defaults) {
  const runSequence = runSequence1.use(gulp);

  return cb => {
    runSequence(
      'clean-directory',

      [
        'compile-babel',
        'compile-copy',
        'compile-images',
        'compile-less'
      ],

      'compile-browserify',
      'run-tests',

      [
        'run-server',
        // 'run-static-server',
        //'browsersync-server',
        'watch-browserify',
        'watch-tests',
        'watch-compilers'
      ]
    );
  };
}
