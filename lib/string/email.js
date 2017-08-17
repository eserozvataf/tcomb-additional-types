"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const Email = t.refinement(t.String, validator.isEmail);
exports.Email = Email;
exports.default = Email;
//# sourceMappingURL=email.js.map