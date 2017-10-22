import { Component, Input, OnInit } from '@angular/core';
import { BienvenidoService } from '../../services/bienvenido.service';
import { IziTravelService } from '../../services/izi-travel.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'asset-modal',
    templateUrl: './asset-modal.component.html',
    styleUrls: ['./asset-modal.component.css']
})
export class AssetModal implements OnInit {
    @Input() selectedPart;

    private cities: Object[] = [];
    private assets: Object[] = [];

    public mediaSaved = false;

    constructor(private apiService: BienvenidoService, private iziTravelApiService: IziTravelService) {}

    ngOnInit() : void {
        this.apiService.getCities()
        .then(
            data => {
                this.cities = data.data;
            }
        );

        this.setMediaUrl();
    }

    ngOnChanges() : void {
        this.setMediaUrl();
        this.mediaSaved = false;
    }

    setMediaUrl() : void {
        this.selectedPart.mediaUrl = this.iziTravelApiService.getMediaUrl(
            this.selectedPart.content_provider.uuid, 
            this.selectedPart.content[0].audio[0].uuid
        );
    }

    loadCityAssets(cityId: number = 0) : void {
        this.apiService.getCityAssets(cityId)
        .then(
            data => {
                this.assets = data.data.assets;
            }
        )
    }

    onSubmit(form: NgForm) {
        this.apiService.createAssetMedia(
            form.value.assetId, 
            form.value.title, 
            form.value.description, 
            form.value.mediaUrl
        ).then(
            data => {
                this.mediaSaved = true;
            }
        );
    }
}