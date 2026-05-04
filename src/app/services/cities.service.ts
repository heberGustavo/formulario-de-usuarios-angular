import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CitiesResponse } from "../interfaces/cities-response/cities-response.interface";
import { CitiesList } from "../types/cities-list";

@Injectable({
    providedIn: "root"
})
export class CitiesService {

    constructor(
        private readonly _httpClient: HttpClient
    ) { }

    getCitiesInCountryAndState(country: string, stateName: string): Observable<CitiesList> {
        return this._httpClient
            .post<CitiesResponse>(
                'https://countriesnow.space/api/v0.1/countries/state/cities',
                { "country": country, "state": stateName }
            ).pipe(
                map((response: CitiesResponse) => response.data)
            );
    }
}