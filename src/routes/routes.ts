import { MatchAll } from './../models/types';
import { IRequest, IReceivedValue, IMetaResponse } from './../models/interfaces';
import express, {Response} from 'express';
import RegexMethods from '../models/RegexMethods';
const routes = express.Router();

const regexer = new RegexMethods();
routes.post('/regex/replace', (req:IRequest<IReceivedValue>, res:Response<IMetaResponse<any>|string|number>)=>{
    const {receivedText, regex, replacement} = req.body;
    if(!receivedText || !regex|| !replacement){
        res.status(406);
        return res.json({error: "You should specify an value for all the paramnters"})
    }
    let newVal = regexer.replaceByRegex(receivedText, (regex as string), replacement);
    return res.json(newVal);
});

routes.post('/regex/matchall', (req:IRequest<MatchAll>, res:Response<{values?: string[]|number[], error?: string}>)=>{
    const {receivedText, regex} = req.body;
    if(!receivedText || !regex){
        res.status(406);
        return res.json({error: "You should specify an value for all the paramnters"})
    }
    let values = regexer.regexMatchAll(receivedText, (regex as string));
    return res.json({values});
});

routes.post('/regex/test', (req: IRequest<{text: string, regex: string}>, res) =>{
    if(req?.body?.text && req?.body?.regex){
        return res.json(regexer.regexTest(req.body.text, req.body.regex));
    }
    else return res.json({error: "You should specify an text string to be evaluated"});
});

export default routes;