import { EmployeeRepository } from '../domain/employee.repository';
import { EmployeeDTO } from '../domain/employee.dto';
import { Employee } from '../domain/employee.entity';
import { CPF } from '../domain/cpf.value';
import { Address } from '../domain/address.value';

export class CreateEmployeeUseCase {
  constructor(private employeeRepository: EmployeeRepository) {}

  /**
   * Executes the creation of an employee in the database.
   *
   * @param {EmployeeDTO} employeeData - The data of the employee to be created.
   * @return {Promise<Employee>} A promise that resolves to the created employee.
   */
  async execute(employeeData: EmployeeDTO): Promise<Employee> {
    const { name, email, cpf, hireDate, address: addressDTO, photo, active } = employeeData;
    const document = new CPF(cpf);
    const { street, zip, neighborhood, city, state } = addressDTO;
    const address = new Address(street, zip, neighborhood, city, state);
    const employee = new Employee(active, name, photo, email, hireDate, document, address);
    return this.employeeRepository.create(employee);
  }
}
