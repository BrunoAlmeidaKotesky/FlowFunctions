import { MatchAll } from '../models/types/types';
import { IRequest, IReceivedValue, IMetaResponse } from '../models/interfaces/interfaces';
import express, {Response} from 'express';
import RegexMethods from '../models/RegexMethods';

const regexer = new RegexMethods();
const parserError = (res:express.Response<string | number | IMetaResponse<any>>, message: string = "Cannot parse that type of data, only string an numbers are accepted") => {
    res.status(406);
    return res.json({error: message});
};

export default class RegexRoutes {
    static replace = (req:IRequest<IReceivedValue>, res:Response<IMetaResponse<any>|string|number>)=>{
        const {receivedText, regex, replacement} = req.body;
        if(!receivedText || !regex || !replacement){
            res.status(406);
            return res.json({error: "You should specify an value for all the paramnters"})
        }
        else {
            if((typeof receivedText !== 'object' && typeof receivedText !== 'boolean') && (typeof replacement !== 'object' && typeof replacement !== 'boolean')){
                let newVal = regexer.replaceByRegex(receivedText, (regex as string), replacement);
                if (typeof newVal !== 'object' && typeof newVal !== 'undefined' && newVal !== null) 
                    return res.json(newVal);
                else parserError(res);
            }
            else parserError(res);
        }
    }
    
    static matchAll = (req:IRequest<MatchAll>, res:Response<{values?: string[]|number[], error?: string}>)=>{
        const {receivedText, regex} = req.body;
        if(!receivedText || !regex){
            res.status(406);
            return res.json({error: "You should specify an value for all the paramnters"})
        }
        else {
            if(typeof receivedText !== "object" && typeof receivedText !== "boolean") {
                let values = regexer.regexMatchAll(receivedText, (regex as string));
                return res.json({values});
            } 
            else parserError(res);
        }
        
    };
    
    static test = (req: IRequest<{text: string, regex: string}>, res) =>{
        if(req?.body?.text && req?.body?.regex){
            if(typeof req.body.text !== "object" && typeof req.body.text !== "boolean")
                return res.json(regexer.regexTest(req.body.text, req.body.regex));
            else parserError(res);
        }
        else {
            res.status(406);
            return res.json({error: "You should specify an text string to be evaluated"});
        }
    }
}