"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const JSON = t.refinement(t.String, validator.isJSON);
exports.JSON = JSON;
exports.default = JSON;
//# sourceMappingURL=json.js.map