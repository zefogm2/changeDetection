import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class ChildComponent implements OnInit {
  private cpt=0;
  @Input() person:Person;
  constructor(private changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  public check() {
      this.cpt++;
      console.log("CHILD view refreshing ...",this.cpt);
  }

  public reassign() {
    this.changeDetectorRef.detectChanges();
  }

}
