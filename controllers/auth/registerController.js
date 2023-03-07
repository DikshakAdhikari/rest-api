import Joi from 'joi' //package used for user validation.. npm i joi

const registerController= { // here inside this we'll group methods
    register(req,res,next){
        /* Checklist
        . Validate the request
        . Authorize the request
        . Check if user is in the database already
        . prepare model
        . store in database
        . generate jwt token
        . send response
        */
        

            //validation= > for validation we make schema
            const registerSchema= Joi.object({
                name: Joi.string().min(3).max(30).required(), //i want name to be string so i used Joi for string and i want string should be minimum of 3 characters and max 30 char is required
                email:Joi.string().email().required(), //joi provides email method used for correct validatation of email
                password:Joi.string().pattern(new RegExp('^[a-zA-z0-9]{3,30}$')).required(),
                repeatPassword: Joi.ref('password')

            });


            console.log(req.body);

            const { error }= registerSchema.validate(req.body); // Joi will validate user send data 
            if(error){
                return next(error);
            }
        



        res.json({msg:"Hello from Express"})
    }


}



export default registerController