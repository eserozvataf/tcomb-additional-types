import validator = require('validator');
import t = require('tcomb');

// UUID
const UUID = t.refinement(t.String, validator.isUUID);

// UUID.getValidationErrorMessage = (value, path, context) => 'Must be a valid UUID.';

export {
    UUID,
};

export default UUID;
