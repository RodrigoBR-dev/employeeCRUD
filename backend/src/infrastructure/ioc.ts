import { GetEmployeesUseCase } from '../application/usecases/getEmployees.useCase';
import { CreateEmployeeUseCase } from '../application/usecases/createEmployee.useCase';
import { EmployeeController } from './controllers/employee.controller';
import { MongoEmployeeRepository } from './repositories/mongoEmployee.repository';
import EmployeeModel from './models/employee.model';

const employeeRepository = new MongoEmployeeRepository(EmployeeModel);
const createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepository);
const getEmployeesUseCase = new GetEmployeesUseCase(employeeRepository);
export const employeeController = new EmployeeController(createEmployeeUseCase, getEmployeesUseCase);
