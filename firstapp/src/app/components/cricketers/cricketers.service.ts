import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

import { ICricket } from './cricketer';

@Injectable()
export class CriucketService {

    private baseurl ='api/cricketers';

    constructor(private http: Http){}

    getCricketers(): Observable<ICricket>{
        return null;
    }

    getCricketer(id: number): Observable<ICricket>{
        return null;
    }

    deleteCricketer(id: number): Observable<Response>{
        return null;
    }

    saveCricketer(): Observable<ICricket>{
        return null;
    }

}