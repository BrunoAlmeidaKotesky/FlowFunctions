"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const RegexMethods_1 = tslib_1.__importDefault(require("../models/RegexMethods"));
const routes = express_1.default.Router();
routes.post('/regex/replace', (req, res) => {
    const { receivedText, regex, replacement } = req.body;
    let replacer = new RegexMethods_1.default();
    if (!receivedText || !regex || !replacement) {
        res.status(406);
        return res.json({ error: "You should specify an value for all the paramnters" });
    }
    let newVal = replacer.replaceByRegex(receivedText, regex, replacement);
    return res.json(newVal);
});
routes.post('/regex/matchall', (req, res) => {
    const { receivedText, regex } = req.body;
    if (!receivedText || !regex) {
        res.status(406);
        return res.json({ error: "You should specify an value for all the paramnters" });
    }
    let reg = new RegexMethods_1.default();
    let values = reg.regexMatchAll(receivedText, regex);
    return res.json({ values });
});
exports.default = routes;
//# sourceMappingURL=routes.js.map