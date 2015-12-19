import validator from 'validator';
import t from 'tcomb-form';

// Alpha
export const alpha = t.refinement(t.String, validator.isAlpha);

alpha.getValidationErrorMessage = (value, path, context) => 'May only contain letters.';

// Alphanumeric
export const alphanumeric = t.refinement(t.String, validator.isAlphanumeric);

alphanumeric.getValidationErrorMessage = (value, path, context) => 'May only contain alphanumeric characters.';

// Base64
export const base64 = t.refinement(t.String, validator.isBase64);

base64.getValidationErrorMessage = (value, path, context) => 'Must be a Base64 string.';

// Boolean
export const boolean = t.refinement(t.String, validator.isBoolean);

boolean.getValidationErrorMessage = (value, path, context) => 'Must be a Boolean.';

// CreditCard
export const creditcard = t.refinement(t.String, validator.isCreditCard);

creditcard.getValidationErrorMessage = (value, path, context) => 'Must be a valid credit card number.';

// Date
export const date = t.refinement(t.String, validator.isDate);

date.getValidationErrorMessage = (value, path, context) => 'Must be a valid date.';

// Decimal
export const decimal = t.refinement(t.String, validator.isDecimal);

decimal.getValidationErrorMessage = (value, path, context) => 'Must be a decimal number.';

// Email
export const email = t.refinement(t.String, validator.isEmail);

email.getValidationErrorMessage = (value, path, context) => 'Must be a valid email address.';

// FQDN
export const fqdn = t.refinement(t.String, validator.isFQDN);

fqdn.getValidationErrorMessage = (value, path, context) => 'Must be a domain name.';

// Float
export const float = t.refinement(t.String, validator.isFloat);

float.getValidationErrorMessage = (value, path, context) => 'Must be a floating point number (1.2).';

// HexColor
export const hexcolor = t.refinement(t.String, validator.isHexColor);

hexcolor.getValidationErrorMessage = (value, path, context) => 'Must be a hexadecimal color (#336699).';

// Hexadecimal
export const hexadecimal = t.refinement(t.String, validator.isHexadecimal);

hexadecimal.getValidationErrorMessage = (value, path, context) => 'Must be a hexadecimal number (0x19F).';

// IP
export const ip = t.refinement(t.String, validator.isIP);

ip.getValidationErrorMessage = (value, path, context) => 'Must be a valid IP address (x.x.x.x).';

// ISBN
export const isbn = t.refinement(t.String, validator.isISBN);

isbn.getValidationErrorMessage = (value, path, context) => 'Must be a valid ISBN.';

// ISO8061Date
// export const iso8061 = t.refinement(t.String, validator.isISO8061);
// 
// iso8061.getValidationErrorMessage = (value, path, context) => 'Must be a valid ISO8061 date.';

// Integer
export const integer = t.refinement(t.String, validator.isInt);

integer.getValidationErrorMessage = (value, path, context) => 'Must be an integer number.';

// JSON
export const json = t.refinement(t.String, validator.isJSON);

json.getValidationErrorMessage = (value, path, context) => 'Must be valid JSON.';

// Lowercase
export const lowercase = t.refinement(t.String, validator.isLowercase);

lowercase.getValidationErrorMessage = (value, path, context) => 'Must be only lower case characters.';

// MACAddress
export const macaddress = t.refinement(t.String, validator.isMACAddress);

macaddress.getValidationErrorMessage = (value, path, context) => 'Must be a valid MAC address.';

// MobilePhone
export const mobilephone = t.refinement(t.String, validator.isMobilePhone);

mobilephone.getValidationErrorMessage = (value, path, context) => 'Must be a valid mobile phone number.';

// MongoId
export const mongoid = t.refinement(t.String, validator.isMongoId);

mongoid.getValidationErrorMessage = (value, path, context) => 'Must be a valid MongoDB id.';

// Numeric
export const numeric = t.refinement(t.String, validator.isNumeric);

numeric.getValidationErrorMessage = (value, path, context) => 'Must be a number.';

// URL
export const url = t.refinement(t.String, validator.isURL);

url.getValidationErrorMessage = (value, path, context) => 'Must be a valid URL.';

// UUID
export const uuid = t.refinement(t.String, validator.isUUID);

uuid.getValidationErrorMessage = (value, path, context) => 'Must be a valid UUID.';

// Uppercase
export const uppercase = t.refinement(t.String, validator.isUppercase);

uppercase.getValidationErrorMessage = (value, path, context) => 'Must be only upper case characters.';
