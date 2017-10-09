import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'app';
  searchResult: Object[] = [];
  selectedObject: Object;
  selectedPart: Object;
  tours: Object[] = [];
  museums: Object[] = [];

  public searchResultChanged(searchResults) {
    this.tours = [];
    this.museums = [];

    for (let searchResult of searchResults) {
      if(searchResult.type === "tour") {
        this.tours.push(searchResult);
      } else {
        this.museums.push(searchResult);
      }
    }
  }

  public selectedObjectChanged(selectedObject) {
    this.selectedObject = selectedObject;
  }

  public selectedPartChanged(selectedPart) {
    this.selectedPart = selectedPart;
  }
}
