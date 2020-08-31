import { MatchAll } from './../models/types';
import { IRequest, IReceivedValue, IMetaResponse } from './../models/interfaces';
import express, {Response} from 'express';
import RegexMethods from '../models/RegexMethods';
const routes = express.Router();

routes.post('/regex/replace', (req:IRequest<IReceivedValue>, res:Response<IMetaResponse<any>|string|number>)=>{
    const {receivedText, regex, replacement} = req.body;
    let replacer = new RegexMethods();
    if(!receivedText || !regex|| !replacement){
        res.status(406);
        return res.json({error: "You should specify an value for all the paramnters"})
    }
    let newVal = replacer.replaceByRegex(receivedText, (regex as string), replacement);
    return res.json(newVal);
});

routes.post('/regex/matchall', (req:IRequest<MatchAll>, res:Response<{values?: string[]|number[], error?: string}>)=>{
    const {receivedText, regex} = req.body;
    if(!receivedText || !regex){
        res.status(406);
        return res.json({error: "You should specify an value for all the paramnters"})
    }
    let reg = new RegexMethods();
    let values = reg.regexMatchAll(receivedText, (regex as string));
    return res.json({values});
});

export default routes;