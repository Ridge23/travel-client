import { Component, Input } from '@angular/core';

@Component({
    selector: 'right-column-card',
    templateUrl: './right-column-card.component.html',
    styleUrls: ['./right-column-card.component.css']
})
export class RightColumnCard {
    @Input() title = "Default right column card";
    @Input() objects: Object[] = [];

    chooseObject(objectId) {
        console.log(objectId);
    }
}