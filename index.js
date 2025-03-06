const express = require('express');
const app = express();
const cors= require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const userRoute = require('./routes/userRoute.js');

require('./db/dbconnection.js');
app.use(cors())
app.use(express.json());

app.use("/api/", userRoute);
app.get("/", (req,res)=>{
    res.send("api working");
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
