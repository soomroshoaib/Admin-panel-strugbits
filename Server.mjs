import {} from 'dotenv/config'
import express from "express"

// const  router = require('./router/Auth-route');

import Router from './router/Auth_route.mjs';
import Database from './Utils/Db.mjs';


const app = express();

app.use(express.json())
app.use("/app/Auth", Router)
 



// app.use(cors())
// app.use(Router)
// app.use(Coolieparser)


Database().then(()=>{


const Port = process.env.PORT || 4000;

 app.listen(Port,()=>{
    console.log(`http://localhost:${Port}`)
 })

})