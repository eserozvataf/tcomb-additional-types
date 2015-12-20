const validator = require('validator');
const t = require('tcomb-form');

// CreditCard
const CreditCard = t.refinement(t.String, validator.isCreditCard);

CreditCard.getValidationErrorMessage = (value, path, context) => 'Must be a valid credit card number.';

module.exports = CreditCard;
