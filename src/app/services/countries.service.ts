import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map, Observable } from "rxjs";

import { CountriesList } from "../types/countries-list";
import { ICountriesResponse } from "../interfaces/countries-response/countries-response.interface";

@Injectable({
    providedIn: 'root'
})
export class CountriesService {

    constructor(
        private readonly _httpClient: HttpClient
    ) { }

    getCountries(): Observable<CountriesList> {
        return this._httpClient
            .get<ICountriesResponse>('https://countriesnow.space/api/v0.1/countries/positions')
            .pipe(
                map((response) => response.data)
            );
    }
}