import { compileBabel } from '../lib/babel';

export default (gulp, plugins, defaults) => {
  return {
    'compile-babel': {
      fn: compileBabel(gulp, plugins, defaults),
      description: 'Compiles all .js files from ES2015 to ES5.'
    }
  };
};
