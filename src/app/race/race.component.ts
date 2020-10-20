import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {
  public ponies= [
    {id:1, color:"green"},{id:2,color:"orange"},{id:3,color:"purple"}
  ]
  private chkCpt=0;
  public colors =[
    "green","purple","orange","blue","yellow"
  ]
  constructor() { }
  public check() {
    console.log("RACE view refresh",(this.chkCpt++))
  }

  ngOnInit(): void {
  }

}
