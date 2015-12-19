Exports types for [tcomb-form](https://github.com/gcanti/tcomb-form).

## Installation
```
npm install --save tcomb-form-types
```

## Usage
```js
import t from 'tcomb-form';
import {
  alpha,
  alphanumeric,
  base64,
  boolean,
  creditcard,
  date,
  decimal,
  email,
  fqdn,
  float,
  hexcolor,
  hexadecimal,
  ip,
  isbn,
  integer,
  json,
  lowercase,
  macaddress,
  mobilephone,
  mongoid,
  numeric,
  url,
  uuid,
  uppercase
} from 'tcomb-form-types';

const test = t.struct({
  alpha: alpha,
  alphanumeric: alphanumeric,
  base64: base64,
  boolean: boolean,
  creditcard: creditcard,
  date: date,
  decimal: decimal,
  email: email,
  fqdn: fqdn,
  float: float,
  hexcolor: hexcolor,
  hexadecimal: hexadecimal,
  ip: ip,
  isbn: isbn,
  integer: integer,
  json: json,
  lowercase: lowercase,
  macaddress: macaddress,
  mobilephone: mobilephone,
  mongoid: mongoid,
  numeric: numeric,
  url: url,
  uuid: uuid,
  uppercase: uppercase
});
```

### alpha

### alphanumeric

### base64

### boolean

### creditcard

### date

### decimal

### email

### fqdn

### float

### hexcolor

### hexadecimal

### ip

### isbn

### integer

### json

### lowercase

### macaddress

### mobilephone

### mongoid

### numeric

### url

### uuid

### uppercase
