const validator = require('validator');
const t = require('tcomb-form');

// MongoId
const MongoId = t.refinement(t.String, validator.isMongoId);

MongoId.getValidationErrorMessage = (value, path, context) => 'Must be a valid MongoDB id.';

module.exports = MongoId;
