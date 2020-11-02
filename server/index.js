const express = require('express');
const app = express ();
const port = 4040;
const ctrl = require('./controller')


app.use(express.json());

app.get('/api/FullPackList', ctrl.getFullPack);
app.get('/api/MyPackList', ctrl.getMyPack);
app.put('/api/MyPackList/:id', ctrl.addNote);
app.delete('/api/MyPackList/:id', ctrl.removeFromPack);
app.post('/api/FullPackList/:id', ctrl.addToMyPack);




app.listen(4040, () => console.log(`Server listening on port ${port}`))