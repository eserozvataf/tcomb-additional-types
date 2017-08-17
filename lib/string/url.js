"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const URL = t.refinement(t.String, validator.isURL);
exports.URL = URL;
exports.default = URL;
//# sourceMappingURL=url.js.map