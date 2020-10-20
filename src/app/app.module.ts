import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { ImageComponent } from './image/image.component';
import { PonyComponent } from './pony/pony.component';
import { RaceComponent } from './race/race.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ImageComponent,
    PonyComponent,
    RaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
