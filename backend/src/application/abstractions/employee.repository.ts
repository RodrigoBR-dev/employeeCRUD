import { Employee } from '../../domain/employee.entity';

export interface EmployeeRepository {
  create(employee: Employee): Promise<Employee>;
  findAll(): Promise<Employee[]>;
}
