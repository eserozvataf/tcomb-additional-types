"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const Float = t.refinement(t.Number, (val) => validator.isFloat(String(val)));
exports.Float = Float;
exports.default = Float;
//# sourceMappingURL=float.js.map