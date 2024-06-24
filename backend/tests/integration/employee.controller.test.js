"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const createEmployee_useCase_1 = require("../../src/application/usecases/createEmployee.useCase");
const getEmployees_useCase_1 = require("../../src/application/usecases/getEmployees.useCase");
const employee_controller_1 = require("../../src/infrastructure/controllers/employee.controller");
const mongoEmployee_repository_1 = require("../../src/infrastructure/repositories/mongoEmployee.repository");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const employeeRepository = new mongoEmployee_repository_1.MongoEmployeeRepository();
const createEmployeeUseCase = new createEmployee_useCase_1.CreateEmployeeUseCase(employeeRepository);
const getEmployeesUseCase = new getEmployees_useCase_1.GetEmployeesUseCase(employeeRepository);
const employeeController = new employee_controller_1.EmployeeController(createEmployeeUseCase, getEmployeesUseCase);
app.post('/api/employees', (req, res) => employeeController.createEmployee(req, res));
app.get('/api/employees', (req, res) => employeeController.getEmployees(req, res));
describe('EmployeeController', () => {
    it('should create an employee', () => __awaiter(void 0, void 0, void 0, function* () {
        const employeeData = {
            active: true,
            photo: 'photo_url',
            name: 'John Doe',
            email: 'john.doe@example.com',
            hireDate: new Date(),
            cpf: '12345678900',
            address: {
                street: 'Street',
                zip: '00000000',
                neighborhood: 'Neighborhood',
                city: 'City',
                state: 'State'
            }
        };
        const response = yield (0, supertest_1.default)(app).post('/api/employees').send(employeeData);
        expect(response.status).toBe(201);
    }));
    it('should get all employees', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get('/api/employees');
        expect(response.status).toBe(200);
    }));
});
