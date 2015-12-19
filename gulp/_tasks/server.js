import { runServer } from '../lib/server';

export default (gulp, plugins, defaults) => {
  return {
    'run-server': {
      fn: runServer(gulp, plugins, defaults),
      description: 'Runs the application server. When server files get changed, re-runs it and reloads the browser.'
    }
  };
};
