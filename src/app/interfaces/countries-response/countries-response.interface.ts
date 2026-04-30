import { CountriesList } from "../../types/countries-list";
import { IBaseResponse } from "../base-response.interface";

export interface ICountriesResponse extends IBaseResponse {
    data: CountriesList;
}