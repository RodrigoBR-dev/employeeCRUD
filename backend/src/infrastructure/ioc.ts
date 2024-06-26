import { GetEmployeesUseCase } from '../application/usecases/getEmployees.useCase';
import { CreateEmployeeUseCase } from '../application/usecases/createEmployee.useCase';
import { MongoEmployeeRepository } from './repositories/mongoEmployee.repository';
import EmployeeModel from './models/employee.model';
import { EmployeeController } from '../presentation/employee.controller';

const employeeRepository = new MongoEmployeeRepository(EmployeeModel);
const createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepository);
const getEmployeesUseCase = new GetEmployeesUseCase(employeeRepository);
export const employeeController = new EmployeeController(createEmployeeUseCase, getEmployeesUseCase);
