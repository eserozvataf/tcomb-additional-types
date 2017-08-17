"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const UUID = t.refinement(t.String, validator.isUUID);
exports.UUID = UUID;
exports.default = UUID;
//# sourceMappingURL=uuid.js.map