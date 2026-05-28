import { AddressList } from "../../types/address-list";
import { DependentsList } from "../../types/depententes-list";
import { IPhoneList } from "../../types/phonets-list";

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
    dependentsList: DependentsList;
}
