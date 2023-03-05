const express = require('express');
const connecttodb = require('./controllers/connecttodb');
const router = require('./routes/routes');
const cors = require('cors')
const studentRoute = require('./routes/studentroutes') 
const updatedata = require('./routes/updateroute')
const app = express();
app.use(cors())
app.use(express.json());
app.use(router);
app.use('/student',studentRoute)
connecttodb();



app.listen(8080,() => {
    console.log("The server is listening on http://localhost:8080")
})