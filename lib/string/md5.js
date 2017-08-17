"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const MD5 = t.refinement(t.String, validator.isMD5);
exports.MD5 = MD5;
exports.default = MD5;
//# sourceMappingURL=md5.js.map