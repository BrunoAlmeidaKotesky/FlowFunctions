export enum NumberRes {
    NaN = 0,
    Infinity = 1
}

interface LogConfig {
    isBase10: boolean;
    base?: number;
    isNatural: boolean;
}

export default class Mathematics {
    constructor() {

    }


    private logFn(num: number, logConfig: LogConfig): NumberRes | number {
        if (typeof num !== "number")
            num = parseFloat(num);
        if (isNaN(num))
            return NumberRes.NaN;
        if (!isFinite(num))
            return NumberRes.Infinity;

        if (logConfig.isNatural === true)
            return Math.log(num);
        else {
            if (logConfig?.isBase10 === true)
                return Math.log10(num);
        }
    }

    public squareRoot(x: number) {
        if (typeof x !== "number")
            x = parseFloat(x);
        if (isNaN(x))
            return NumberRes.NaN;
        if (!isFinite(x))
            return NumberRes.Infinity;

        return Math.sqrt(x);
    }

    
}