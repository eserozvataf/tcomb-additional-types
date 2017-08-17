"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const MobilePhone = t.refinement(t.String, (val) => validator.isMobilePhone(val, 'any'));
exports.MobilePhone = MobilePhone;
exports.default = MobilePhone;
//# sourceMappingURL=mobile-phone.js.map