const validator = require('validator');
const t = require('tcomb-form');

// UUID
const UUID = t.refinement(t.String, validator.isUUID);

UUID.getValidationErrorMessage = (value, path, context) => 'Must be a valid UUID.';

module.exports = UUID;
