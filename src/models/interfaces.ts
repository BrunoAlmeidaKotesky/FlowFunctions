import { Request } from 'express';

export interface IReceivedValue {
    content:{
        receivedtext: string[];
        reggex: string | RegExp[];
        replacement: string[];
    }
}
export interface IResponseValue{
    newVal: string|number;
}
export interface IRequest <T> extends Request{
    body: T
}