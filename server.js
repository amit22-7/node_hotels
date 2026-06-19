import express from 'express'
const app = express()

import './db.js';

// import bodyParser from 'body-parser';
app.use(express.json());   //req.body

app.get('/', (req, res) => {
  res.send('Hello World');
})

import personRoutes from './routes/personRoutes.js';
app.use('/person',personRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})