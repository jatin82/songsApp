import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { EventEmitter } from '@angular/core';
import { urls } from '../constants/constants';
import { map } from 'rxjs/operators';

@Injectable()
export class SongsService {
  public emitSongs:EventEmitter<Object[]>;

  constructor(public http:Http) {
    this.emitSongs = new EventEmitter<Object[]>();
   }
  
  public getSongs(params:Object){
    return this.http.get(urls.createUrlQuery(params))
    .pipe(map(
        (response:Response)=>{
          console.log("Songs response");
          console.log(response);
          let c:String  = response.json();
          console.log(c)
          return c;
        },
        (error:Error)=>{
          console.log("Error Occurred");
          console.log(error);
          return {};
        }
  
      ));
  }
  
  public getSongById(id:string){
    console.log("Getting Song by id service");
    return this.http.get(urls.createUrlPathVariable(id)).pipe(map(
      (response:Response)=>{
        console.log("Fetched success song by id");
        console.log(response);
        let results:any = response.json();
        console.log(results);
        return results;
      },
      (error:Error)=>{
        console.log("Error Occurred");
        return null;
      }
    ));
  }
}
