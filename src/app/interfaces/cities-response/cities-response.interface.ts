import { CitiesList } from "../../types/cities-list";
import { IBaseResponse } from "../base-response.interface";

export interface CitiesResponse extends IBaseResponse {
    data: CitiesList;
}