import { Employee } from '../../src/application/domain/employee.entity';
import { EmployeeDTO } from '../../src/application/domain/employee.dto';
import { CPF } from '../../src/application/domain/cpf.value';
import { Address } from '../../src/application/domain/address.value';

export const employeeData: EmployeeDTO = {
  active: true,
  photo: 'photo_url',
  name: 'John Doe',
  email: 'john.doe@example.com',
  hireDate: new Date(),
  cpf: '544.590.030-40',
  address: {
    street: 'Street',
    zip: '00000-000',
    neighborhood: 'Neighborhood',
    city: 'City',
    state: 'RJ',
  },
};

const { active, photo, name, email, hireDate, cpf, address: addressDTO } = employeeData;
const { street, zip, neighborhood, city, state } = addressDTO;
export const employeeEntity: Employee = new Employee(
  active,
  name,
  photo,
  email,
  hireDate,
  new CPF(cpf),
  new Address(street, zip, neighborhood, city, state),
);
