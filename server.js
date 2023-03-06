import express from "express";
import { APP_PORT } from "./config";
const app= express();
import routes from './routes'; //as we have exported routers using default earlier, so we can give it any name, as here we give routes 

app.use('/api', routes); //our all routes inside routes folder in index.js will get registered in our app using app.use().. And all routes starts after /api/... 


app.listen(APP_PORT, ()=> console.log(`Listening on port ${APP_PORT}`))