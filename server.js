const express = require('express');
const app = express();
const port = 3000;

// Раздаём всё из папки public
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
