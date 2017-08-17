"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const Alpha = t.refinement(t.String, validator.isAlpha);
exports.Alpha = Alpha;
exports.default = Alpha;
//# sourceMappingURL=alpha.js.map