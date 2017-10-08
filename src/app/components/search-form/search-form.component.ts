import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NgForm } from '@angular/forms';

import { IziTravelService } from '../../services/izi-travel.service';

@Component({
    selector: 'search-form',
    templateUrl: './search-form.component.html'
})
export class SearchFormComponent {
    public searchQuery: string;
    @Input() searchResult: Object[];
    @Output() searchResultChange = new EventEmitter<Object>();

    constructor(private apiService: IziTravelService) {}

    onSubmit(f: NgForm) {
        this.apiService.findObject(f.value.searchQuery)
        .then(response => {
            this.searchResultChange.emit(response.data);
        });
    }
}