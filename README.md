This project originally forked from [tcomb-form-types](https://github.com/Industrial/tcomb-form-types), thanks to all contributor and maintainers.

## Installation
```
npm install --save tcomb-additional-types
```

## Usage
```js
const tx = require('tcomb-additional-types');
// or
import * as tx from 'tcomb-additional-types';

const test = t.struct({
  alpha: tx.String.Alpha,
  alphanumeric: tx.String.Alphanumeric,
  base64: tx.String.Base64,
  creditcard: tx.String.CreditCard,
  decimal: tx.Number.Decimal,
  email: tx.String.Email,
  float: tx.Number.Float,
  hexadecimal: tx.String.Hexadecimal,
  hexcolor: tx.String.HexColor,
  ip: tx.String.IP,
  isbn: tx.String.ISBN,
  iso8601: tx.String.ISO8601,
  integer: tx.Number.Integer,
  json: tx.String.JSON,
  lowercase: tx.String.LowerCase,
  macaddress: tx.String.MacAddress,
  md5: tx.String.MD5,
  mobilephone: tx.String.MobilePhone,
  mongoid: tx.String.MongoId,
  url: tx.String.URL,
  uuid: tx.String.UUID,
  uppercase: tx.String.UpperCase,
});
```
