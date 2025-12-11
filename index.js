const express = require('express');
const cors = require('cors')
const app = express();


app.use(express.json());
app.use(cors());


app.listen(8085,()=>{
    console.log('Server is running on port 8085');
})