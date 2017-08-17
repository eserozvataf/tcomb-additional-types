"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const Decimal = t.refinement(t.Number, (val) => validator.isDecimal(String(val)));
exports.Decimal = Decimal;
exports.default = Decimal;
//# sourceMappingURL=decimal.js.map