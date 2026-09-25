const express = require('express');
const helloModule = require('./helloModule');

const app = express();
const PORT = 3000;

app.use('/api', helloModule);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});