import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'

import { MainComponent } from './components/main/main.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { RightColumnCard } from './components/main/right-column-card.component';
import { IziTravelService } from './services/izi-travel.service';

@NgModule({
  declarations: [
    MainComponent,
    SearchFormComponent,
    RightColumnCard
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IziTravelService],
  bootstrap: [MainComponent]
})
export class AppModule { }
