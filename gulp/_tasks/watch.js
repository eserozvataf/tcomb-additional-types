import { watchCompilers } from '../lib/watch';

export default (gulp, plugins, defaults) => {
  return {
    'watch-compilers': {
      fn: watchCompilers(gulp, plugins, defaults),
      description: 'Re-compiles files on changes.'
    }
  };
};

