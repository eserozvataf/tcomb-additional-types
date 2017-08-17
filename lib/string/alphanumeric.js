"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const Alphanumeric = t.refinement(t.String, validator.isAlphanumeric);
exports.Alphanumeric = Alphanumeric;
exports.default = Alphanumeric;
//# sourceMappingURL=alphanumeric.js.map