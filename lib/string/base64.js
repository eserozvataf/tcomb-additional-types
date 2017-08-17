"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const Base64 = t.refinement(t.String, validator.isBase64);
exports.Base64 = Base64;
exports.default = Base64;
//# sourceMappingURL=base64.js.map