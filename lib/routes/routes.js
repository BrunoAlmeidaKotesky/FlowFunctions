"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const RegexMethods_1 = tslib_1.__importDefault(require("../models/RegexMethods"));
const routes = express_1.default.Router();
routes.post('/regex/replace', (req, res) => {
    const { receivedText, reggex, replacement } = req.body;
    let replacer = new RegexMethods_1.default();
    let newVal = replacer.replaceByRegex(receivedText, reggex, replacement);
    return res.json({ newVal });
});
exports.default = routes;
//# sourceMappingURL=routes.js.map