import gulpLoadPlugins from 'gulp-load-plugins';
// import taskLoader from 'gulp-commonjs-tasks/task-loader';

import defaults from './defaults';

import { compileBabel } from './lib/babel';
import { compileBrowserify, watchBrowserify } from './lib/browserify';
import { runBrowsersyncServer }  from './lib/browsersync';
import { cleanDirectory } from './lib/clean';
import { compileCopy } from './lib/copy';
import { compileImages } from './lib/images';
import { compileLess } from './lib/less';
import { run } from './lib/run';
import { runServer, runStaticServer } from './lib/server';
import { runTests, watchTests } from './lib/tests';
import { watchCompilers } from './lib/watch';

//export default function start() {
//  const plugins = gulpLoadPlugins({ lazy: false });
//  const taskContext = taskLoader.load(`${__dirname}/tasks`, gulp, plugins, defaults);
//  taskContext.addHelpTask();
//}

export default function start(gulp) {
  const plugins = gulpLoadPlugins({ lazy: false });

  function wrap(fn) {
    return fn(gulp, plugins, defaults);
  }

  gulp.task('browsersync-server', wrap(runBrowsersyncServer));
  gulp.task('clean-directory', wrap(cleanDirectory));
  gulp.task('compile-babel', wrap(compileBabel));
  gulp.task('compile-browserify', wrap(compileBrowserify));
  gulp.task('compile-copy', wrap(compileCopy));
  gulp.task('compile-images', wrap(compileImages));
  gulp.task('compile-less', wrap(compileLess));
  gulp.task('default', [ 'run' ]);
  gulp.task('run', wrap(run));
  gulp.task('run-server', wrap(runServer));
  gulp.task('run-static-server', wrap(runStaticServer));
  gulp.task('run-tests', wrap(runTests));
  gulp.task('watch-browserify', wrap(watchBrowserify));
  gulp.task('watch-compilers', wrap(watchCompilers));
  gulp.task('watch-tests', wrap(watchTests));
}
