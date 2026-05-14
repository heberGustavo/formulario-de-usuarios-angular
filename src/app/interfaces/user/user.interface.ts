import { AddressList } from "../../types/address-list";
import { IPhoneList } from "../../types/phonets-list";
import { IAddress } from "./address.interface";
import { IDependent } from "./dependent.interface";

export interface IUser {
    name: string;
    email: string;
    country: string;
    state: string;
    maritalStatus: number;
    monthlyIncome: number;
    birthDate: string;
    phoneList: IPhoneList;
    addressList: AddressList;
    dependentsList: IDependent[];
}
