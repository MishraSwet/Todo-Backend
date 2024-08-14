const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const app = express();
const port = 3000;
app.use(cors)



app.get('/todos', async (req, res) => {
  res.json(result.rows);
});

app.post('/todos', async (req, res) => {
  const { task } = req.body;
  res.status(201).json({ message: 'Todo added ' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
