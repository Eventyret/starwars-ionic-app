import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public http: Http) {
    this.getData('http://swapi.co/api/people/')
    this.getSpecies('http://swapi.co/api/species/')
    this.getFilms('http://swapi.co/api/films/')
    
  }

  peopleData: Array<Object> = []
  getData(url){
     this.http.get(url).map(res => res.json()).subscribe(people =>{
       people.results.forEach(person => {
         this.peopleData.push(person)
         /* console.log(person) */ // For debugging
       })
       if(people.next != null){
        this.getData(people.next)
       }
     })
   }
   speciesData: Array<Object> = []
   getSpecies(url){
      this.http.get(url).map(res => res.json()).subscribe(species =>{
        species.results.forEach(species => {
          this.speciesData.push(species)
          // console.log(species) // For debugging
        })
        if(species.next != null){
         this.getData(species.next)
        }
      })
    }
    filmsData: Array<Object> = []
    getFilms(url){
       this.http.get(url).map(res => res.json()).subscribe(films =>{
        films.results.forEach(films => {
           this.peopleData.push(films)
           console.log(films) // For debugging
         })
         if(films.next != null){
          this.getData(films.next)
         }
       })
     }
    
}
