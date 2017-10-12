import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IziTravelService } from '../../services/izi-travel.service';

@Component({
    selector: 'selected-object-card',
    templateUrl: './selected-object-card.component.html',
    styleUrls: ['./selected-object-card.component.css']
})
export class SelectedObjectCard {
    @Input() selectedObject: Object;
    @Input() selectedPart: Object;
    @Output() selectedPartChange = new EventEmitter<Object>();

    constructor(private apiService: IziTravelService) {}

    public selectPart(selectedPartId) {
        this.apiService.getObject(selectedPartId)
        .then(response => {
            this.selectedPartChange.emit(response.data[0]);
        });
      }
}