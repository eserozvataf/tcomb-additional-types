"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const Domain = t.refinement(t.String, validator.isFQDN);
exports.Domain = Domain;
exports.default = Domain;
//# sourceMappingURL=domain.js.map