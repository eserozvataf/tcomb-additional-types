"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const LowerCase = t.refinement(t.String, validator.isLowercase);
exports.LowerCase = LowerCase;
exports.default = LowerCase;
//# sourceMappingURL=lower-case.js.map