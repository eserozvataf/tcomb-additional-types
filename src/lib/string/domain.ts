import validator = require('validator');
import t = require('tcomb');

// FQDN
const Domain = t.refinement(t.String, validator.isFQDN);

// Domain.getValidationErrorMessage = (value, path, context) => 'Must be a domain.';

export {
    Domain,
};

export default Domain;
