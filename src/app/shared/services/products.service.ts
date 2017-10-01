import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) { }

  getProducts(id: string = ''): any {
    return this.http
      .get('http://jikan.me/api/person/1');
      // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }



}


