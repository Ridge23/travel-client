import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'

import { MainComponent } from './components/main/main.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { RightColumnCard } from './components/cards/right-column-card.component';
import { SelectedPartCard } from './components/cards/selected-part-card.component';
import { SelectedObjectCard } from './components/cards/selected-object-card.component';
import { AssetModal } from './components/modals/asset-modal.component';

import { IziTravelService } from './services/izi-travel.service';
import { BienvenidoService } from './services/bienvenido.service';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { StripHtmlPipe } from './pipes/remove-html.pipe';


@NgModule({
  declarations: [
    MainComponent,
    SearchFormComponent,
    RightColumnCard,
    EscapeHtmlPipe,
    StripHtmlPipe,
    SelectedObjectCard,
    SelectedPartCard,
    AssetModal
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IziTravelService, BienvenidoService],
  bootstrap: [MainComponent]
})
export class AppModule { }
