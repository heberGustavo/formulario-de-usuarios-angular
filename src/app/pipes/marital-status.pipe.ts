import { Pipe, PipeTransform } from '@angular/core';
import { MaritalStatusEnum } from '../enums/marital-status.enum';

@Pipe({
  name: 'maritalStatus'
})
export class MaritalStatusPipe implements PipeTransform {

  transform(maritalStatus: number | undefined): string {

    switch (maritalStatus) {
      case MaritalStatusEnum.SINGLE: return 'Solteiro';
      case MaritalStatusEnum.MARRIED: return 'Casado';
      case MaritalStatusEnum.DIVORCED: return 'Divorciado';
      default: return '-';
    }

  }

}
