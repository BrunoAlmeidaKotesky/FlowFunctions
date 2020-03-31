"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegexMethods {
    constructor() {
        this.replaceByRegex = (value, reg, replacement) => {
            const helperRegex = /\/[yisgum]+$/g;
            const isNumberReg = /^[0-9]+$/;
            let newReg = reg;
            console.log(typeof value, typeof replacement);
            if (!reg.endsWith('/')) {
                if (helperRegex.test(reg) === false)
                    newReg = newReg + "/g";
            }
            if (!reg.startsWith('/'))
                newReg = "/" + newReg;
            let rebuildReg = this.regexParser(newReg);
            let newVal = value.replace(rebuildReg, replacement);
            if (isNumberReg.test(newVal) === true)
                return Number(newVal);
            else
                return newVal;
        };
    }
    regexParser(input) {
        // Validate input
        if (typeof input !== "string")
            throw new Error("Invalid input. Input must be a string");
        // Parse input
        let matches = input.match(/(\/?)(.+)\1([a-z]*)/i);
        // Invalid flags
        if (matches[3] && !/^(?!.*?(.).*?\1)[gmixXsuUAJ]+$/.test(matches[3]))
            return RegExp(input);
        // Create the regular expression
        return new RegExp(matches[2], matches[3]);
    }
}
exports.default = RegexMethods;
//# sourceMappingURL=RegexMethods.js.map