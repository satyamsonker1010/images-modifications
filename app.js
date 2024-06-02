const express = require('express');
const bodyParser = require('body-parser');
const { SERVER_PORT } = require('./config/constants/constant');
const app = express();

app.listen(SERVER_PORT , ()=>{
    console.log(`Server is running on port ${SERVER_PORT}`);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Import all routers
const imageServiceRouter = require('./sections/image-service/image-service.route');
app.use("/api/v1/image-service",imageServiceRouter);