import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'app';
  searchResult: Object[] = [];
  tours: Object[] = [];
  museums: Object[] = [];

  public searchResultChanged(searchResults) {
    for (let searchResult of searchResults) {
      if(searchResult.type === "museum") {
        this.tours.push(searchResult);
      } else {
        this.museums.push(searchResult);
      }
    }
  }
}
