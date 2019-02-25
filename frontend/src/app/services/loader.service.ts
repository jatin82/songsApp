import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { EventEmitter } from '@angular/core';
import { urls } from '../constants/constants';
import { map } from 'rxjs/operators';

@Injectable()
export class LoaderService {
  public emitLoader:EventEmitter<Boolean>;

  constructor(public http:Http) {
    this.emitLoader = new EventEmitter<Boolean>();
   }
}
