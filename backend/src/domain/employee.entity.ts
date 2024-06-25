import { Address } from './address.value';
import { CPF } from './cpf.value';

export class Employee {
  constructor(
    readonly active: boolean,
    readonly name: string,
    readonly photo: string,
    readonly email: string,
    readonly hireDate: Date,
    readonly cpf: CPF,
    readonly address: Address,
  ) {
    if (name.length === 0) throw new Error('Name is required');
    if (photo.length === 0) throw new Error('Photo is required');
    if (email.length === 0) throw new Error('Email is required');
    if (hireDate === undefined) throw new Error('Hire date is required');
  }
}
