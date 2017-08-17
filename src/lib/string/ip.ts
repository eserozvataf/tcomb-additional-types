import validator = require('validator');
import t = require('tcomb');

// IP
const IP = t.refinement(t.String, validator.isIP);

// IP.getValidationErrorMessage = (value, path, context) => 'Must be a valid IP address (x.x.x.x).';

export {
    IP,
};

export default IP;
