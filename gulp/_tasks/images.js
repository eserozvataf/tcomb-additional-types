import { compileImages } from '../lib/images';

export default (gulp, plugins, defaults) => {
  return {
    'compile-images': {
      fn: compileImages(gulp, plugins, defaults),
      description: 'Optimizes the size of all image files.'
    }
  };
};
