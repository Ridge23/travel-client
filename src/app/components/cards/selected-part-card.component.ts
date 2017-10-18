import { Component, Input } from '@angular/core';

@Component({
    selector: 'selected-part-card',
    templateUrl: './selected-part-card.component.html',
    styleUrls: ['./selected-part-card.component.css']
})
export class SelectedPartCard {
    @Input() selectedPart;

    /**
     * @param {string} contentProviderUUId 
     * @param {string} audioUUId 
     * 
     * @return {string}
     */
    getMediaUrl() {
        return 'https://media.izi.travel/' 
            + this.selectedPart.content_provider.uuid 
            + '/' 
            + this.selectedPart.content[0].audio[0].uuid 
            + '.m4a';
    }
}