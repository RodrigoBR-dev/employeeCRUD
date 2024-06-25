import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import { CreateEmployeeUseCase } from '../../src/application/usecases/createEmployee.useCase';
import { GetEmployeesUseCase } from '../../src/application/usecases/getEmployees.useCase';
import { EmployeeController } from '../../src/infrastructure/controllers/employee.controller';
import { MongoEmployeeRepository } from '../../src/infrastructure/repositories/mongoEmployee.repository';
import EmployeeModel from '../../src/infrastructure/models/employee.model';
import { employeeData, employeeEntity } from '../stub/employee.stub';

const app = express();
app.use(bodyParser.json());

const employeeRepository = new MongoEmployeeRepository(EmployeeModel);
const createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepository);
const getEmployeesUseCase = new GetEmployeesUseCase(employeeRepository);
const employeeController = new EmployeeController(createEmployeeUseCase, getEmployeesUseCase);

app.post('/api/employees', (req, res) => employeeController.createEmployee(req, res));
app.get('/api/employees', (req, res) => employeeController.getEmployees(req, res));

describe('EmployeeController', () => {
  it('should create an employee', async () => {
    jest.spyOn(EmployeeModel.prototype, 'save').mockResolvedValue(employeeEntity);
    const response = await request(app).post('/api/employees').send(employeeData);
    expect(response.status).toBe(201);
    expect(response.body).toBeDefined();
  });

  it('should get all employees', async () => {
    EmployeeModel.find = jest.fn().mockReturnValue([employeeEntity]);
    // jest.spyOn(EmployeeModel.prototype, 'find').mockResolvedValue([employeeData]);
    const response = await request(app).get('/api/employees');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
});
