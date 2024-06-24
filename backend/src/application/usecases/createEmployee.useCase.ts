import { EmployeeRepository } from '../domain/employee.repository';
import { Employee } from '../domain/employee';

export class CreateEmployeeUseCase {
  constructor(private employeeRepository: EmployeeRepository) {}

  async execute(employeeData: Employee): Promise<Employee> {
    return this.employeeRepository.create(employeeData);
  }
}
