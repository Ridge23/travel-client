import { Component, Input } from '@angular/core';
import { IziTravelService } from '../../services/izi-travel.service';

@Component({
    selector: 'selected-part-card',
    templateUrl: './selected-part-card.component.html',
    styleUrls: ['./selected-part-card.component.css']
})
export class SelectedPartCard {
    @Input() selectedPart;

    constructor(private iziTravelApiService: IziTravelService) {}

    /**
     * @param {string} contentProviderUUId 
     * @param {string} audioUUId 
     * 
     * @return {string}
     */
    getMediaUrl() {
        return this.iziTravelApiService.getMediaUrl(
            this.selectedPart.content_provider.uuid, 
            this.selectedPart.content[0].audio[0].uuid
        );
    }
}