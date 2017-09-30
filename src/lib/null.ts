import t = require('tcomb');

// Null
const Null = t.irreducible('Null', (val) => val === null);

// Null.getValidationErrorMessage = (value, path, context) => 'Must be a null value.';

export {
    Null,
};

export default Null;
