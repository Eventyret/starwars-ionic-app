import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SwapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SwapiProvider {

  // apiKey = ''; // Incase this is needed in the feature
  url;


  constructor(public http: Http) {
    console.log('Hello SwapiProvider Provider');
    this.url = 'http://swapi.co/api/people/'
  }
 
  
  /* getPeople(person){
    return this.http.get(this.url+person)
      .map(res => res.json());
  } */
}
