const express = require('express');
const app = express ();
const port = 4040;

app.use(express.json());





app.listen(4040, () => console.log(`Server listening on port ${port}`))