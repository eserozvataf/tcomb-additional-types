"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const Integer = t.refinement(t.Number, (val) => validator.isInt(String(val)));
exports.Integer = Integer;
exports.default = Integer;
//# sourceMappingURL=integer.js.map