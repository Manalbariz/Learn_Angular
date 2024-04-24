import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HeroesComponent} from "./heroes.component";


@NgModule({
  declarations: [
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  exports: [
    HeroesComponent
  ]
})
export class HeroModule { }
