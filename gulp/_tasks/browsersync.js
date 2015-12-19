import { runServer } from '../lib/browsersync';

export default (gulp, plugins, defaults) => {
  return {
    'browsersync-server': {
      fn: runServer(gulp, plugins, defaults),
      description: 'Runs a HTTP server. Serves the front-end during development, proxies backend requests and automatically reloads all connected browsers/devices when changes occur anywhere in the pipeline that have affected the page.'
    }
  };
};
