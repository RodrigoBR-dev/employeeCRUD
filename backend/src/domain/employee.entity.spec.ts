import { Employee } from './employee.entity';
import { CPF } from './cpf.value';
import { Address } from './address.value';

describe('Employee constructor', () => {
  it('should initialize all fields correctly', () => {
    const employee = new Employee(
      true,
      'John Doe',
      'photo.jpg',
      'john.doe@example.com',
      new Date(),
      new CPF('54459003040'),
      new Address('Rua A', '12345678', 'Bairro', 'Cidade', 'RJ'),
    );

    expect(employee.active).toEqual(true);
    expect(employee.name).toEqual('John Doe');
    expect(employee.photo).toEqual('photo.jpg');
    expect(employee.email).toEqual('john.doe@example.com');
    expect(employee.hireDate).toBeInstanceOf(Date);
    expect(employee.cpf).toBeInstanceOf(CPF);
    expect(employee.address).toBeInstanceOf(Address);
  });

  it('should throw an error if name field is missing', () => {
    expect(
      () =>
        new Employee(
          true,
          '',
          'mock',
          'mock',
          new Date(),
          new CPF('54459003040'),
          new Address('Rua A', '12345678', 'Bairro', 'Cidade', 'RJ'),
        ),
    ).toThrow();
  });
  it('should throw an error if photo url field is missing', () => {
    expect(
      () =>
        new Employee(
          true,
          'John Doe',
          '',
          'john.doe@example.com',
          new Date(),
          new CPF('54459003040'),
          new Address('Rua A', '12345678', 'Bairro', 'Cidade', 'RJ'),
        ),
    ).toThrow();
  });
  it('should throw an error if email field is missing', () => {
    expect(
      () =>
        new Employee(
          true,
          'mock',
          'mock',
          '',
          new Date(),
          new CPF('54459003040'),
          new Address('Rua A', '12345678', 'Bairro', 'Cidade', 'RJ'),
        ),
    ).toThrow();
  });
});
