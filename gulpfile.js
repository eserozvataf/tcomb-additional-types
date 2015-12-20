var gulp = require('gulp');

// Enable ES6 code from here.
require('babel-register')({
  // TODO: Take these options from a shared configuration JSON file somewhere.
  presets: [ 'es2015', 'react', 'stage-0' ]
});

require('id-builder').default(gulp);
