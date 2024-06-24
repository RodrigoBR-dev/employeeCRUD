import { Employee } from '../../application/domain/employee';
import { EmployeeRepository } from '../../application/domain/employee.repository';
import EmployeeModel from '../models/employee.model';

export class MongoEmployeeRepository implements EmployeeRepository {
  async create(employee: Employee): Promise<Employee> {
    const createdEmployee = new EmployeeModel(employee);
    return await createdEmployee.save();
  }

  async findAll(): Promise<Employee[]> {
    return await EmployeeModel.find();
  }
}
