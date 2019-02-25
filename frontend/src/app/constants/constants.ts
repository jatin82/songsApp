import { PARAMETERS } from '@angular/core/src/util/decorators';

const baseUrl:string = location.origin+"/spotify";
const songs:string = "/songs";
const song:string = "/song";
const songById = "/song/***";


export class urls{
    
    public static createUrlQuery(queryParam:Object):string{
        let params:string ="?";
        for(let param of Object.keys(queryParam)){
            params = params.concat(encodeURIComponent(param)+"="+encodeURIComponent(queryParam[param])+"&");
        }
        params = params.slice(0,params.length-1);
        params = baseUrl.concat(songs+params);
        console.log(params);
        return params; 
    }


    public static createUrlPathVariable(path:string):string{
        path = encodeURIComponent(path);
        let uri = baseUrl.concat(songById).replace("***",path);
        console.log(uri);
        return uri;
    }
    
}