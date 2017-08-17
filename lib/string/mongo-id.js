"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const MongoId = t.refinement(t.String, validator.isMongoId);
exports.MongoId = MongoId;
exports.default = MongoId;
//# sourceMappingURL=mongo-id.js.map