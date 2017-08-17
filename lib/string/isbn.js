"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const ISBN = t.refinement(t.String, validator.isISBN);
exports.ISBN = ISBN;
exports.default = ISBN;
//# sourceMappingURL=isbn.js.map