const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('<h1>Mission Successful!</h1><p>GitHub Actions se AWS App Runner tak ka safar.</p>');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
