import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private cpt=0;
 public person: Person= {
    name:"John Doe",
    age:90
 }
 public check() {
   this.cpt++;
   console.log("PARENT view refreshing",this.cpt)
 }

 public reassign() {
   this.person={
     name:this.person.name
     ,age:this.person.age
   }
 }
}
