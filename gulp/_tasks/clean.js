import { cleanDirectory } from '../lib/clean';

export default (gulp, plugins, defaults) => {
  return {
    'clean-directory': {
      fn: cleanDirectory(gulp, plugins, defaults),
      description: 'Cleans the build directory.'
    }
  };
};
