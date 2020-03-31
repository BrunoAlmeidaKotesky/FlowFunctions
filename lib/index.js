"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const routes_1 = tslib_1.__importDefault(require("./routes/routes"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const express_xml_bodyparser_1 = tslib_1.__importDefault(require("express-xml-bodyparser"));
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(express_xml_bodyparser_1.default());
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(routes_1.default);
app.listen(5544, 'localhost', (err) => err ? console.log(err) : console.log("Servidor escutando em http://localhost:5544"));
//# sourceMappingURL=index.js.map