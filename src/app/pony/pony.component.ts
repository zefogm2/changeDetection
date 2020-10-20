import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PonyComponent implements OnInit {
  private cpt=0;
  @Input() ponyModel
  constructor() { }

  public check() {
    this.cpt++;
    console.log("Check PONY",this.cpt)
  }
  getPonyImageUrl() {
    return `https://cdn.jsdelivr.net/gh/coderbase-it/angular-cd-pp@master/src/assets/images/pony-${this.ponyModel.color}-running.gif`;
  }
  ngOnInit(): void {
  }

}
