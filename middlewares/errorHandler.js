import { DEBUG_MODE } from "../config";
import { ValidationError } from "joi";


const errorHandler= (err,req,res,next)=> {
    let statusCode= 500;

    let data= {
        message: 'Internal server error',
        ...(DEBUG_MODE === 'true' && {originalError: err.message}) //means if DEBUG_MODE is true that only after && condition will run
    }

    if(err instanceof ValidationError){
        statusCode = 422; 
        data= {
            message: err.message
        }
    }

    return res.status(statusCode).json(data); //so whenever validation error comes our status will become 422

}

export default errorHandler;