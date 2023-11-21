import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phone:{
        type: Number,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
})

userSchema.pre("save", async function(next){
    // console.log("pre",this)
    const user = this;

    if(user.isModified('password')){
        next();
    }

    try {
        
    } catch (error) {
        
    }
})


const User = new mongoose.model("User", userSchema); 

export default User