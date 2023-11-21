import User from '../model/user_model.mjs';
import bcryptjs from 'bcryptjs';



const Home = async (req, res)=>{

    try {
        res
        .status(200)
        .send("hellow wellcom to soomro sahab")
    } catch (error) {
        console.log(error)
    }
}

// *-----------------------
// Register
// *-----------------------

const Register = async (req, res)=>{
    try {

        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg: "email already exist "})
        }
        /// password hash
        // const saltRound = 10;
        // const password_hash = await bcryptjs.hash(password, saltRound)


        const userCreate = await User.create({
            username,
             email, 
             phone,
              password
            })
        res.status(200).json({message: userCreate})
    } catch (error) {
        res.status(400).json({msg: "page is not found "})
    }
}
export default {Home , Register}