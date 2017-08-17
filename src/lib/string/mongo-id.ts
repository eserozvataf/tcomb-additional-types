import validator = require('validator');
import t = require('tcomb');

// MongoId
const MongoId = t.refinement(t.String, validator.isMongoId);

// MongoId.getValidationErrorMessage = (value, path, context) => 'Must be a valid MongoDB id.';

export {
    MongoId,
};

export default MongoId;
