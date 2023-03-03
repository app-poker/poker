const express = require("express");

const app = express();
const port = 4000;

app.get("/test", (req, res) => {
    res.send('<h1>This is poker api</h1>')
});

app.listen(port, () =>
  console.log(`Pocker API listening on port ${port}!`)
);
