import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'

import { MainComponent } from './components/main/main.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { RightColumnCard } from './components/cards/right-column-card.component';
import { SelectedPartCard } from './components/cards/selected-part-card.component';
import { SelectedObjectCard } from './components/cards/selected-object-card.component';

import { IziTravelService } from './services/izi-travel.service';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';


@NgModule({
  declarations: [
    MainComponent,
    SearchFormComponent,
    RightColumnCard,
    EscapeHtmlPipe,
    SelectedObjectCard,
    SelectedPartCard
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IziTravelService],
  bootstrap: [MainComponent]
})
export class AppModule { }
