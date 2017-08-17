import validator = require('validator');
import t = require('tcomb');

// CreditCard
const CreditCard = t.refinement(t.String, validator.isCreditCard);

// CreditCard.getValidationErrorMessage = (value, path, context) => 'Must be a valid credit card number.';

export {
    CreditCard,
};

export default CreditCard;
