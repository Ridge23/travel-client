import { Component, Input, OnInit } from '@angular/core';
import { BienvenidoService } from '../../services/bienvenido.service';

@Component({
    selector: 'asset-modal',
    templateUrl: './asset-modal.component.html',
    styleUrls: ['./asset-modal.component.css']
})
export class AssetModal implements OnInit {
    @Input() selectedPart;

    private cities: Object[] = [];
    private assets: Object[] = [];

    private selectedCityId = 0;

    constructor(private apiService: BienvenidoService) {}

    ngOnInit() : void {
        this.apiService.getCities()
        .then(
            data => {
                this.cities = data.data;
            }
        );
    }

    loadCityAssets(cityId: number = 0) : void {
        this.apiService.getCityAssets(cityId)
        .then(
            data => {
                this.assets = data.data.assets;
                console.log(this.assets);
            }
        )
    }
}