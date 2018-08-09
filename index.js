require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const pc = require('./products_controller')

const app = express();
app.use(bodyParser.json());


massive( process.env.CONNECTION_STRING ).then(db=>{
    console.log('we have made a connection!');
    app.set('db',db);
}).catch((error)=>{console.log(error);
})


app.post('/api/product',pc.create);

app.get('/api/product/:id',pc.getOne);

app.get('/api/products',pc.getAll);

app.put('/api/product/:id',pc.update);

app.delete('/api/product/:id',pc.delete);





app.listen(process.env.PORT,()=>{
    console.log(`we are listening on port ${process.env.PORT}...`)
});