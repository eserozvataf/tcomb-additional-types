import url from 'url';

import browserSync from 'browser-sync';
import proxy from 'proxy-middleware';

// TODO: Magic Variables -> Defaults
// TODO: Defaults -> Commandline option overrides.
export function runBrowsersyncServer(gulp, plugins, defaults) {
  return cb => {
    const proxyOptions = url.parse(`http://localhost:4000/api`);

    proxyOptions.route = '/api';

    browserSync({
      open: true,
      port: 3000,
      server: {
        baseDir: `${defaults.paths.target}/client`,
        middleware: [ proxy(proxyOptions) ]
      },
      reloadDebounce: 2000
    });
  };
}
