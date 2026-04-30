import { IBaseResponse } from "../base-response.interface";
import { IStateResponseData } from "./state-response-data.interface";

export interface IStatesResponse extends IBaseResponse {
    data: IStateResponseData;
}