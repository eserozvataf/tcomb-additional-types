"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const HexColor = t.refinement(t.String, validator.isHexColor);
exports.HexColor = HexColor;
exports.default = HexColor;
//# sourceMappingURL=hex-color.js.map