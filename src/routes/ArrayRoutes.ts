import ArrayHelper from '../models/ArrayHelper';
import { MatchAll } from '../models/types/types';
import { IRequest, IReceivedValue, IMetaResponse } from '../models/interfaces/interfaces';
import express, {Response} from 'express';

const ah = new ArrayHelper();
export default class ArrayRoutes {
    static excludeMatch = (req:IRequest<any>, res:Response<{}[]>) => {
        if(req?.body?.arr1 && req?.body?.arr2) {
            let array = [];
            if(req.body.matchKey){
                array = ah.excludeMatch(req.body.arr1, req.body.arr2, req.body.matchKey);
            }
            else {
                array = ah.excludeMatch(req.body.arr1, req.body.arr2);
            }
            res.status(200);
            return res.json(array);
        }

    }
}