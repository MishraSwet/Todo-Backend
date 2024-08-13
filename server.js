const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const app = express();
const port = 3000;
app.use(cors)

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});



app.get('/todos', async (req, res) => {
  const result = await pool.query('SELECT * FROM todos');
  res.json(result.rows);
});

app.post('/todos', async (req, res) => {
  const { task } = req.body;
  await pool.query('INSERT INTO todos (task) VALUES ($1)', [task]);
  res.status(201).json({ message: 'Todo added ' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
