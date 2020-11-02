import {SineupData} from './sineup.data';

export class SineupModel
{
    constructor(public message:string,public storedDataList:SineupData[])
    {
        console.log("Created SineupModel");
    }
}