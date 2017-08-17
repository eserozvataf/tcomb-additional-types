"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const IP = t.refinement(t.String, validator.isIP);
exports.IP = IP;
exports.default = IP;
//# sourceMappingURL=ip.js.map