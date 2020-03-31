import { MatchAll } from './../models/types';
import { IResponseValue, IRequest, IReceivedValue } from './../models/interfaces';
import express, {Response, json} from 'express';
import RegexMethods from '../models/RegexMethods';
const routes = express.Router();

routes.post('/regex/replace', (req:IRequest<IReceivedValue>, res:Response<IResponseValue>)=>{
    const {receivedText, reggex, replacement} = req.body;
    let replacer = new RegexMethods();
    let newVal = replacer.replaceByRegex(receivedText, (reggex as string), replacement);
    return res.json({newVal});
});

routes.post('/regex/matchall', (req:IRequest<MatchAll>, res:Response<{values: string[]|number[]}>)=>{
    const {receivedText, reggex} = req.body;
    let reg = new RegexMethods();
    let values = reg.regexMatchAll(receivedText, (reggex as string));
    return res.json({values});
});

export default routes;