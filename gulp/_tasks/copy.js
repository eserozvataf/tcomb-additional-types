import { compileCopy } from '../lib/copy';

export default (gulp, plugins, defaults) => {
  return {
    'compile-copy': {
      fn: compileCopy(gulp, plugins, defaults),
      description: 'Copies all files that do not get compiled by other tasks.'
    }
  };
};
