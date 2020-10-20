import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  public colors =[
    "green","purple","orange","blue","yellow"
  ]

  public randomColor(min,max) {
    min=Math.ceil(min);
    max=Math.floor(max);
    return this.colors[Math.floor(Math.random()*(max-min+1))+min]
  }
 /* public changeColor() {
    //this.ponies[0].color=this.randomColor(0, this.colors.length -1);
    const pony=this.ponies[0];
    this.ponies[0]={...pony,color:this.randomColor(0, this.colors.length -1)}
  }*/


public getColor() {
    return interval(1000).pipe(
      map( _ =>this.randomColor(0,this.colors.length - 1))
    )
}

}
