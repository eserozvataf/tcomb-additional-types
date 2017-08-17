"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const t = require("tcomb");
const CreditCard = t.refinement(t.String, validator.isCreditCard);
exports.CreditCard = CreditCard;
exports.default = CreditCard;
//# sourceMappingURL=credit-card.js.map