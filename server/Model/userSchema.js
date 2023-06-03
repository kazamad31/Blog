import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    profile:{profession:{
        type: String
    },
    phone:{
        type: Number
    },
    address:{
        type: String
    },
    avtar:{
        data: Buffer,
        contentType: String
    }
},
    date:{type:Date,
    default: Date.now},
    tokens:[{token:{type: String, required:true}}]
})
userSchema.methods.generateAuthToken = async function(){
    try {
        let token= jwt.sign({_id:this._id},process.env.SECRET);
        this.tokens= this.tokens.concat({token:token});
        await this.save();
        return token;
}
catch(error){
    console.log(error);
}
    }
const  User= mongoose.model('USER', userSchema);
export default User;