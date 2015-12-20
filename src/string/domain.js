const validator = require('validator');
const t = require('tcomb-form');

// FQDN
const Domain = t.refinement(t.String, validator.isFQDN);

Domain.getValidationErrorMessage = (value, path, context) => 'Must be a domain.';

module.exports = Domain;
