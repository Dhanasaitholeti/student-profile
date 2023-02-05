const express = require('express');
const connecttodb = require('./controllers/connecttodb');
const router = require('./routes/routes');
const cors = require('cors')


const app = express();
app.use(cors())
app.use(express.json());
app.use(router);
connecttodb();



app.listen(8080,() => {
    console.log("The server is listening on http://localhost:8080")
})