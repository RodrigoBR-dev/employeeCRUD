import { Schema, model } from 'mongoose';
import { Employee } from '../../application/domain/employee';

const employeeSchema = new Schema<Employee>({
  active: { type: Boolean, required: true },
  photo: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  hireDate: { type: Date, required: true },
  cpf: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    zip: { type: String, required: true },
    neighborhood: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
  },
});

const EmployeeModel = model<Employee>('Employee', employeeSchema);
export default EmployeeModel;
