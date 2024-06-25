import { EmployeeRepository } from '../domain/employee.repository';
import { Employee } from '../domain/employee.entity';

export class GetEmployeesUseCase {
  constructor(private employeeRepository: EmployeeRepository) {}

  /**
   * Executes the retrieval of all employees from the repository.
   *
   * @return {Promise<Employee[]>} A promise that resolves to an array of Employee objects.
   */
  async execute(): Promise<Employee[]> {
    return this.employeeRepository.findAll();
  }
}
