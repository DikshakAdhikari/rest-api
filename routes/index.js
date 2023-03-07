import express from "express";
import { registerController } from "../controllers";

const router= express.Router();


// router.post('/api/register', (req,res,next)=> {
//     //register logic -> remember inside controller (i.e. at registerController) we write the logic of it, not here.
// } )

router.post('/register', registerController.register); //above shown way to write


export default router