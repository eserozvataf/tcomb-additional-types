import t = require('tcomb');
import { Null } from '../null';

// Nullable
const Nullable = t.union([ t.String, Null ]);

// Nullable.getValidationErrorMessage = (value, path, context) => 'Must be a valid nullable string.';

export {
    Nullable,
};

export default Nullable;
