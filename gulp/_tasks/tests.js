import { runTests, watchTests } from '../lib/tests';

export default (gulp, plugins, defaults) => {
  return {
    'run-tests': {
      fn: runTests(gulp, plugins, defaults),
      description: 'Runs all the tests with mocha.'
    },

    'watch-tests': {
      fn: watchTests(gulp, plugins, defaults),
      description: 'Re-runs all tests on any change.'
    }
  };
};
