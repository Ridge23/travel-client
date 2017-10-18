import { Injectable } from '@angular/core';
import axios, {AxiosInstance, AxiosPromise} from 'axios';

@Injectable()
export class BienvenidoService {
    private apiCaller: AxiosInstance;

    private authToken = '9jpJZcfyoCVR76DV6sbs';

    private apiCallerConfig = {
        baseURL: 'http://localhost:3000/',
    };

    constructor() {
        this.apiCaller = axios.create(this.apiCallerConfig);
    }

    getCities() : AxiosPromise {
        let url = 'api/v1/cities?api_token=' + this.authToken;

        return this.apiCaller.get(url);
    }

    getCityAssets(id: number = 0) : AxiosPromise {
        let url = 'api/v1/cities/' + id + '?api_token=' + this.authToken;

        return this.apiCaller.get(url);
    }
}