import { Injectable } from '@angular/core';
import axios, {AxiosInstance, AxiosPromise} from 'axios';

@Injectable()
export class IziTravelService {
    private apiCaller: AxiosInstance;

    private apiCallerConfig = {
        baseURL: 'https://api.izi.travel/',
        headers: {
            'X-IZI-API-KEY': 'fb7d4820-7811-42ce-8690-34c840414617'
        }
    };

    constructor() {
        this.apiCaller = axios.create(this.apiCallerConfig);
    }

    findObject(name: string) : AxiosPromise {
        let url = '/mtg/objects/search?languages=en&query=' + name;
    
        return this.apiCaller.get(url);
    }
}