
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";


//login user

import usermodel from "../models/usermodel.js";

const loginUser = async (req,res) =>{
    const { email, password } = req.body;

    try {
        const user = await usermodel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid password" });
        }

        const token = createToken(user._id);
        res.status(200).json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error!" });
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user

const registerUser = async (req,res) =>{
    const {name,password,email} = req.body;
    try{
        const exists = await usermodel.findOne({email})
        if(exists){
            return res.json({success:false,message:"User Already Exist"})
        }

        //validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please Enter a valid email"});
        }

        if(password.length<8){
            return res.json({success:false,message:"Please Enter Strong Password"})
        }

        // hashing user password

        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password,salt);

        const newUser = new usermodel({
            name:name,
            email:email,
            password:hashedpassword
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true,token})

    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"Error!"})
    }
}

export { loginUser, registerUser };

