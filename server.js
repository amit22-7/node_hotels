import express from 'express'
const app = express()

import './db.js';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

// import bodyParser from 'body-parser';
app.use(express.json());   //req.body

app.get('/', (req, res) => {
  res.send('Hello World');
})

import personRoutes from './routes/personRoutes.js';
app.use('/person',personRoutes);

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000')
})