import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { employeeController } from './infrastructure/ioc';

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.use(cors());

app.get('/api/employees', (req, res) => {
  console.log('getEmployees controller');
  employeeController.getEmployees(req, res);
});
app.post('/api/employees', (req, res) => {
  console.log('createEmployee controller', req.body);
  employeeController.createEmployee(req, res)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
