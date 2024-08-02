import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://admin:iamtus123@tushar.3waoyr4.mongodb.net/twiggy').then(()=>console.log("DB Connected"));
}