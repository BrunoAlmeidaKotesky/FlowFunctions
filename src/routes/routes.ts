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

export default routes;