import { IResponseValue, IRequest, IReceivedValue } from './../models/interfaces';
import express, {Response, json} from 'express';
import RegexMethods from '../models/RegexMethods';
const routes = express.Router();

routes.post('/strings/replaceAll', (req:IRequest<IReceivedValue>, res:Response<IResponseValue>) => {
    const {receivedtext, reggex, replacement} = req.body.content;
    let parsedRegex = String.raw`${reggex}`;
    let replacer = new RegexMethods();
    let newVal = replacer.replaceByRegex(receivedtext[0], parsedRegex, replacement[0]);
    return res.json({
        newVal
    })
});

routes.post('/strings/test' ,(req, res)=>{
    const {receivedText, reggex, replacement} = req.body;
    console.log(receivedText, reggex, replacement);
    let replacer = new RegexMethods();
    let newVal = replacer.replaceByRegex(receivedText, reggex, replacement);
    return res.json({newVal});
});

export default routes;