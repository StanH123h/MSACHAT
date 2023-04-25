const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    //这里处理得到的数据

    res.send(`Received form data: ${password}, ${username}`);
});

app.listen(80, () => {
    console.log('Server listening on port 80');
});