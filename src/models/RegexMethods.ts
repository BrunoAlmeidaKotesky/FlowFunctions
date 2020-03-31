
export default class RegexMethods{

    private regexParser(input:string): RegExp {

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

    public replaceByRegex = (value: string|number, reg: string, replacement: string|number):string|number => { 
        const helperRegex = /\/[yisgum]+$/g;
        const isNumberReg = /^[0-9]+$/;

        let newReg = reg;
        if(!reg.endsWith('/')){
            if(helperRegex.test(reg) === false)
              newReg = newReg + "/g";
        }
        if(!reg.startsWith('/'))
            newReg = "/" + newReg;
             
        let rebuildReg = this.regexParser(newReg);
        let newVal:string = (value as string).replace(rebuildReg, (replacement as string));
        if(isNumberReg.test(newVal)===true) 
         return Number(newVal);
        else return newVal;
    }

    public regexMatchAll = (text: string, reg: string) => {
        const helperRegex = /\/[yisgum]+$/g;
        const isNumberReg = /^[0-9]+$/;
        const isGlobalFlag = /\/[g]+$/;
        let newReg = reg;

        if(!reg.endsWith('/')){
            if(helperRegex.test(newReg) === false)
              newReg = newReg + "/g";
            else {
                if(isGlobalFlag.test(newReg) === false)
                  newReg.replace(helperRegex, "/g");
            }
        }
        if(!reg.startsWith('/'))
            newReg = "/" + newReg;
            
        let transformedReg = this.regexParser(reg);
        let matches = text.matchAll(transformedReg);
        let allMatches = Array.from(matches, m => m[0]);
        const isNumber = allMatches.every(i =>  isNumberReg.test(i)===true);
        if(isNumber){
            const numbersMatch = allMatches.map(n => parseInt(n));
            return numbersMatch;
        }
        else
            return allMatches;
        
    }
}

 
