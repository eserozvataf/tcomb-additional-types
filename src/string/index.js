const alpha = require('./alpha');
const alphaNumeric = require('./alpha-numeric');
const base64 = require('./base64');
const creditCard = require('./credit-card');
const domain = require('./domain');
const email = require('./email');
const hexColor = require('./hex-color');
const ip = require('./ip');
const isbn = require('./isbn');
const json = require('./json');
const lowerCase = require('./lower-case');
const macAddress = require('./mac-address');
const mobilePhone = require('./mobile-phone');
const mongoId = require('./mongo-id');
const upperCase = require('./upper-case');
const url = require('./url');
const uuid = require('./uuid');

module.exports = {
  'Alpha': alpha,
  'AlphaNumeric': alphaNumeric,
  'Base64': base64,
  'CreditCard': creditCard,
  'Domain': domain,
  'Email': email,
  'HexColor': hexColor,
  'IP': ip,
  'ISBN': isbn,
  'JSON': json,
  'LowerCase': lowerCase,
  'MacAddress': macAddress,
  'MobilePhone': mobilePhone,
  'MongoId': mongoId,
  'UpperCase': upperCase,
  'URL': url,
  'UUID': uuid
};
