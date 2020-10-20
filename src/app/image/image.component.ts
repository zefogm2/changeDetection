import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnInit {
  private cpt=0;
  @Input() src:string;
  constructor() { }

  ngOnInit(): void {
  }
  public check() {
    this.cpt++;
      console.log("Image view refresh ",this.cpt)
  }

}
