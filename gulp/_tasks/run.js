import { run } from '../lib/run';

export default (gulp, plugins, defaults) => {
  return {
    'run': {
      fn: run(gulp, plugins, defaults),
      description: 'Runs all the tasks. In parallel where applicable and in series otherwise.'
    }
  };
};
