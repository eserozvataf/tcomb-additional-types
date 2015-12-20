const validator = require('validator');
const t = require('tcomb-form');

// IP
const IP = t.refinement(t.String, validator.isIP);

IP.getValidationErrorMessage = (value, path, context) => 'Must be a valid IP address (x.x.x.x).';

module.exports = IP;
