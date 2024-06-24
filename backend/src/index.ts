import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { employeeController } from './infrastructure/ioc';

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI as string, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.get('/api/employees', (req, res) => employeeController.getEmployees(req, res));
app.post('/api/employees', (req, res) => employeeController.createEmployee(req, res));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
