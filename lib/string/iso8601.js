"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const ISO8601 = t.refinement(t.String, validator.isISO8601);
exports.ISO8601 = ISO8601;
exports.default = ISO8601;
//# sourceMappingURL=iso8601.js.map