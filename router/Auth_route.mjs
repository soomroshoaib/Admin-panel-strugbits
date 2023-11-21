import express from 'express';
import Authcontrollers from '../controllers/Auth_controller.mjs';


const  router = new express.Router();


router.route("/").get(Authcontrollers.Home)

router.route("/register").post(Authcontrollers.Register)


export default router