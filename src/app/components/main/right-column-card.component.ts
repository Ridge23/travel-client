import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IziTravelService } from '../../services/izi-travel.service';

@Component({
    selector: 'right-column-card',
    templateUrl: './right-column-card.component.html',
    styleUrls: ['./right-column-card.component.css']
})
export class RightColumnCard {
    @Input() title = "Default right column card";
    @Input() objects: Object[] = [];
    @Input() selectedObject: Object;
    @Output() selectedObjectChange = new EventEmitter<Object>();

    constructor(private apiService: IziTravelService) {}

    chooseObject(objectId: string) {
        this.apiService.getObject(objectId)
        .then(response => {
            this.selectedObjectChange.emit(response.data[0]);
        });
    }
}