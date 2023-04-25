const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(80, '0.0.0.0', () => {
  console.log('示例应用正在监听 80 端口 !');
});

