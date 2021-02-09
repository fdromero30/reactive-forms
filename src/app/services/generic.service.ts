import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private http: HttpClient) { }


  get(_event) {
    return this.http.get('url');
  }
}
