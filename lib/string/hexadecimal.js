"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const Hexadecimal = t.refinement(t.String, validator.isHexadecimal);
exports.Hexadecimal = Hexadecimal;
exports.default = Hexadecimal;
//# sourceMappingURL=hexadecimal.js.map