import t = require('tcomb');
import * as Number from './number/';
import * as String from './string/';
declare const _default: {
    Number: typeof Number;
    String: typeof String;
    Null: t.Irreducible<{}>;
};
export = _default;
