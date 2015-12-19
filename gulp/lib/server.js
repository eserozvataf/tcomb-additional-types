import { exists } from 'fs';
import { createServer } from 'http';

import browserSync from 'browser-sync';
import nodeStatic from 'node-static';

export function runServer(gulp, plugins, defaults) {
  return cb => {
    const path = `${defaults.paths.target}/server/app.js`;

    exists(path, (doesExist) => {
      if (!doesExist) {
        return cb();
      }

      plugins.developServer.listen({
        path: path
      });

      plugins.saneWatch(`${defaults.paths.target}/server/**/*`, { debounce: 300 }, () => {
        plugins.developServer.restart(() => {
          browserSync.reload();
        });
      });

      cb();
    });
  };
}

export function runStaticServer(gulp, plugins, defaults) {
  console.log(1);

  return cb => {
    console.log(2);

    const path = `${defaults.paths.target}/client`;

    exists(path, (doesExist) => {
      console.log(3);

      if (!doesExist) {
        return cb();
      }

      console.log(4);

      const fileServer = new nodeStatic.Server('./build/client');

      const server = createServer((request, response) => {
        console.log('req', request.url);

        request.addListener('end', () => {
          console.log('req end');

          fileServer.serve(request, response);
        });
      });

      server.listen(8080);

      console.log(5);

      cb();
    });
  }
}
