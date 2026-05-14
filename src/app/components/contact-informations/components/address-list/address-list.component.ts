import { AddressTypeEnum } from './../../../../enums/address-type.enum';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AddressList } from '../../../../types/address-list';
import { IAddress } from '../../../../interfaces/user/address.interface';
import { addressTypeDescriptionMap } from '../../../../utils/address-type-description-map';
import { IAddressToDisplay } from '../../../../interfaces/address-to-display';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.scss'
})
export class AddressListComponent implements OnChanges {
  addressListToDisplay: IAddressToDisplay[] = [];
  @Input({ required: true }) userAddressList: AddressList | undefined = [];

  ngOnChanges(changes: SimpleChanges) {
    const ADRRESS_LOADER = Array.isArray(changes['userAddressList'].currentValue);

    if (ADRRESS_LOADER)
      this.prepareToDisplayAddressList();
  }

  prepareToDisplayAddressList() {
    this.addressListToDisplay = [];

    Object.keys(addressTypeDescriptionMap).map(Number).forEach((addressType) => {
      const addressFound = this.userAddressList?.find((userAddress) => userAddress.type === addressType);

      this.addressListToDisplay.push(this.returnAddressToDisplay(addressFound, addressType));
    })
  }

  returnAddressToDisplay(address: IAddress | undefined, addressType: number): IAddressToDisplay {
    if (!address) {
      return {
        typeDescription: addressTypeDescriptionMap[addressType as AddressTypeEnum],
        type: addressType,
        street: '-',
        complement: '-',
        country: '-',
        state: '-',
        city: '-',
      }
    }

    return {
      typeDescription: addressTypeDescriptionMap[address.type as AddressTypeEnum],
      ...address
    }
  }

}
