"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const RegexMethods_1 = tslib_1.__importDefault(require("../models/RegexMethods"));
const routes = express_1.default.Router();
routes.post('/strings/replaceAll', (req, res) => {
    const { receivedtext, reggex, replacement } = req.body.content;
    let parsedRegex = String.raw `${reggex}`;
    let replacer = new RegexMethods_1.default();
    let newVal = replacer.replaceByRegex(receivedtext[0], parsedRegex, replacement[0]);
    return res.json({
        newVal
    });
});
routes.post('/strings/test', (req, res) => {
    const { receivedText, reggex, replacement } = req.body;
    console.log(receivedText, reggex, replacement);
    let replacer = new RegexMethods_1.default();
    let newVal = replacer.replaceByRegex(receivedText, reggex, replacement);
    return res.json({ newVal });
});
exports.default = routes;
//# sourceMappingURL=routes.js.map