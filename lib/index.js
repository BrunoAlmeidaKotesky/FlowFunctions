"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const routes_1 = tslib_1.__importDefault(require("./routes/routes"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const cors_1 = tslib_1.__importDefault(require("cors"));
class MainServices {
    constructor() {
        this.PORT = process.env.PORT || 5544;
        this.app = express_1.default();
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
        this.app.use(routes_1.default);
    }
    init() {
        this.app.listen(this.PORT, () => console.log("Server listening on " + this.PORT));
    }
}
const app = new MainServices();
app.init();
//# sourceMappingURL=index.js.map