import dotenv from 'dotenv'
dotenv.config();

export const{ //object Destructuring. Means we are getting APP_PORT from process.env
    APP_PORT
}=process.env  