"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const UpperCase = t.refinement(t.String, validator.isUppercase);
exports.UpperCase = UpperCase;
exports.default = UpperCase;
//# sourceMappingURL=upper-case.js.map