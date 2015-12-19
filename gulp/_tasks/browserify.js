import { compileBrowserify, watchBrowserify } from '../lib/browserify';

export default (gulp, plugins, defaults) => {
  return {
    'compile-browserify': {
      fn: compileBrowserify(gulp, plugins, defaults),
      description: 'Compiles all frontend javascript resources into one file.'
    },

    'watch-browserify': {
      fn: watchBrowserify(gulp, plugins, defaults),
      description: 'Compiles all frontend javascript resources into one file when changes occur.'
    }
  };
};
