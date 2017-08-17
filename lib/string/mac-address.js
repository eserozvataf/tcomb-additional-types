"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const MacAddress = t.refinement(t.String, validator.isMACAddress);
exports.MacAddress = MacAddress;
exports.default = MacAddress;
//# sourceMappingURL=mac-address.js.map