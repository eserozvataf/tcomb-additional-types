import validator = require('validator');
import t = require('tcomb');

// ISBN
const ISBN = t.refinement(t.String, validator.isISBN);

// ISBN.getValidationErrorMessage = (value, path, context) => 'Must be a valid ISBN.';

export {
    ISBN,
};

export default ISBN;
