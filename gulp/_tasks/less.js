import { compileLess } from '../lib/less';

export default (gulp, plugins, defaults) => {
  return {
    'compile-less': {
      fn: compileLess(gulp, plugins, defaults),
      description: 'Compiles all .less files from LESS to CSS.'
    }
  };
};
