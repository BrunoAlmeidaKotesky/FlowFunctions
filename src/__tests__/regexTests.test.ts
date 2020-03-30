import { IReceivedValue, IResponseValue } from './../models/interfaces';
import RegexMethods from '../models/RegexMethods';
import axios, {AxiosResponse} from 'axios';
import { parse } from 'path';

describe('Regex calls to the api', () => {
    const fetchFakeReplace = async (url:string, body) => await axios.post(url, body, {headers: {"content/type": "text/xml"}});
    const replaceUrl = 'http://localhost:5544/strings/replaceAll';

    it('Should convert the xml string regex to an RegExp object and replace it', async () => {
        let res = new RegexMethods();
        let replaced = res.replaceByRegex("OLA1M1ND0","/[0-9]/g","B")
        expect(replaced).toBe("OLABMBNDB");
    });

    it('Should convert the xml string without regex to an RegExp object and replace it', () => {
        let res = new RegexMethods();
        let replaced = res.replaceByRegex("OLA1M1ND0","[0-9]","B")
        expect(replaced).toBe("OLABMBNDB");
    });

    it('Shoudld convert an integer received value to a string and parse it', ()=>{
        let res = new RegexMethods();
        //@ts-ignore
        let replaced = res.replaceByRegex(1,'/[0-9]/',2);
        expect(replaced).toBe(2);
    });
});