import { Request } from 'express';

export interface IMetaResponse <T>{
    meta?: Partial<T>;
    error?: string;
    info?: string;
}
export interface IReceivedValue {
    receivedText: string;
    regex: string | RegExp;
    replacement: string;
}
export interface IRequest <T> extends Request{
    body: T
}