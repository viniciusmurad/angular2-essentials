import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getCharacters() {
    return this.http.get('https://swapi.co/api/people')
      .map(response => response.json());
  }

}
